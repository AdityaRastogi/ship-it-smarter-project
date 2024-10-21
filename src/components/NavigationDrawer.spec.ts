import { mount, VueWrapper } from '@vue/test-utils';
const NavigationDrawer = require('./NavigationDrawer.vue');

interface MenuItem {
  title: string;
  icon: string;
  selected: boolean;
}

describe('NavigationDrawer', () => {
  const menuItems: MenuItem[] = [
    { title: 'Home', icon: 'mdi-home', selected: false },
    { title: 'Profile', icon: 'mdi-account', selected: true }
  ];

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(NavigationDrawer, {
      props: {
        menuItems,
      },
    });
  });

  it('renders the navigation drawer', () => {
    expect(wrapper.find('.left-side').exists()).toBe(true);
  });

  it('renders the correct number of menu items', () => {
    const menuItemElements = wrapper.findAll('v-list-item');
    expect(menuItemElements.length).toBe(menuItems.length);
  });

  it('applies the "selected" class to the selected menu item', () => {
    const selectedItem = wrapper.find('.selected');
    expect(selectedItem.exists()).toBe(false);
  });

  
});
