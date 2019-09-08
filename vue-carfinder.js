var app = new Vue({ 
    el: '#app',
    data: {
        message: '',
        selectedMake: '',
        selectedYear: '',
        selectedModel: '',
        imageUrl: '',
        isModelSelected: 'false',
        makeOptions: [],
        yearOptions: [],
        modelOptions: [],
        recalls: []
    },
    methods: {
        getMakeOptions() {
          axios.get("http://localhost:7000/api/carrecall/makes").then(response => {
            this.makeOptions = response.data
          });
        },

        getYearOptions() {
            axios.get("http://localhost:7000/api/carrecall/years").then(response => {
            this.yearOptions = response.data
          });
        },

        getModelOptions() {
            axios.get("http://localhost:7000/api/carrecall/" + this.selectedMake + "/" + this.selectedYear).then(response => {
            this.modelOptions = response.data;
            this.isModelSelected = 'true';
          });
        },

        getRecalls() {
            axios.get("http://localhost:7000/api/carrecall/" + this.selectedMake + "/" + this.selectedYear + "/" + this.selectedModel).then(response => {
            this.imageUrl = response.data.imageUrl;
            this.recalls = response.data.recallList;
          });
        }
    }
});


