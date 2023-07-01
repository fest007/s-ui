<template>
<!-- eslint-disable -->
    <div class="s-input" :class="{'s-input--suffix': showSuffix}">
        <input 
            type="text"
            class="s-input__inner"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            :name="name"
            :disabled="disabled"
            :class="{'is-disabled': disabled}"
            :value="value"
            @input='handleInput'
        >
        <span class="s-input__suffix" v-if="showSuffix">
            <!-- 消除按钮的显示既要求有clearable属性也要求有内容，当没有内容的时候是不显示的 -->
            <i class="s-input__icon s-icon-close" v-if="clearable && value" @click="clear"></i>
            <i class="s-input__icon" :class="{'s-icon-view-off': passwordVisible, 's-icon-view': !passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
        </span>
    </div>
</template>

<script>
/* eslint-disable */
    export default {
        name: 'SInput',
        data() {
            return {
                // 用于控制是否显示密码框
                passwordVisible: false
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            // 判断是什么类型的输入框
            type: {
                type: String,
                default: 'text'
            },
            // 表单时会用到
            name: {
                type: String,
                default: ''
            },
            // 是否禁用
            disabled: {
                type: Boolean,
                default: false
            },
            // 实现双向绑定的值
            value: {
                type: String,
                default: ''
            },
            // 是否可清空
            clearable: {
                type: Boolean,
                default: false
            },
            // 是否显示密码
            showPassword: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            handleInput(e) {
                this.$emit('input', e.target.value)
            },
            
            clear() {
                // console.log(11);
                // 把内容清空
                this.$emit('input', '')
            },
            // 处理密码显示
            handlePassword() {
                this.passwordVisible = !this.passwordVisible
            }
        },
        computed: {
            showSuffix() {
                return this.clearable || this.showPassword
            }
        }
    }
</script>

<style lang="scss" scoped>
    .s-input {
        width: 50%;
        position: relative;
        font-size: 14px;
        display: inline-block;
        .s-input__inner {
            // 用于消除元素的默认外观或者样式
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            // 继承其父元素的字体大小
            font-size: inherit;
            height: 40px;
            // line-height === height时便会使文本居中
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            // 添加border-color的过渡效果,cubic-bezier允许自定义过渡动画的速度曲线
            transition: border-color .2s;
            width: 100%;

            &:hover {
                outline: none;
                border-color: #c0c1c4;
            }

            &:focus {
                outline: none;
                border-color: #409eff;
            }

            // input禁用样式
            &.is-disabled {
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color: #c0c4cc;
                cursor: not-allowed;
            }
        }
    }

    // 图标的样式
    .s-input--suffix {
        .s-input__inner {
            padding-right: 30px;
        }
        .s-input__suffix {
            position: absolute;
            right: 10px;
            height: 100%;
            top: 0;
            line-height: 40px;
            text-align: center;
            color: #c0c4cc;
            transition: all .3s;
            z-index: 9000;
            i {
                color: #c0c4cc;
                font-size: 14px;
                cursor: pointer;
                transition: color .2s cubic-bezier(.645, .045, .355, 1);
                &:hover {
                    color: #409eff;
                }
            }
        }
    }
</style>