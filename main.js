Vue.createApp({
    data() {
        return {
            trickName: "",
            trickSign: "",
            trickCommand: "",
            trickDescription: "",
            items: [],

        }
    },
    mounted() {
        if (localStorage.hasOwnProperty("items")) {

            this.items = JSON.parse(localStorage.getItem("items") || "[]");
            console.log(this.items.length);

        }

    },

    methods: {
        addNewItem() {
            this.items.push({
                trickName: this.trickName,
                trickSign: this.trickSign,
                trickCommand: this.trickCommand,
                trickDescription: this.trickDescription,

            });
            localStorage.setItem("items", JSON.stringify(this.items))

        },
        clearLocalStorage() {
            localStorage.clear();
        }



    }
}).mount("#app");