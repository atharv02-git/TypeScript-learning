type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

logDetails('dsdasdas12','pen')

const greet = (user: ObjWithName) => {
    console.log(`${user.name} says hello`)
    console.log(`uid is: ${user.uid}`)
}
greet({name: 'tobey', uid:12})