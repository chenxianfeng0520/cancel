var types = ['js', 'css', 'html', 'php']
var contextList = [
    {
        id: 1,
        type: 'js',
        title: 'js中this的指向',
        url:'index1.html?id=1',
        context: [
            [
                {
                    type: 'text',
                    text: 'this最终指向的是调用它的对象，this最终指向的是调用它的对象，this最终指向的是调用它的对象，this最终指向的是调用它的对象，this最终指向的是调用它的对象，this最终指向的是调用它的对象，'
                }
            ]
        ]
    },
    {
        id: 2,
        type: 'js',
        title: '立即执行表达式',
        context: [
            [
                {
                    type: 'text',
                    text: '函数在定义后立即执行',
                    style:'font-weight: bold;font-size:18px;margin:10px;'
                },
                {
                    type: 'html',
                    html: '1. 不必为函数命名，避免了污染全局变量<br>2. 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量<br>3. 封装变量'
                }
            ]
        ]
    }
]
