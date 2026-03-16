function hasProperty(obj, propertyName) {
    return Object.prototype.hasOwnProperty.call(obj, propertyName);
}

const user = { name: "Alice", age: 25 };
console.log(hasProperty(user, "age"));
