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
            thar.loadding = false;
        })
    },
    computed: {
        context() {
            return contextList.filter(item => {
                return item.id == this.id
            })[0]
        },
        id(){
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