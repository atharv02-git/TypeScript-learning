// Enums
enum resourceType { Book, Author, Sports, Person, Fantasy }

interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T
}

const docThree: Resource<object> = {
    uid: Math.floor(Math.random() * 100),
    resourceType: resourceType.Fantasy,
    data: { importPlace: 'India', Date: new Date() }
}

const docFour: Resource<string[]> = {
    uid: Math.floor(Math.random() * 100),
    resourceType: resourceType.Author,
    data: ['Hello', 'World']
}

console.log(docThree, docFour)