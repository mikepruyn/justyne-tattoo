import {defineStore} from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({ adminAccess: false }),
    actions: {
      giveAdminAccess() {
        this.adminAccess = true;
      },
    },
  })