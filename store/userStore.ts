import { defineStore } from "pinia";
import { IUser } from "../types/index";

export const useUserStore = defineStore("user-store", {
  state: () => ({
    user: [] as IUser[]
  }),
  actions: {
    async getCustomers() {
      try {
        let data = await $fetch<IUser[]>("/api/customers");
        this.user = data;
        return data as IUser[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});