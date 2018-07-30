```js

/**
 * @author xgqfrms
 * @date 2017.09.20
 * @Module Collection_Set
 */


const Collection_Set = () => {
    let items = {};
    // has
    this.has = (value) => {
        // return key in items;
        return items.hasOwnProperty(value);
    };
    // get
    this.get = (value) => {
        return(
            this.has(value) ? items[value] : undefined
        );
    };
    // add
    this.add = (value) => {
        // unique value
        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };
    // delete
    this.remove = (value) => {
        if (this.has(value)) {
            delete items[value]; 
            return true;
        }
        return false;
    };
    // clear
    this.clear = () => {
        items = {};
    };
    // size
    // ECMAScript 5 +
    this.size = () => {
        return(
            Object.keys(items).length
        );
    };
    // ECMAScript 6 +
    this.sizeNew = () => {
        let counter = 0;
        for(let key in items) {
            if(items.hasOwnProperty(key)){
                ++counter;
            }
        }
        return counter;
    };
    // ECMAScript old
    this.sizeLegacy = function(){
        var counter = 0;
        for(var key in items) {
            if(items.hasOwnProperty(key)){
                ++counter;
            }
        }
        return counter;
    };
    // Values === keys
    this.keys = () => {
        let values = Object.keys(items);
        return values;
    };
    // keys === Values
    this.keys = () => {
        let keys = Object.keys(items);
        return keys;
    };
    // ECMAScript old
    this.valuesLegacy = function(){
        var values = [];
        for(var key in items){
            values.push(key);
        }
        return values;
    };
    // Entries
    this.getItems = () => {
        return items;
    };
    // 并集: A∪B = {x | x ∈ A ∨ x ∈ B}
    this.union = (otherSet) => {
        let unionSet = new Set();
        // self
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        // other
        let othervalues = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    // 交集: A∩B = {x | x ∈ A ∧ x ∈ B}
    this.intersection = (otherSet) => {
        let intersectionSet = new Set();
        // self
        let values = this.values();
        let othervalues = otherSet.values();
        let small_size = ((othervalues.length - values.length) > 0 ? values : othervalues);
        // small & reduce iterate times 
        for (var i = 0; i < small_size.length; i++) {
            if (small_size.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    // 
};









const set = new Set();
set.add(1);
set.add(2);

console.log(set);
// Object {1: 1, 2: 2}

/*

    // Set(2) {1, 2}
    // [[Entries]]: Array(2)
    // [{1: 1}, {2: 2}]

*/


const collection_test = new Collection_Set();
// (value)

// not too good ??? bug
collection_test.add({xgqfrms: `xgqfrms@email.xyz`});
collection_test.add(`Abc`);
collection_test.add(`Xyz`);

console.log(collection_test.size()); 
console.log(collection_test.keys());
console.log(collection_test.values());
console.log(collection_test.getItems());

console.log(collection_test.has(`Abc`));
console.log(collection_test.get(`Abc`));
console.log(collection_test.has(`Xyz`));
console.log(collection_test.get(`Xyz`)); 

collection_test.remove(`Xyz`); 

console.log(collection_test.size()); 
console.log(collection_test.keys());
console.log(collection_test.values());
console.log(collection_test.getItems());

console.log(collection_test.has(`Xyz`));
console.log(collection_test.get(`Xyz`)); 


```
