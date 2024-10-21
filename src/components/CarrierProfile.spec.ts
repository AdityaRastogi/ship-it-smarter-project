import { mount , VueWrapper} from '@vue/test-utils';
import CarrierProfile from './CarrierProfile.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useCarrierProfileStore } from '../stores/CarrierProfileStore';
import { createVuetify } from 'vuetify';
import { nextTick } from 'vue';

describe('CarrierProfile', () => {
  let wrapper: VueWrapper;
  let carrierProfileStore: any;
  let vuetify: any;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    carrierProfileStore = useCarrierProfileStore();

    vuetify = createVuetify();
    wrapper = mount(CarrierProfile, {
      global: {
        plugins: [vuetify, pinia],
      },
    });
  });

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.page-title h2').text()).toBe('Carrier Profile for WH1');
  });

  it('store loaded correctly', async () => {
    expect(carrierProfileStore.carrierProfileData.label).toBe('');
    expect(carrierProfileStore.carrierProfileData.reference).toBe('');
    expect(carrierProfileStore.carrierProfileData.integrationSetOptions.length).toBe(3);
    expect(carrierProfileStore.carrierProfileData.selectedPricing).toBe("ShipitSmarter base tariffs");
    expect(carrierProfileStore.carrierProfileData.cancelOrderOptions.length).toBe(2);
  });

  it('submits the form and prevents submission when required fields are empty', async () => {

    await wrapper.find('[data-testid="save-btn"]').trigger('click');

    await nextTick();

    expect(carrierProfileStore.carrierProfileData.label).toBe('');
    expect(carrierProfileStore.carrierProfileData.reference).toBe('');
  });

  it('submits form and store gets updated successfully', async () => {
    const wrapper = mount(CarrierProfile, {
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.vm.$nextTick(); 

    wrapper.vm.carrierFormValues.selectedIntegrationSet = 'Server A';
    wrapper.vm.carrierFormValues.label = 'Label';
    wrapper.vm.carrierFormValues.reference = 'Reference';
    wrapper.vm.carrierFormValues.selectedPricing = 'Basic carrier pricing';

    await wrapper.find('[data-testid="save-btn"]').trigger('click');

    expect(carrierProfileStore.carrierProfileData.selectedPricing).toBe("Basic carrier pricing");
    expect(carrierProfileStore.carrierProfileData.selectedIntegrationSet).toBe('Server A');
    expect(carrierProfileStore.carrierProfileData.label).toBe('Label');
    expect(carrierProfileStore.carrierProfileData.reference).toBe('Reference');
  });
});
