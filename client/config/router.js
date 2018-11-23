import Router from 'vue-router'
import routes from './routes'

export default () => {
    return new Router({
        routes,
        // url路径去除“#”直接显示地址
        // 将localhost:8000/#/app显示为localhost:8000/app
        mode:  'history',
        // 给url地址增加一个指定的路径用来辨别
        // base: '/base/',
        linkActiveClass: 'active-link',
        linkExactActiveClass: 'exact-active-link',
        // 路由到某个页面时记录上次在此页面的位置
        scrollBehavior(to, from, savedPosition) {
            if(savedPosition) {
                return savedPosition
            }else {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
        // 有些浏览器不支持mode为history的方式，那么将这个设置为true会自动转换为支持的方式
        // fallback: true,
        // 获取到url后的参数将它转换为json对象，获取的是一个字符串
        // parseQuery(string) {

        // },
        // 获取到url后的参数将它转换为字符串，获取的是一个对象
        // stringifyQuery(obj) {

        // }
    })
}
