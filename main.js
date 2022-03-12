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
            skillPoints: "100,100 100,100 100,100 100,100 100,100 100,100",
            maxPoints: [
                {x:0,y:150},
                {x:0,y:50},
                {x:100,y:0},
                {x:200,y:50},
                {x:200,y:150},
                {x:100,y:200}
            ]
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
        setPoints() {
            let magnitudes = [0.5, 0.9, 0.2, 0.4, 1.0, 0.7]; // change to values
            this.skillPoints = calculatePoints(magnitudes, this.maxPoints, {x:100, y:100});
        },
        changeRating(event, index) {
            this.items.filter(x => x.id === index).rating = event.target.value;
            localStorage.setItem("items", JSON.stringify(this.items));

            this.setPoints();
        },
        deleteItemFromList(index) {
            this.items.splice(index, 1);
        }
    }
}).mount("#app");

function calculatePoints(magnitudes, maxPoints, origin) {
    let returnValue = "";
    for (let pointIndex = 0; pointIndex < magnitudes.length; pointIndex++) {
        const magnitude = magnitudes[pointIndex];
        const maxPoint = maxPoints[pointIndex];
        let point = calculatePoint(magnitude, maxPoint, origin);
        returnValue = returnValue + " " + point.x + "," + point.y;
    }

    return returnValue.trim();
}

function calculatePoint(magnitude, maxPoint, origin){
    let point = {x:0, y:0};
    point.x = calculateAxisPoint(origin.x, magnitude, maxPoint.x);
    point.y = calculateAxisPoint(origin.y, magnitude, maxPoint.y);
    return point;
}

function calculateAxisPoint(origin, magnitude, maxAxisPoint) {
    if (origin > maxAxisPoint) {
        return origin - Math.abs(maxAxisPoint - origin) * magnitude;
    }

    return origin + Math.abs(maxAxisPoint - origin) * magnitude;
}