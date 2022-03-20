Vue.createApp({
    data() {
        return {
            trickName: "",
            trickSign: "",
            trickCommand: "",
            trickDescription: "",
            trickCategory: "",
            id: 0,
            items: [],
            skillPoints: "0,0 0,0 0,0 0,0 0,0 0,0",
            maxPoints: [
                { x: 70, y: 220 },
                { x: 70, y: 120 },
                { x: 170, y: 70 },
                { x: 270, y: 120 },
                { x: 270, y: 220 },
                { x: 170, y: 270 }
            ]
        }
    },
    mounted() {
        if (localStorage.hasOwnProperty("items")) {
            this.items = JSON.parse(localStorage.getItem("items") || "[]");
            this.id = localStorage.id;
            this.setPoints();
        }
    },

    computed: {
        areThereItems() {
            return this.items.length > 0;
        }
    },

    methods: {
        update() {
            localStorage.setItem("items", JSON.stringify(this.items));
            localStorage.id = this.id;
            this.setPoints();
        },

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
            
            this.id++;
            this.update();
        },

        changeRating(event, index) {
            this.items.filter(x => x.id === index).rating = event.target.value;
            this.update();
        },

        deleteItemFromList(index) {
            this.items.splice(index, 1);
            this.update();
        },

        setPoints() {
            this.skillPoints = calculatePoints(
                this.getMagnitudes(),
                this.maxPoints,
                { x: 170, y: 170 }
            );
        },

        // return values between 0 and 1
        getMagnitudes() {
            let returnValue = [0, 0, 0, 0, 0, 0];
            let occurences = [0, 0, 0, 0, 0, 0];

            for (const item of this.items) {
                switch (item.trickCategory) {
                    case "Physic":
                        returnValue[0] += Number(item.rating);
                        occurences[0]++;
                        break;
                    case "Obedience":
                        returnValue[1] += Number(item.rating);
                        occurences[1]++;
                        break;
                    case "Tracking":
                        returnValue[2] += Number(item.rating);
                        occurences[2]++;
                        break;
                    case "Stability":
                        returnValue[3] += Number(item.rating);
                        occurences[3]++;
                        break;
                    case "Playfullness":
                        returnValue[4] += Number(item.rating);
                        occurences[4]++;
                        break;
                    case "Agility":
                        returnValue[5] += Number(item.rating);
                        occurences[5]++;
                        break;
                    default:
                        break;
                }
            }

            for (let itemIndex = 0; itemIndex < returnValue.length; itemIndex++) {
                if (occurences[itemIndex] === 0) {
                    returnValue[itemIndex] = 0;
                } else {
                    returnValue[itemIndex] = (returnValue[itemIndex] / occurences[itemIndex]) / 5;
                }
            }

            return returnValue;
        },

        clearLocalStorage() {
            localStorage.clear();
            location.reload();
        },

        async readDummyData() {
            let fileItems = await fetch("https://raw.githubusercontent.com/SusannahAndersson/SpiderDog/master/Data/dummyData.json")
                .then(response => {
                    return response.json();
                });

            this.items = fileItems.items;
            this.update();
        }
    }
}).mount("#app");

function calculatePoints(magnitudes, maxPoints, origin) {
    let returnValue = "";
    for (let pointIndex = 0; pointIndex < magnitudes.length; pointIndex++) {
        let point = calculatePoint(magnitudes[pointIndex], maxPoints[pointIndex], origin);
        returnValue = returnValue + " " + point.x + "," + point.y;
    }

    return returnValue.trim();
}

function calculatePoint(magnitude, maxPoint, origin) {
    let point = { x: 0, y: 0 };
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