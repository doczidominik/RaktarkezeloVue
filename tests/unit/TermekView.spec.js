import { mount } from '@vue/test-utils'
import TermekView from '@/views/TermekView.vue'

describe('TermekView oldal tesztje', () => {
  test('statikus tartalom ellenőrzése', () => {

    const wrapper = mount(TermekView);

    expect(wrapper.text()).toContain('Termékek');
  })
})
