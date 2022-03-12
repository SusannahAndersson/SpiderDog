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
            localStorage.reload();
        },
        setPoints() {
            let magnitudes = this.getMagnitudes(); // change to values
            this.skillPoints = calculatePoints(magnitudes, this.maxPoints, { x: 170, y: 170 });
        },
        changeRating(event, index) {
            this.items.filter(x => x.id === index).rating = event.target.value;
            localStorage.setItem("items", JSON.stringify(this.items));

            this.setPoints();
        },
        deleteItemFromList(index) {
            this.items.splice(index, 1);
        },
        // return values between 0 and 1
        getMagnitudes() {
            // loopa igenom alla items
            let returnValue = [0,0,0,0,0,0];
            let occurences = [0,0,0,0,0,0];
            for (const item of this.items) {
                // för varje gruppering (dvs kategori)
                switch (item.trickCategory) {
                    // hämta ut rating och räknar hur många träffar
                    case "Fysik":
                        returnValue[0] += Number(item.rating);
                        occurences[0]++;
                        break;
                    case "Lydnad":
                        returnValue[1] += Number(item.rating);
                        occurences[1]++;
                        break;
                    case "Spåra":
                        returnValue[2] += Number(item.rating);
                        occurences[2]++;
                        break;
                    case "Stadga":
                        returnValue[3] += Number(item.rating);
                        occurences[3]++;
                        break;
                    case "Lekfullhet":
                        returnValue[4] += Number(item.rating);
                        occurences[4]++;
                        break;
                    case "Rörlighet":
                        returnValue[5] += Number(item.rating);
                        occurences[5]++;
                        break;
                    default:
                        break;
                }
            }
            
            for (let itemIndex = 0; itemIndex < returnValue.length; itemIndex++) {
                // summan, dela på antal av kategorin
                // dela med 5 (maxrating)
                if (occurences[itemIndex] === 0) {
                    returnValue[itemIndex] = 0;
                }
                else {
                    returnValue[itemIndex] = (returnValue[itemIndex] / occurences[itemIndex]) / 5;
                }
            }

            // returnera värde
            return returnValue;
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