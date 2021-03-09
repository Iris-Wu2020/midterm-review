console.log("Wu's Output from hw4 Exercise 2");

const r = Number(prompt("Enter the circle radius:"));
// TODO: Creat the circle object here
const circle = {
    radius: `${r}`,
    circumference() {
        return `${this.radius * 2 * Math.PI}`
    },
    area() {
        return `${this.radius ** 2 * Math.PI}`
    }

};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);