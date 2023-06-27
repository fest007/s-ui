<template>
  <div id="app">
    <div class="row">
      <s-button @click="fn">按钮</s-button>
      <s-button type="primary">按钮</s-button>
      <s-button type="success">按钮</s-button>
      <s-button type="info">按钮</s-button>
      <s-button type="warning">按钮</s-button>
      <s-button type="danger">按钮</s-button>
    </div>
    <div class="row">
      <s-button icon="s-icon-check" plain>按钮</s-button>
      <s-button icon="s-icon-check" plain type="primary">按钮</s-button>
      <s-button icon="s-icon-check" plain type="success">按钮</s-button>
      <s-button icon="s-icon-check" plain type="info">按钮</s-button>
      <s-button icon="s-icon-check" plain type="warning">按钮</s-button>
      <s-button icon="s-icon-check" plain type="danger">按钮</s-button>
    </div>
    <div class="row">
      <s-button round plain>按钮</s-button>
      <s-button round plain type="primary">按钮</s-button>
      <s-button round plain type="success">按钮</s-button>
      <s-button round plain type="info">按钮</s-button>
      <s-button round plain type="warning">按钮</s-button>
      <s-button round plain type="danger">按钮</s-button>
    </div>
    <div class="row">
      <s-button round disabled plain>按钮</s-button>
      <s-button round disabled plain type="primary">按钮</s-button>
      <s-button round disabled plain type="success">按钮</s-button>
      <s-button round disabled plain type="info">按钮</s-button>
      <s-button round disabled plain type="warning">按钮</s-button>
      <s-button round disabled plain type="danger">按钮</s-button>
    </div>
    <div class="row">
      <s-button circle plain>哈</s-button>
      <s-button circle plain type="primary">哈</s-button>
      <s-button circle plain type="success">哈</s-button>
      <s-button circle plain type="info">哈</s-button>
      <s-button circle plain type="warning">哈</s-button>
      <s-button circle plain type="danger">哈</s-button>
    </div>
    <div class="row">
      <s-button circle icon="s-icon-info" plain></s-button>
      <s-button circle icon="s-icon-info" plain type="primary"></s-button>
      <s-button circle icon="s-icon-info" plain type="success"></s-button>
      <s-button circle icon="s-icon-info" plain type="info"></s-button>
      <s-button circle icon="s-icon-info" plain type="warning"></s-button>
      <s-button circle icon="s-icon-info" plain type="danger"></s-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    fn(e) {
      console.log(123);
    },
  }
}
</script>

<style lang="scss" scoped>
  .row{
    margin-bottom: 20px;
    .s-button {
      margin-right: 20px;
    }
  }
</style>
