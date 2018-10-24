/**
 * CODECADEMY
 * JAVASCRIPT
 * 4. Introduction to Functions
 */

//  1. Lesson 1 
    // contoh
var calculatorOn = false;
function pressPowerButton() {
    if (calculatorOn) {
        console.log('Calculator turning off.');
        calculatorOn = false;
    } else {
        console.log('Calculator turning on.');
        calculatorOn = true;
    }
}
pressPowerButton(); // Output: Calculator turning on.
pressPowerButton(); // Output: Calculator turning off.
console.log('------------------')

// 2. LESSON 2 write function name and write called function
/** function takeOrder() {
    console.log('Order: pizza');
}
takeOrder();
console.log('------------------');
*/
// 3. LESSON 3 adding parameter to the parentes on function
    // adding argument to the parentes on called function
/**     
function takeOrder(topping) {
    console.log('Order: pizza topped with ' + topping);
}  
takeOrder('bacon');
console.log('------------------');
*/
// 4. LESSON 4 add two paramter
// contoh
function getRemainder(numberOne, numberTwo) {
    console.log(numberOne % numberTwo);
}
getRemainder(365, 27);
console.log('------------------');
/** 
function takeOrder(crustType, topping) {
    console.log('Order: '+crustType+' pizza topped with '+topping);
}

takeOrder('Thin crust', 'bacon');
takeOrder('Cicago\'s style', 'papperoni');
takeOrder('Florida\'s style', 'tuna');
console.log('------------------') 
*/
// 5. lESSON 5 using RETURN keyword
function getRemainderA(numberOne, numberTwo) {
    return numberOne % numberTwo;
} 
console.log(getRemainderA(365, 27));
console.log('------------------');

// 6. LESSON 6 retun II 
// contoh
function multiplyByNineFifths(celsius) {
    return celsius * (9/5);
}
function getFahrenheit(celcius) {
    return multiplyByNineFifths(celcius) + 32;
}
console.log('The temperature is ' + getFahrenheit(15) + ' ^F');
console.log('------------------');

var orderCount = 0;
function takeOrder(crustType, topping) {
  console.log('Order: '+crustType+' pizza topped with '+topping);
  orderCount = orderCount + 1;
}
function getSubTotal(itemCount) {
  return itemCount * 7.5
}
function getTax() {
  return getSubTotal(orderCount) * 6/100;
}
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('Thin crust', 'bacon');
takeOrder('Cicago\'s style', 'papperoni');
takeOrder('Florida\'s style', 'tuna');

console.log(getTotal());
console.log('------------------');
