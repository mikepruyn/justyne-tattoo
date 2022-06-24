<template>
<div>
    <ManageFlash v-if="validated"/>
    <PasswordProtect v-if="!validated" @validated="validated = true"/>
</div>
</template>

<script>
import ManageFlash from './ManageFlash.vue'
import PasswordProtect from './PasswordProtect.vue'

export default {
    components: {
        ManageFlash,
        PasswordProtect
    },
    data: () => {
        return {
            validated: false
        }
    }
}
</script>

<style>

</style>