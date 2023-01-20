import { defineStore } from "pinia";
import { ICustomer } from "../types/index";

export const useCustomerStore = defineStore("customer-store", {
  state: () => ({
    customers: [] as ICustomer[],
    sites: [],
    meters: [],
    circuits: [],
  }),
  actions: {
    async getCustomers() {
      try {
        let data = await $fetch<ICustomer[]>("/api/customers");
        this.customers = data;
        return data as ICustomer[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
