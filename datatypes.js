var l = 16;

console.log(typeof l);

var name = "Satyam";

console.log(typeof name);

var obj = {
    name:"Verna",
    model: "Hyundai",
    obj2: {
        color: "Black",
        year: 2020,
        insurances: ["phy", "engine", "body"]
    },
    1: 2,
    fullName: function() {
        return this.name;
    }
};

obj["model"] = 102;

console.log(obj);
console.log(typeof obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(obj.firstName);
console.log(obj["lastName"]);
console.log(obj.obj2.insurances);
console.log(obj["obj2"]["insurances"][1]);
