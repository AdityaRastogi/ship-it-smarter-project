<template>
  <v-main>
    <v-card rounded="0" flat>
      <v-toolbar color="#f7f5f5">
        <div class="page-title">
          <h2>Carrier Profile for WH1</h2>
        </div>

        <v-spacer></v-spacer>
        <v-btn class="text-black"> Edit </v-btn>

        <v-btn
          data-testid="save-btn"
          class="text-none ms-4 text-white custom-theme"
          rounded="0"
          variant="flat"
          @click="saveForm"
        >
          Save
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="9">
          <div class="details-form">
            <h2>Details</h2>
            <v-form ref="carrierProfileForm" @submit.prevent="saveForm">
              <v-select
                class="integration-set"
                v-model="carrierFormValues.selectedIntegrationSet"
                :items="carrierProfileData.integrationSetOptions"
                :rules="[(v) => !!v || 'Integration Set is required']"
                label="Select integration set"
                required
              ></v-select>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    data-testid="carrier-label"
                    v-model="carrierFormValues.label"
                    :rules="[(v) => !!v || 'Label is required']"
                    label="Label"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    data-testid="carrier-ref"
                    v-model="carrierFormValues.reference"
                    :rules="[(v) => !!v || 'Reference is required']"
                    label="Reference"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <h2>Select Modules</h2>
              <div class="details-form-section">
                <h3>Ordering</h3>
                <v-card
                  :class="
                    carrierFormValues.adviceForwardingOrder === true
                      ? 'selected-section-card section-card'
                      : 'section-card'
                  "
                >
                  <v-checkbox
                    data-testid="advice-forwarding"
                    color="#2392a4"
                    class="section-checkbox"
                    :label="`Advice Forwarding order - XML`"
                    v-model="carrierFormValues.adviceForwardingOrder"
                  ></v-checkbox>
                  <v-card-subtitle class="text-wrap">
                    Pre-information of your forwarding orders (necessary to
                    schedule the activity).They can be changed until the final
                    Forwarding Order is sent. The advice forwarding order
                    message can be configured to be provided to Dachser.
                  </v-card-subtitle>
                </v-card>
              </div>

              <div class="details-form-section">
                <h3>Manifesting</h3>
                <v-card
                  :class="
                    carrierFormValues.forwardingOrders === true
                      ? 'selected-section-card section-card'
                      : 'section-card'
                  "
                >
                  <v-checkbox
                    color="#2392a4"
                    class="section-checkbox"
                    :label="`Forwarding Orders - XML`"
                    v-model="carrierFormValues.forwardingOrders"
                  ></v-checkbox>
                  <v-card-subtitle class="text-wrap">
                    Your orders to transport goods from you to a consignee.
                  </v-card-subtitle>
                </v-card>
              </div>

              <div class="details-form-section">
                <h3>Tracking</h3>
                <v-card
                  :class="
                    carrierFormValues.configureTracking === true
                      ? 'selected-section-card section-card'
                      : 'section-card'
                  "
                >
                  <v-checkbox
                    class="section-checkbox"
                    color="#2392a4"
                    :label="`Configure tracking file formats provided by the carrier through SFTP`"
                    v-model="carrierFormValues.configureTracking"
                  ></v-checkbox>
                  <v-card-subtitle class="text-wrap">
                    Carrier publishes files to FTP. Requires setup from both you
                    and the carrier.
                  </v-card-subtitle>
                </v-card>
              </div>
              <h3>Pricing</h3>

              <v-radio-group v-model="carrierFormValues.selectedPricing" inline>
                <v-radio
                  data-testid="basic-pricing-radio"
                  color="#2392a4"
                  label="Basic carrier pricing"
                  value="Basic carrier pricing"
                ></v-radio>
                <v-radio
                  data-testid="shipit-base-radio"
                  color="#2392a4"
                  label="ShipitSmarter base tariffs"
                  value="ShipitSmarter base tariffs"
                ></v-radio>
              </v-radio-group>
              <h3>Cancel Order</h3>
              <v-row>
                <v-col cols="4">
                  <v-checkbox
                    color="#2392a4"
                    :label="`Email carrier cancellation`"
                    v-model="
                      carrierFormValues.selectedCancelOrderOption
                        .emailCarrierCancellation
                    "
                  ></v-checkbox>
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    color="#2392a4"
                    :label="`Text message carrier cancellation`"
                    v-model="
                      carrierFormValues.selectedCancelOrderOption
                        .textCarrierCancellation
                    "
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>

        <v-col cols="3">
          <img
            class="right-side-bar"
            src="../assets/right-side-bar.png"
            alt="Right-side-bar"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { mockData } from "../data/mockCarrierProfileData.js";
import { ref, onMounted, computed } from "vue";
import {
  useCarrierProfileStore,
  CarrierProfileData,
} from "../stores/CarrierProfileStore";
import { VForm } from "vuetify/components";

