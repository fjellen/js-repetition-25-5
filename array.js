const myArray = ["apple", "pear", "banana"];
const otherArray = [34, 45645, 324];
const mixedArray = ["apple", 56, 12.08, "banana"];
const objectArray = [
    {
        firstname: "sebastian"
    },
    {
        firstname: "john"
    },
    {
        firstname: "sarah"
    },
    {
        firstname: "david"
    },
];

objectArray.forEach(function(item){
    console.log(item.firstname);
});

for (const item of objectArray) {
    console.log(item.firstname);
}