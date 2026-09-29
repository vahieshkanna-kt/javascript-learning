let map = new Map();

map.set(1,'nest')
.set(2,'undefined')
.set('th','data');

/*console.log(map);

//value
console.log(map.get(1));
///
console.log(map.has(2));

//delete
map.delete(2);

map.clear();*/
//size
//console.log(map.size);

//for(key of map){
  //  console.log(key);
//}

for(key of map.values()){
    console.log(key);
}