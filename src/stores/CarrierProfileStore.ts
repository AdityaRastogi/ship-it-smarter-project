import { defineStore } from "pinia";

export interface CarrierProfileData {
  selectedIntegrationSet: string;
  integrationSetOptions: string[];
  label: string;
  reference: string;
  adviceForwardingOrder: boolean;
  forwardingOrders: boolean;
  configureTracking: boolean;
  selectedPricing: string;
  pricingOptions: string[];
  selectedCancelOrderOption: string[];
  cancelOrderOptions: string[];
}

export interface CarrierProfileState {
  carrierProfileData: CarrierProfileData;
}



export const useCarrierProfileStore = defineStore('carrierProfileStore',{
    state:():CarrierProfileState => ({
      carrierProfileData: {
        selectedIntegrationSet: '',
        integrationSetOptions: [],
        label: '',
        reference: '',
        adviceForwardingOrder: false,
        forwardingOrders: false,
        configureTracking: false,
        selectedPricing: '',
        pricingOptions: [],
        selectedCancelOrderOption: [],
        cancelOrderOptions: [],
      },
    }),
    getters: {
      getCarrierProfileData: (state) => state.carrierProfileData,
    },
    actions: {
      initializeCarrierProfileData(mockData: CarrierProfileData) {
        this.carrierProfileData = { ...mockData };
      },
      setCarrierProfileData<T extends keyof CarrierProfileData>(key: T, value: CarrierProfileData[T]) {
        this.carrierProfileData[key] = value;
      },
    }
})