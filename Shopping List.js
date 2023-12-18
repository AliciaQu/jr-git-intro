let shoppingList = ['milk', 'egg', 'bread'];

shoppingList.push('banana', 'strawberry');
console.log(shoppingList);// 

shoppingList.pop();
console.log(shoppingList);

function checkshoppingList() {
  if (shoppingList.length >5) {
    console.log(' Your carton is full now ! ') ;
  }
}

checkshoppingList();

for (let i = 0; i < shoppingList.length; i++) {
  console.log((i+1) + ". " + shoppingList[i]);
}


function isInShoppingList(itemName) {
  return shoppingList.includes(itemName);
}

console.log(isInShoppingList('milk', shoppingList));

let item = {
  name: 'milk',
  price: 12,
  quantity: 1
};

