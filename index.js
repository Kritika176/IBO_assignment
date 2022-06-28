const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//---------------------1------------------------------//
function getUniqueProductCount(Products) {
  let obj = {};
  for (let i = 0; i < Products.length; i++) {
    if (!obj[Products[i].productName]) {
      obj[Products[i].productName] = 1;
    } else {
      obj[Products[i].productName]++;
    }
  }
  return obj;
}

console.log(getUniqueProductCount(listOfProducts));


//-------------------------2----------------------------//

function getUniqueProduct(Products) {
  let resArr = [];
  for (let i = 0; i < Products.length; i++) {
    let flag = false;
    for (let j = 0; j < resArr.length; j++) {
      if (resArr[j].productName == Products[i].productName) {
        resArr[j].quantity += Products[i].quantity;
        flag = true;
      }
    }
    if (flag == false) {
      resArr.push(Products[i])
    }
  }
  return resArr;
}
console.log(getUniqueProduct(listOfProducts));
