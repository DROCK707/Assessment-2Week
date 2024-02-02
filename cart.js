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

const summedPrice = cart.reduce((x,y) => x + y.price, 0)


console.log(summedPrice)


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

*/e

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: "Derrick Furtado",
    phoneNumber: 7072909225,
    partySize: 5,
    time: "12pm",
    allergens: ["nuts", "dairy", "shellfish"]

}
