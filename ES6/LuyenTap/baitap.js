

// function lastIndexOf(arr, elt, start = arr.length - 1) {
//     for (let i = start; i >= 0; i--) {
//       if (arr[i] === elt) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   console.log(lastIndexOf([1, 2, 1, 2], 2));

// const inventory = [

//     {type:   "machine", value: 5000},
  
  
//     {type:   "machine", value:  650},
  
  
//     {type:      "duck", value:   10},
  
  
//     {type: "furniture", value: 1200},
  
  
//     {type:   "machine", value:   77}
  
  
//   ]
  
//   let totalMachineValue = inventory.filter(function(item) {
//     if (item.type === 'machine') {
//         return item
//     }
//   });

//   let totalValue = totalMachineValue.reduce(function(acc, item) {
//     return acc + item.value;
    
//   },0)
// console.log(totalValue)


// let inventoryValue = inventory.map((i)=>{return i.value});
// let sumValue = inventoryValue.reduce((a,b)=>{return a+b});
// console.log(sumValue)



// let profile = {
//
//     fname: 'Code',
//
//
//     lname: 'Gym',
//
//
//     bday: new Date('1979-01-02')
//
//
//   }
//
//   const{fname, lname} = profile
//
//
//   let fname = profile.fname;
//
//
//   let lname = profile.lname;
//
//   console.log(fname, lname);

function detectCollision(objects, point) {
    // for (let i = 0; i < objects.length; i++) {
    //     let object = objects[i]
    //     if (point.x >= object.x && point.x <= object.x + object.width &&
    //         point.y >= object.y && point.y <= object.y + object.height)
    //         return object
    // }
    return objects.find(({x,y,width,height}) =>
    point.x >= x && point.x <= x + width &&
    point.y >= y && point.y <= y + height)
}

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
console.log(detectCollision(myObjects, {x: 20, y: 30}))

  