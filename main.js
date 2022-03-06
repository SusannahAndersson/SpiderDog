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
    methods: {
        addNewItem() {
            this.items.push({
                trickName: this.trickName,
                trickSign: this.trickSign,
                trickCommand: this.trickCommand,
                trickDescription: this.trickDescription,
                id: this.items.length
            });

        }

    }
}).mount("#app");