const carrierProfileForm = ref<VForm | null>(null);
const carrierProfileStore = useCarrierProfileStore();
const carrierProfileData = computed(
  () => carrierProfileStore.getCarrierProfileData
);
interface CarrierFormValues {
  selectedIntegrationSet: string;
  label: string;
  reference: string;
  adviceForwardingOrder: boolean;
  forwardingOrders: boolean;
  configureTracking: boolean;
  selectedPricing: string;
  selectedCancelOrderOption: {
    emailCarrierCancellation: boolean;
    textCarrierCancellation: boolean;
  };
}

const carrierFormValues = ref<CarrierFormValues>({
  selectedIntegrationSet: "",
  label: "",
  reference: "",
  adviceForwardingOrder: false,
  forwardingOrders: false,
  configureTracking: false,
  selectedPricing: "",
  selectedCancelOrderOption: {
    emailCarrierCancellation: false,
    textCarrierCancellation: false,
  },
});

const initializeFormValues = () => {
  const data = carrierProfileData.value;
  if (data) {
    carrierFormValues.value.selectedIntegrationSet =
      data.selectedIntegrationSet;
    carrierFormValues.value.label = data.label;
    carrierFormValues.value.reference = data.reference;
    carrierFormValues.value.adviceForwardingOrder = data.adviceForwardingOrder;
    carrierFormValues.value.forwardingOrders = data.forwardingOrders;
    carrierFormValues.value.configureTracking = data.configureTracking;
    carrierFormValues.value.selectedPricing = data.selectedPricing;
    carrierFormValues.value.selectedCancelOrderOption.emailCarrierCancellation =
      data.selectedCancelOrderOption.includes("Email carrier cancellation");
    carrierFormValues.value.selectedCancelOrderOption.textCarrierCancellation =
      data.selectedCancelOrderOption.includes(
        "Text message carrier cancellation"
      );
  }
};

onMounted(() => {
  carrierProfileStore.initializeCarrierProfileData(
    mockData<CarrierProfileData>
  );
  initializeFormValues();
});

const setStore = () => {
  carrierProfileStore.setCarrierProfileData(
    "selectedIntegrationSet",
    carrierFormValues.value.selectedIntegrationSet
  );
  carrierProfileStore.setCarrierProfileData(
    "label",
    carrierFormValues.value.label
  );
  carrierProfileStore.setCarrierProfileData(
    "reference",
    carrierFormValues.value.reference
  );
  carrierProfileStore.setCarrierProfileData(
    "adviceForwardingOrder",
    carrierFormValues.value.adviceForwardingOrder
  );
  carrierProfileStore.setCarrierProfileData(
    "forwardingOrders",
    carrierFormValues.value.forwardingOrders
  );
  carrierProfileStore.setCarrierProfileData(
    "configureTracking",
    carrierFormValues.value.configureTracking
  );
  carrierProfileStore.setCarrierProfileData(
    "selectedPricing",
    carrierFormValues.value.selectedPricing
  );

  const selectedCancelOptions = [];
  if (
    carrierFormValues.value.selectedCancelOrderOption.emailCarrierCancellation
  ) {
    selectedCancelOptions.push("Email carrier cancellation");
  }
  if (
    carrierFormValues.value.selectedCancelOrderOption.textCarrierCancellation
  ) {
    selectedCancelOptions.push("Text message carrier cancellation");
  }
  carrierProfileStore.setCarrierProfileData(
    "selectedCancelOrderOption",
    selectedCancelOptions
  );
};

const saveForm = async () => {
  if (carrierProfileForm.value) {
    const { valid } = await carrierProfileForm?.value?.validate();
    if (valid) {
      setStore();
      console.log(
        "Saved Carrier Profile Data:",
        carrierProfileStore.getCarrierProfileData
      );
    } else {
      return;
    }
  }
};
</script>

<style scoped>
.text-wrap {
  text-wrap: pretty;
}

.v-container {
  max-width: 100% !important;
  margin-left: 20px;
}

.details-form {
  -webkit-box-shadow: 3px 3px 6px -1px rgba(247, 245, 245, 0.76);
  -moz-box-shadow: 3px 3px 6px -1px rgba(247, 245, 245, 0.76);
  box-shadow: 3px 3px 6px -1px rgba(158, 157, 157, 0.76);
  height: 100%;
  border-radius: 8px;
  background: #fff;
  padding: 20px;
  color: #000 !important;
}

.details-form-section {
  margin: 20px 0px;
  color: #000 !important;
}

.section-card {
  border: 1px solid #d4dbe2;
  border-radius: 8px;
  padding: 0 0 10px 10px;
  color: #000 !important;
}

.section-checkbox {
  height: 50px;
  color: #000 !important;
}

.page-title {
  margin-left: 30px;
  color: #2392a4;
}

.right-side-bar {
  width: 100%;
}

.custom-theme {
  background-color: #2392a4;
}

.selected-section-card {
  background-color: #e3f5f8;
  border: 1px solid #2392a4;
}
</style>
