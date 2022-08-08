<template>
<div>
    <div class="admin-menu">
        <router-link to="/admin/work" :class="{'menu-item': true, selectedItem: (folder=='work')}">Work</router-link>
        <router-link to="/admin/flash" :class="{'menu-item': true, selectedItem: (folder=='flash')}">Flash</router-link>
    </div>
    <PasswordProtect v-if="!store.adminAccess"/>
    <div v-else>
        <ManageFlash v-if="folder == 'flash'"></ManageFlash>
        <ManageWork v-else></ManageWork>
    </div>
</div>
</template>

<script>
import PasswordProtect from './PasswordProtect.vue';
import {useStore} from '../pinia/store';
import ManageFlash from './ManageFlash.vue';
import ManageWork from './ManageWork.vue';

export default {
    components: {
        PasswordProtect,
        ManageFlash,
        ManageWork
    },
    props: {
        folder: String
    },
    data: () => {
        return {
        }
    },
    setup() {
        let store = useStore();
        return {
            store
        }
    }
}
</script>

<style scoped>
.admin-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
.selectedItem {
    color: red;
    scale: 1.3;
}
</style>