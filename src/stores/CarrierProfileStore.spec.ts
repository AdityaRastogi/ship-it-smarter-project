import { createPinia, setActivePinia } from "pinia";
import { useCarrierProfileStore } from "./CarrierProfileStore";
import { CarrierProfileData } from "./CarrierProfileStore";

describe("useCarrierProfileStore", () => {
  let store: ReturnType<typeof useCarrierProfileStore>;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    store = useCarrierProfileStore();
  });

  it("should initialize carrierProfileData with default values", () => {
    expect(store.carrierProfileData).toEqual({
      selectedIntegrationSet: "",
      integrationSetOptions: [],
      label: "",
      reference: "",
      adviceForwardingOrder: false,
      forwardingOrders: false,
      configureTracking: false,
      selectedPricing: "",
      pricingOptions: [],
      selectedCancelOrderOption: [],
      cancelOrderOptions: [],
    });
  });

  it("should initialize carrierProfileData with provided data", () => {
    const mockData: CarrierProfileData = {
      selectedIntegrationSet: "",
      integrationSetOptions: ["Server A", "Server B", "Server C"],
      label: "",
      reference: "",
      adviceForwardingOrder: false,
      forwardingOrders: false,
      configureTracking: true,
      selectedPricing: "ShipitSmarter base tariffs",
      pricingOptions: ["Basic Carrier pricing", "ShipitSmarter base tariffs"],
      selectedCancelOrderOption: [],
      cancelOrderOptions: [
        "Email carrier cancellation",
        "Text message carrier cancellation",
      ],
    };
    store.initializeCarrierProfileData(mockData);
    expect(store.carrierProfileData).toEqual(mockData);
  });

  it("should set carrierProfileData properties correctly", () => {
    store.setCarrierProfileData("selectedIntegrationSet", "Server A");
    expect(store.carrierProfileData.selectedIntegrationSet).toBe(
      "Server A"
    );
  });

  it("should get carrierProfileData correctly", () => {
    const mockData: CarrierProfileData = {
        selectedIntegrationSet: "",
        integrationSetOptions: ["Server A", "Server B", "Server C"],
        label: "",
        reference: "",
        adviceForwardingOrder: false,
        forwardingOrders: false,
        configureTracking: true,
        selectedPricing: "ShipitSmarter base tariffs",
        pricingOptions: ["Basic Carrier pricing", "ShipitSmarter base tariffs"],
        selectedCancelOrderOption: [],
        cancelOrderOptions: [
          "Email carrier cancellation",
          "Text message carrier cancellation",
        ],
      };
    store.initializeCarrierProfileData(mockData);
    expect(store.getCarrierProfileData).toEqual(mockData);
  });
});
