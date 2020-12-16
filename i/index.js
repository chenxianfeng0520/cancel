var vm = new Vue({
    el: "#app",
    data: {
        contextList: contextList,
        types: types,
        loadding: true,
        isShowNav: true
    },
    created() {
        var thar = this
        this.$nextTick(()=>{
            setTimeout(()=>{
                thar.loadding = false;
            },1000) 
        })
    },
    computed: {
        context() {
            return contextList.filter(item => {
                return item.id == this.id
            })[0]
        },
        id(){
            //  获取id的传值
            return Number(location.search.split("=")[1]??1)
        }
    },
    mounted(){

    },
    methods: {
        backIndex(){
            location.href="index.html";
        },  
        ss(){
            this.isShowNav = !this.isShowNav
        }
    }
})

setTimeout(()=>{
    document.getElementById("app").style.display = 'block';
},0)