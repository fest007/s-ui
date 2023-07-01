# s-ui

## 1.Button组件

### 1.1前置知识

* 组件通讯
* 组件插槽
* props校验

### 1.2参数支持

|  参数名  |                   参数描述                   | 参数类型 | 默认值 |
| :------: | :-------------------------------------------: | :------: | :-----: |
|   type   | 按钮类型(primary/success/warning/danger/info) |  string  | default |
|  plain  |            是否为朴素按钮（镂空）            | boolean |  false  |
|  round  |                是否为圆角按钮                | boolean |  false  |
|  circle  |                是否为圆形按钮                | boolean |  false  |
| disabled |                 是否禁用按钮                 | boolean |  false  |
|   icon   |                   图标类名                   |  string  |   无   |

### 1.3事件支持

| 事件名 | 事件描述 |
| :----: | -------- |
| click | 点击事件 |

### 1.4待补充

1. desabled的样式
2. size参数，分为default/medium/small/mini，控制button的大小
3. icon问题

### 1.5总结

button组件涉及到slot、props、this.$emit等方面的知识。其他的都在代码注释中

button组件相对来说比较简单，主要的就是样式的问题。事件上只有一个点击事 通过 `this.$emit`便可以直接将点击事件传递出去。

## 2.dialog组件

### 2.1前置知识

* vue过渡与动画
* sync修饰符
* 具名插槽与v-slot指令

### 2.2参数支持

| 参数名  | 参数描述                         | 参数类型 | 默认值 |
| ------- | -------------------------------- | -------- | ------ |
| title   | 对话框的标题                     | string   | 提示   |
| width   | 宽度                             | string   | 50%    |
| top     | 与顶部的距离                     | string   | 15vh   |
| visible | 是否显示dialog（支持sync修饰符） | boolean  | false  |

### 2.3事件支持

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

### 2.4插槽说明

| 插槽名称 | 插槽描述         |
| -------- | ---------------- |
| default  | dialog中的内容   |
| title    | dialog的标题     |
| footer   | dialog的底部操作 |

### 2.5待补充

* 可移动，就是鼠标拖动型dialog

### 2.6总结

dialog组件，学习了遮罩层，使用一个外层div包裹设置z-index。还有就是vue动画，以及具名插槽等

## 3.Input组件

### 3.1参数支持

| 参数名称      | 参数描述                    | 参数类型 | 默认值 |
| ------------- | --------------------------- | -------- | ------ |
| placeholder   | 占位符                      | string   | 无     |
| type          | 文本框类型（text/password） | string   | text   |
| disabled      | 禁用                        | boolean  | false  |
| clearable     | 是否显示清空按钮            | boolean  | false  |
| show-password | 是否显示密码切换按钮        | boolean  | false  |
| name          | name属性                    | string   | 无     |

### 3.2事件支持

| 事件名称 | 事件描述     |
| -------- | ------------ |
| blur     | 失去焦点事件 |
| change   | 内容改变事件 |
| focus    | 获取焦点事件 |

### 3.3代补充

* 带icon的输入框
* 文本域
* 尺寸大小，类似于button的那种
* 显示输出字数
* 带有搜索功能的，类似select但是可以输入（可能会放到单独的组件）

### 3.4总结

input组件也比较容易，大部分是在使用的input原生的东西，还有就是v-model双向绑定的语法糖（就是v-bind和@input组合），更多的就是在处理样式问题，动态添加类名等，还有就是动态控制type
