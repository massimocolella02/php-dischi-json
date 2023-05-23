const { createApp } = Vue

  createApp({
    data() {
      return {
        arrayDischi: '',
        pathApi: 'apiDischi.php'
      }
    },
    methods: {
        callApi(){
            axios.get(this.pathApi).then(res => {
                this.arrayDischi = res.data
            })
        }
    },
    mounted() {
        this.callApi();
    },
  }).mount('#app')