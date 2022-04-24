<template>
  <h2>Termékek</h2>
  <div class="container" style="width: 60%; float: left">
      <div class="row">
          <div class="card col-lg-3 col-md-4 " v-for="a in adatok" :key="a.id" style="margin: 10px">
              <div class="card-body">
                  <h2>{{a.termekneve}}</h2>
                  <h3>{{a.ar}}Ft</h3>
                  <h3>{{a.raktarkeszlet}}db</h3>
                  <button @click="onSub(a.ar, a.id, a.termekneve)" class="btn btn-danger">-</button>
                  <button @click="onAdd(a.ar, a.id, a.termekneve)" class="btn btn-primary">+</button>
              </div>
          </div>
      </div>
  </div>
  <div class="container" style="width: 40%; float: left">
    <h2>Fizetendő összeg: {{this.osszeg}} Ft</h2>
    <button @click="clear()" class="btn btn-success">Eladás</button>
    
    <h2 style="margin-top: 5%">Termékek:</h2>
    <div v-for="termek in termekek" :key="termek">
      <h3>{{termek}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return{
      adatok: [],
      osszeg : 0,
      termekek: []
    }
  },
  created(){
    axios.get('http://localhost:5000/api/Raktarkezelo/termekek')
         .then(response => {this.adatok = response.data})
         .catch((error) => console.log(error));
  },
  methods: {
    onAdd(ar, id, termekneve){
      this.osszeg += ar;
      console.log(this.osszeg);
      axios.put("http://localhost:5000/api/Raktarkezelo/termekek/csokkentes" + "/" + id)
           .catch((error) => console.log(error));
      this.termekek.push(termekneve);
    },
    onSub(ar, id, termekneve){
      if(this.osszeg > 0){
        this.osszeg -= ar;
        axios.put("http://localhost:5000/api/Raktarkezelo/termekek/noveles" + "/" + id)
           .catch((error) => console.log(error));
      }
      for(var i=0; i < this.termekek.length; i++){
        if(this.termekek[i] == termekneve){
          return this.termekek.splice(i, 1);
        }
      }
    },
    clear(){
      window.location.reload();
    }
  }
}
</script>

<style>

/* Lineáris színátmenetet kell még belerakni */
  body{
    background: linear-gradient(#e66465, #9198e5);
    background-attachment: fixed;
  }
    
  
  .card{
    background: linear-gradient(#9198e5,#cfb687);
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    transition: .15s all ease-in-out;
  }
  .card:hover{
    transform: scale(1.2);
    z-index: 100;
    background-color: #fff;
  }

</style>