<template>
    <!-- slot默认插槽，用来接收父组件传递的内容 -->
    <button class="s-button">
        <slot></slot>
    </button>
</template>

<script>
/* eslint-disable */
export default {
    name: 'SButton'
}
</script>

<style lang="scss" scoped>
    .s-button {
        display: inline-block;
        line-height: 1;
        // 元素内文本不换行
        white-space: nowrap;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #dcdfe6;
        color: #606266;
        // 用于消除元素的默认外观或者样式
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        // 控制元素的外框线效果
        outline: none;
        margin: 0;
        // 控制动画时间
        transition: 0.5s;
        font-weight: 500;
        // 禁止元素的文字被选中
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        // 鼠标选中效果
        &:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }

    }
</style>
