import { CarrierProfileData } from "../stores/CarrierProfileStore";

export const mockData:CarrierProfileData = {
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
