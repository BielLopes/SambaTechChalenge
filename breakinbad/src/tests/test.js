import { shallowMount } from '@vue/test-utils'
import Hello from './Hello.vue'

test('Hello', () => {
  // renderiza o componente
  const wrapper = shallowMount(Hello)

  // não deve permitir `username` menor que 7 caracteres, exclui espaço em branco
  wrapper.setData({ username: ' '.repeat(7) })

  // afirma se a mensagem de erro está renderizada
  expect(wrapper.find('.error').exists()).toBe(true)

  // atualiza o nome para ser longo o suficiente
  wrapper.setData({ username: 'Lachlan' })

  // afirma se a mensagem de erro se foi
  expect(wrapper.find('.error').exists()).toBe(false)
})