<template>
    <!-- eslint-disable -->
    <!-- transition给dialog添加动画效果 -->
    <transition name="dialog-fade">
        <!-- 对话框的遮罩 .self代表点击自己才触发-->
        <div class="s-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <!-- dialog -->
            <!-- 动态绑定样式，使width和top生效 -->
            <div class="s-dialog" :style="{ width, marginTop: top }">
                <!-- header -->
                <div class="s-dialog__header">
                    <!-- 标题名称 -->
                    <!-- 小技巧：当没有传递具名slot时，其中的span就会被渲染，当传递时，就会替换成传递的样式 -->
                    <slot name="title">
                        <span class="s-dialog__title">{{ title }}</span>
                    </slot>
                    <!-- 关闭按钮 -->
                    <button class="s-dialog__headerbtn" @click="handleClose">
                        <i class="s-icon-close"></i>
                    </button>
                </div>
                <!-- dialog内容部分 -->
                <div class="s-dialog__body">
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <!-- dialog footer部分,通过具名插槽来传递内容,如果没有传，就不渲染 -->
                <div class="s-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
/* eslint-disable */
export default {
    name: 'SDialog',

    props: {
        // 标题名
        title: {
            type: String,
            default: '提示'
        },
        // dialog的宽度
        width: {
            type: String,
            default: '50%'
        },
        // 距离顶部的距离
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        handleClose() {
            this.$emit('update:visible', false)
        }
    },
}
</script>

<style lang="scss" scoped>
// 遮罩的样式
.s-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    // 最上方
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    // dialog的样式
    .s-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-sizing: border-box;
        width: 30%;

        // header的样式
        &__header {
            padding: 20px 20px 10px;

            // title的样式
            .s-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            // header中关闭按钮的样式
            .s-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                // 元素的背景是透明的
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .s-icon-close {
                    color: 909399;
                }
            }
        }

        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            // 指定当一个单词太长时，是否允许在单词内部进行换行，以便使单词适应容器的宽度
            word-break: break-all;

        }

        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            // 给取消按钮添加右边距,使用了深度选择器
            ::v-deep .s-button:first-child {
                margin-right: 20px;
            }
        }
    }
}

// 动画效果
// 动画的类,进入的过程
.dialog-fade-enter-active {
    animation: fade .3s;
}

.dialog-fade-leave-active {
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);

    }
}
</style>