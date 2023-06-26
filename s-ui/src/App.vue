<template>
  <div id="app">
    <div class="row">
      <s-button>按钮</s-button>
      <s-button type="primary">按钮</s-button>
      <s-button type="success">按钮</s-button>
      <s-button type="info">按钮</s-button>
      <s-button type="warning">按钮</s-button>
      <s-button type="danger">按钮</s-button>
    </div>
    <div class="row">
      <s-button plain>按钮</s-button>
      <s-button plain type="primary">按钮</s-button>
      <s-button plain type="success">按钮</s-button>
      <s-button plain type="info">按钮</s-button>
      <s-button plain type="warning">按钮</s-button>
      <s-button plain type="danger">按钮</s-button>
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
      <s-button circle round plain>哈</s-button>
      <s-button circle plain type="primary">哈</s-button>
      <s-button circle plain type="success">哈</s-button>
      <s-button circle plain type="info">哈</s-button>
      <s-button circle plain type="warning">哈</s-button>
      <s-button circle plain type="danger">哈</s-button>
    </div>
  </div>
</template>

<script>
export default {

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
