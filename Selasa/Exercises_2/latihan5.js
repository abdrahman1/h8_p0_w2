/**
 * CODECADEMY
 * JAVASCRIPT
 * 5. GLobal Scope
 */

// 1. Lesson 1 create global var
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';
console.log('Laundry: ' + laundryRoom + ', Mail: ' + mailRoom);

// 2. functional scope

function myApartment() {
    var mailBoxNumber = 'Box 3';
    var laundryRoom = 'In-unit';
    console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}
myApartment();


console.log('------------------');

// 3. lesson 3  scoping - move the variable within functin to global scope

function myApartment() {
    var myCoffeeMaker = 'Aeropress';
	var buildingAddress = '150 E 14th St, New York, NY';
	var myCloset = 'Extra coats in the back';
	var buildingLaundryCode = 4927;
	var myRefridgerator = 'Filled with veggies and dark chocolate.';
	var myDog = 'Nikko';
	var buildingPhone = '(481) 516-2342'; 
    

}

var myCoffeeMaker = 'Aeropress';
var buildingAddress = '150 E 14th St, New York, NY';
var myCloset = 'Extra coats in the back';
var buildingLaundryCode = 4927;
var myRefridgerator = 'Filled with veggies and dark chocolate.';
var myDog = 'Nikko';
var buildingPhone = '(481) 516-2342';

console.log('**Apartment Building Information**');
console.log('Laundry code: ' + buildingLaundryCode + '\nPhone: ' + buildingPhone + '\nMailling address: ' + buildingAddress);