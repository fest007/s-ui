<template>
    <!-- {'is-plain': plain}当值为真时加上键的类名 -->
    <button class="s-button" :class="[`s-button-${type}`, {'is-plain': plain, 'is-round': round, 'is-circle': circle}]">
    <!-- slot默认插槽，用来接收父组件传递的内容 -->
        <slot></slot>
    </button>
</template>

<script>
/* eslint-disable */
export default {
    name: 'SButton',
    // 封装通用的组件，需要对传入的props做一个校验
    props: {
        type: {
            // 数据的类型
            type: String,
            // 默认值
            default: 'default'
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
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

// primary按钮的样式
.s-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
}

// success按钮的样式
.s-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
}

// info按钮的样式
.s-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
}

// warning按钮的样式
.s-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}

// danger按钮的镂空样式
.s-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
}

// 朴素（镂空）按钮的样式
.s-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #489eff;
        color: #409eff;
    }
}

// primary按钮的镂空样式
.s-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;

    &:hover,
    &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
}

// success按钮的镂空样式
.s-button-success.is-plain {
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
}

// info按钮的镂空样式
.s-button-info.is-plain {
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

// warning按钮的镂空样式
.s-button-warning.is-plain {
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

// danger按钮的镂空样式
.s-button-danger.is-plain {
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}

// 圆角按钮的样式
.s-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// 圆形按钮的样式
.s-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
</style>
