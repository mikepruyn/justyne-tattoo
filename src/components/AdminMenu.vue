<template>
  <div class="admin-menu">
    <router-link to="/admin/work" class="menu-item">Manage Work</router-link>
    <router-link to="/admin/flash" class="menu-item">Manage Flash</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.admin-menu {
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
  margin-top: 50px;
}
.menu-item {
  text-decoration: none;
}
</style>