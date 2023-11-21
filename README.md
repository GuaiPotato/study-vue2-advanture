



## 关于不同版本的Vue:

`vue.js`与`vue.runtime.xxx.js`的区别:

1. vue.js是完整版的Vue，包含: 核心功能+模板解析器
2. vue.runtime.xxx.js是运行版的Vue，只包含: 核心功能;没有模板解析器因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。



## vue.config.js配置文件
使用vue inspect >Joutput.js可以查看到Vue脚手架的默认配置。
使用vue.config.js可以对脚手架进行个性化定制，详情见: https://cli.vuejs.org/zh



## ref属性
1. 被用来给元素或了组件注册引用信息 (id的替代者)
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)

3. 使用方式：
   打标识： `<h1 ref="xxx">.....</h1> `或 `<School ref="xxx"></school>`

   获取：`this.$refs.xxx`



## props属性

配置项 `props`

### 功能

让组件接收**外部**传过来的数据

### 使用

1. 传递数据:
   `<Demo name="xxx"/>`，不能使用Vue已经使用的内部属性，如`ref`，`key`等

2. 接收数据:
   第一种方式（只接收）:

   ```vue
   props: ['name']
   ```

   第二种方式（限制类型） :

   ```vue
   props:{
   	name:String
   }
   ```

   第三种方式（限制类型、限制必要性、指定默认值) :

   ```vue
   props:{
   	name:{
   		type:String,	//类型
   		required:true,	//必要性
   		default:'老王'	//默认值 (一般不与 必要性同时限制 同时存在)
   	}
   }
   ```

**备注：**props是**只读的**，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告,若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

```vue
data() {
	return {
		myVal: this.val
	}
},
methods: {
	changeVal() {
		myVal++;
    }
},
props: ['val']

```



## mixin(混入)

### 功能

可以把多个组件共用的配置提取成一个混入对象使用方式:

### 使用

第一步**定义**混合，例:

```vue
export const = {
    data(){
        ....
    },
    methods:{
        ....
    },
};
```

第二步**使用**混入，例:

1. 导入模块

2. 使用混入

   (1).全局混入: Vue.mixin(xxx)

   (2).局部混入: vm.mixins:[xxx]



