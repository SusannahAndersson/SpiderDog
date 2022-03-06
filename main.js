Vue.createApp({
    data() {
        return {
            trickName: "",
            trickSign: "",
            trickCommand: "",
            trickDescription: "",
            items: [],
            id: 0,
            trickCategory: "",
        }
    },
    mounted() {
        if (localStorage.hasOwnProperty("items")) {
            this.items = JSON.parse(localStorage.getItem("items") || "[]");
            this.id = localStorage.id;

        }
    },

    methods: {
        addNewItem() {
            this.items.push({
                trickName: this.trickName,
                trickSign: this.trickSign,
                trickCommand: this.trickCommand,
                trickDescription: this.trickDescription,
                id: this.id,
                rating: 0,
                trickCategory: this.trickCategory,
            });
            localStorage.setItem("items", JSON.stringify(this.items));
            this.id++;
            localStorage.id = this.id;
        },
        clearLocalStorage() {
            localStorage.clear();
        },
        changeRating(event, index) {
            this.items.filter(x => x.id === index).rating = event.target.value;
            localStorage.setItem("items", JSON.stringify(this.items));
        },
        deleteItemFromList(index) {
            this.items.splice(index, 1);
        }
    }
}).mount("#app");