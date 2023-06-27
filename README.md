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

button组件相对来说比较简单，主要的就是样式的问题。事件上只有一个点击事件，并且通过 `this.$emit`便可以直接将点击事件传递出去。
