///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

console.log("===================")

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((a,b) => a + b.price, 0)


console.log(`Summed Price is: `, summedPrice)


console.log("===================")

//////////////////PROBLEM 2////////////////////                                     **************************************
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    subTotal = cartTotal * (1 + tax)
    finalTotal = subTotal - couponValue
    return finalTotal
}

console.log(`Final price after coupon and tax is : `, calcFinalPrice(summedPrice, 10, .05))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The first value would be the {name} so it could be used as a greeting for any messages sent and it would be a string.
The second value would be phone number represented as a number including the area code as it's unique identifier for tracking marketing and customer analytics.
The third value would be the party size as a number, simply for operational necessity.
The fourth value would be time, represented as a string, because they will need to distinguish between AM and PM.
The fifth value would be allergens, represented as an array of strings, because there are multiple different values that fit this criteria.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const vipCustomers = [
    {
    name: "Derrick Furtado",
    phoneNumber: 7072465454,
    partySize: 5,
    time: "12pm",
    allergens: ["nuts", "dairy", "shellfish"]

},{
    name: "Alice Johnson",
    phoneNumber: 4157891234,
    partySize: 3,
    time: "6pm",
    allergens: ["gluten", "soy"]
},
{
    name: "Bob Martinez",
    phoneNumber: 5105559876,
    partySize: 2,
    time: "7:30pm",
    allergens: []
},
{
    name: "Cathy Lee",
    phoneNumber: 6503214567,
    partySize: 4,
    time: "8pm",
    allergens: ["dairy"]
},
{
    name: "David Smith",
    phoneNumber: 4089876543,
    partySize: 6,
    time: "5:45pm",
    allergens: ["peanuts"]
},
{
    name: "Emma Garcia",
    phoneNumber: 9256543210,
    partySize: 2,
    time: "12:30pm",
    allergens: ["seafood", "soy"]
},
{
    name: "Frank Nguyen",
    phoneNumber: 8319876543,
    partySize: 8,
    time: "2pm",
    allergens: []
},
{
    name: "Grace Patel",
    phoneNumber: 7076549871,
    partySize: 5,
    time: "7pm",
    allergens: ["gluten"]
},
{
    name: "Hector Morales",
    phoneNumber: 9165554321,
    partySize: 3,
    time: "1:15pm",
    allergens: ["shellfish", "peanuts"]
},
{
    name: "Isabella Torres",
    phoneNumber: 3104328765,
    partySize: 4,
    time: "9pm",
    allergens: ["nuts"]
},
{
    name: "Jackie Wilson",
    phoneNumber: 7079874321,
    partySize: 1,
    time: "11:30am",
    allergens: ["dairy", "gluten"]
}
]

console.log(vipCustomers[4])

let totalCustomers = vipCustomers.reduce((a,b) => a + b.partySize, 0)

console.log(`Total customers on the VIP list would be: `, totalCustomers)