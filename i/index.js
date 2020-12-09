var vm = new Vue({
    el: "#app",
    data: {
        contextList: contextList,
        types: types
    },
    created() {
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
    methods: {
        backIndex(){
            location.href="index.html";
        }
    }
})