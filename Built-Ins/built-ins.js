const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
};

const anotherBowl = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 }, 
    [Symbol('banana')]: { color: 'yellow', weight: 183.151 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }     
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

arrayIterator.next(); //can also be done with set down there 

const someSet = new Set();

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');


// TIP: If you attempt to .add() a duplicate item to a Set, 
// you won’t receive an error, but the item will not be added to the Set. 
// Also, if you try to .delete() an item that is not in a Set, 
// you won’t receive an error, and the Set will remain unchanged.
// .add() returns the Set if an item is successfully added. On the other hand, 
// .delete() returns a Boolean (true or false) depending on successful deletion.

//will empty the set 
//games.clear();



//Working with sets
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

//months.size //returns the size 

//months.has('July')

//months.values() //or .keys() //returns the set iterator


//If you remember back to our discussion on the new iterable and iterator protocols in ES6, then you’ll recall that 
//Sets are built-in iterables. 
//This means two things in terms of looping:
    //You can use the Set’s default iterator to step through each item in a Set, one by one.
    //You can use the new for...of loop to loop through each item in a Set.

const setIterator = months.values();
setIterator.next();

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}

//Weaksets

//a WeakSet can only contain objects
//a WeakSet is not iterable which means it can’t be looped over
//a WeakSet does not have a .clear() method

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

student3 = null; //uncomment it
console.log(roster);

//What makes this so useful is you don’t have to worry about deleting references to deleted objects 
//in your WeakSets, JavaScript does it for you! When an object is deleted, the object will also be deleted 
//from the WeakSet when garbage collection runs. This makes WeakSets useful in situations where you want an 
//efficient, lightweight solution for creating groups of objects.
 
//The point in time when garbage collection happens depends on a lot of different factors. 
//Check out MDN’s documentation to learn more about the algorithms used to handle garbage collection.

/*--Maps--*/

//If Sets are similar to Arrays, then Maps are similar to Objects because 
//Maps store key-value pairs similar to how objects contain named properties with values.
//Essentially, a Map is an object that lets you store key-value pairs where 
//both the keys and the values can be objects, primitive values, or a combination of the two.

const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

employees.delete('james.parkes@udacity.com');

//employees.clear() => clears the Map

//TIP: If you .set() a key-value pair to a Map that already uses the same key, you won’t receive an error, 
//     but the key-value pair will overwrite what currently exists in the Map. 
//     Also, if you try to .delete() a key-value that is not in a Map,
//     you won’t receive an error, and the Map will remain unchanged.

//The .delete() method returns true if a key-value pair is successfully deleted from the Map object
//and false if unsuccessful. The return value of .set() is the Map object itself if successful.

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

//members.has('Marcus');

//members.get('Sophia');

//Looping through Maps
//Step through each key or value using the Map’s default iterator

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
iteratorObjForValues.next();

//Loop through each key-value pair using the new for...of loop

for (const member of members) {
  console.log(member);
}



//Loop through each key-value pair using the Map’s .forEach() method
members.forEach((value, key) => console.log(key, value));

//What is a WeakMap?
//A WeakMap is just like a normal Map with a few key differences:

//a WeakMap can only contain objects as keys,
//a WeakMap is not iterable which means it can’t be looped and
//a WeakMap does not have a .clear() method.

