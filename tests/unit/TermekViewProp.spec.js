import { mount } from '@vue/test-utils'
import TermekView from '@/views/TermekView.vue'

describe('TermekView oldal tesztje', () => {
  test('Termékek tömb értéke undefined', async () => {

    const wrapper = mount(TermekView);
    
    await expect(wrapper.vm.termekek[0]).toBe(undefined);
  })

  test('Az összeg értéke 0', async () => {

    const wrapper = mount(TermekView);
    
    await expect(wrapper.vm.osszeg).toBe(0);
  })
  
})
