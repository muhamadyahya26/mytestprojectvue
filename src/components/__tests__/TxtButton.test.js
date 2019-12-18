import { shallowMount } from '@vue/test-utils';
import TxtButton from '../TxtButton.vue';

describe('TxtButton.vue', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(TxtButton);
  });

  afterEach(() => {
    wrapper.destroy();
  })

  it('should render correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  })

  it('should change text label when button clicked', () => {
    wrapper.find('.btn-action').trigger('click.prevent');
    
    expect(wrapper.vm.label).toBe('Hello'); 
  })  
});
