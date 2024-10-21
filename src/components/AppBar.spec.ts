const { mount } = require('@vue/test-utils');
const AppBar = require('./AppBar.vue');

describe('ToolbarComponent.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AppBar);
  });

  it('renders the AppBar with the correct elements', () => {
    const vSelect = wrapper.find('.dropdown-input');
    expect(vSelect.exists()).toBe(true);

    const title = wrapper.find('span h4');
    expect(title.text()).toBe('/ Shipments');

    const searchInput = wrapper.find('.search-input');
    expect(searchInput.exists()).toBe(true);

   
    const rocketButton = wrapper.find('.rocket-launch');
    expect(rocketButton.exists()).toBe(true);


    const accountButton = wrapper.find('.account');
    expect(accountButton.exists()).toBe(true);
  });
});
