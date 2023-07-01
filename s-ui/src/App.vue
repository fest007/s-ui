<template>
  <!-- eslint-disable -->
  <div id="app">
    <!-- <s-input placeholder="请输入用户名" type="password" name="username" disabled></s-input> -->
    <s-input placeholder="请输入用户名" v-model="username" clearable></s-input>
    <s-input placeholder="请输入用户名" v-model="username" type='password' show-password></s-input>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      username: 'zhangsan'
    }
  }
}
</script>

<style lang="scss" scoped>
  .s-input {
    width: 180px !important;
  }
</style>
