"use strict";
// Enums
var resourceType;
(function (resourceType) {
    resourceType[resourceType["Book"] = 0] = "Book";
    resourceType[resourceType["Author"] = 1] = "Author";
    resourceType[resourceType["Sports"] = 2] = "Sports";
    resourceType[resourceType["Person"] = 3] = "Person";
    resourceType[resourceType["Fantasy"] = 4] = "Fantasy";
})(resourceType || (resourceType = {}));
const docThree = {
    uid: Math.floor(Math.random() * 100),
    resourceType: resourceType.Fantasy,
    data: { importPlace: 'India', Date: new Date() }
};
const docFour = {
    uid: Math.floor(Math.random() * 100),
    resourceType: resourceType.Author,
    data: ['Hello', 'World']
};
console.log(docThree, docFour);
