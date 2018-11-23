import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
// 路由映射地址
export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        // path: '/app/:id',   //相当于/app/xxx
        path: '/app',
        // 把app后面的:id当做props的值,代替this.$route
        // props也可以是自定义，可以是个方法
        // props: true,
        component: Todo,
        name: 'app',
        meta: {
            title: 'this is app',
            description: 'asdasd'
        }
        // children: [
        //     {
        //         path: 'test',
        //         component: Login
        //     }
        // ]
    },
    {
        path: '/login',
        component: Login
    }
]
