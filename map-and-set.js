/* MAP
- Map is a collection of keyed data items, just like an Object. 
But the main difference is that Map allows keys of any type

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
we can user map[key] - this will behave like plain object

*/

let map = new Map();
let obj = {name: 'mumbai'}

map.set(1, 'Hi');
map.set('1', 'Sachin');
map.set(true, 'Sillod');
map.set(obj, 'Aurangabad');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.get(true));
console.log(map.get(obj));