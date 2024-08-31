function myEach(collection, cb) {
    if (Array.isArray(collection)) {
        for (let num of collection) {
            cb(num)
        }
    }
    else if (typeof collection === "object") {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                cb(collection[key])
            }
        }
    }
    return collection
}

function myMap(collection, cb){
    const newArr = []
    if (Array.isArray(collection)){
        for(const num of collection){
            newArr.push(cb(num));
        }
    }
    else if (typeof collection === "object"){
        for (let key in collection){
            if(collection.hasOwnProperty(key)){  // This checks if the key belongs directly to the object (collection) and not its prototype chain. This ensures that only the object's own properties are processed.
                newArr.push(cb(collection[key]))
            }  
        }
    }
    return newArr
}

function myReduce(collection, cb, acc) {
    if (Array.isArray(collection)){
        if(acc === undefined) {
            acc = collection[0];
            collection = collection.slice(1);
        }
        for(const item of collection) {
            acc = cb(acc, item)
        }
    }
    else if(typeof collection === "object"){
        if(acc === undefined) {
            acc = Object.values(collection)[0];
            collection = Object.fromEntries(Object.entries(collection).slice(1));
        }
        for(let key in collection){
            if(collection.hasOwnProperty(key)){
                acc = cb(acc, collection[key])
            }
        }
    }
    return acc
}

function myFind(collection, predicate){
    if (Array.isArray(collection)) {
        for (let num of collection) {
            if(predicate(num)){
                return num;
            }
        }
    }
    else if (typeof collection === "object") {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                if(predicate(collection[key])){
                    return collection[key];
                }
            }
        }
    }
}
function myFilter(collection, predicate){
     let newArr = []
    if (Array.isArray(collection)){
     for (let num of collection){
        if(predicate(num)){
            newArr.push(num)
        }
     }
    }
    else if (typeof collection === "object"){
        for(let key in collection){
            if(predicate(collection[key])){
                newArr.push(collection[key])
            }
        }
    }
     return newArr
}
function mySize(collection){
    let newNum;
    if(Array.isArray(collection)){
        newNum = collection.length;
    }
    else if(typeof collection === "object"){
        newNum = Object.values(collection).length;
    }
    return newNum
}
function myFirst(array, n){
    if (n === undefined){
        return array[0];
    }
    else {
        return array.slice(0,n);
    }
}
function myLast(array, n){
    if (n === undefined){
        return array[array.length - 1];
    }
    else {
        return array.slice(-n);
    }
}

function myKeys(collection){
    if(typeof collection === "object"){
        let keys = Object.keys(collection);
        return keys
    }
}
function myValues(collection){
    if(typeof collection === "object"){
        let values = Object.values(collection);
        return values
    }
}