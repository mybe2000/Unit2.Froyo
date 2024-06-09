/**Pseudocode
 * create prompt to get user input
 * split user input string into an array of strings
 * loop over array to keep count of orders of each flavor
 * create a function for the count that returns an object
 */

const userInput = prompt("Please enter a list of your favorite Froyo flavors!");

const string = userInput.split(",");
// console.log(string);

let flavors = countOrders(string);
console.log("flavors", flavors);

function countOrders(orders) {
  let flavorObj = {};

  for (let i = 0; i < orders.length; i++) {
    if (flavorObj[orders[i]] === undefined) {
      flavorObj[orders[i]] = 1;
    } else {
      flavorObj[orders[i]]++;
    }
  }
  return flavorObj;
}
