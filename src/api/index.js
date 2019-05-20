//包含n个接口请求函数的对象模块，分别暴露
import ajax from './ajax'
//主页
export const reqDiscList = () => ajax('/kingKongModule')
//分类
export const reqCategory = () => ajax('/currentCategory')
