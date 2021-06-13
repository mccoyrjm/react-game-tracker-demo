import { mount } from 'enzyme'
import App from './App'

describe('App component', () => {
  it('renders component', () => {
    const wrapper = mount(<App />)
    expect(wrapper.exists()).toBe(true)
  })
})
