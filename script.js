    //palindrome 1
    
    // function is_Palindrome() {
    //   var inputFromUser = prompt("Enter a string:");
    //   var is_caseSensitive = confirm("Do you want to consider the case of the entered string?");
    //   var is_trueString;
    //   if(is_caseSensitive) {
    //    is_trueString = inputFromUser.replace(/[^a-zA-Z0-9]/g, '');
    //   } else {
    //    is_trueString = inputFromUser.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //   }
    //   var charArray =is_trueString.split('');
    //   var reversedArray = charArray.slice().reverse();
    //   if (charArray.join('') === reversedArray.join('')) {
    //     alert("entered string palindrome");
    //   } else {
    //     alert("entered string not palindrome");
    //   }
    // }
    //             is_Palindrome();



            



//count of character E on input from user 2


        // const userInput = prompt("Enter a string:");    
        // function countE(str) {
        //   var count = 0;
        //   for (var i = 0; i < str.length; i++) {
        //     if (str[i].toLowerCase() === 'e') {
        //       count++;
        //     }
        //   }
        //   return count;
        // }
        // const numOf_E = countE(userInput);
        // alert(`${userInput} contains ${numOf_E} 'e' characters`);




    //  Write a script that reads from the user his info; validates and displays it with a welcoming message.  3

    //     var user_name = prompt("Enter your name:");
    //     var phone_Number = prompt("Enter your phone number : ");
    //     var mobile_Number = prompt("Enter your mobile number : ");
    //     var email = prompt("Enter your email :  ");
 
    //     var nameRegex = /^[a-zA-Z]+$/;
    //     if (!nameRegex.test(user_name)) {
    //       alert("user_name must be characters only.");
    //       return;
    //     }
    //     var phoneRegex = /^\d{8}$/;
    //     if (!phoneRegex.test(phone_Number)) {
    //       alert("Phone number must be 8 digits long.");
    //       return;
    //     }
    
    //     var mobileRegex = /^(010|011|012)\d{8}$/;
    //     if (!mobileRegex.test(mobile_Number)) {
    //       alert("Mobile number must be 11 digits long and start with 010, 011, or 012.");
    //       return;
    //     }
    
    //     var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (!emailRegex.test(email)) {
    //       alert("Email address is not valid.");
    //       return;
    //     }
    //     alert(`Welcome, ${user_name}!
    // Phone Number: ${phone_Number}
    // Mobile Number: ${mobile_Number}
    // Email: ${email}`);





    // 2.1 Write a script that ask the user to Enter the value of a circle’s radius in order to calculate 

    //     var radius = parseFloat(prompt("Enter the radius of the circle:"));    
    //     var area = Math.PI * radius ** 2;
    //         alert(`Total area of the circle with radius ${radius} is ${area.toFixed(2)} square units.`);

    // // 2.2 Enter another value to calculate its square root and alert the result
    // var v1 = parseFloat(prompt("Enter the first value:"));
    // var sqrtv1 = Math.sqrt(v1);
    // alert(`The square root of ${value1} is ${sqrtv1.toFixed(2)}`);



    // 3.1 Ask user to enters the date in prompt make sure that it 
    // is in correct format, then alert the Day name (Saturday, Sunday,…) of the given date





    // 4. Array Object
// 3.1 Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it
//  (+, *, /). Format the output as shown in Fig




    // var n1 = prompt("first number:");
    // var n2 = prompt("second number:");
    // var n3 = prompt("third number:");
    // var sum = n1+n2+n3;
    // var multip = n1*n2*n3;
    // var division=n1/n2/n3;
    // document.write(`Sum of the 3 values: ${n1} + ${n2} + ${n3} = `, sum );
    // document.write(`multiplication of the 3 values: ${n1} * ${n2} * ${n3} = `, multip);
    // document.write(`division of the 3 values: ${n1} / ${n2} / ${n3} = `, division);





















// 5. Function//

// Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters

// function myFunction(p1, p2) {
//     if (arguments.length !== 2) {
//       throw new Error("This function requires exactly 2 parameters.");
//     }
//     document.write("p1: ", p1);
//     document.write("p2: ", p2);
//   }

// myFunction(10, 20);
// throw an error
// myFunction(10);
// hrow an error
// myFunction(10, 20, 30);





// 2- Write a function that takes any number of parameters and returns them reversed using array’s reverse function.

// function reverseParameters(...params) {
//     const paramsArray = Array.from(params);
//     paramsArray.reverse();
//       return paramsArray;
//   }
//   console.log(reverseParameters(1, 2, 3, 4, 5)); 
// console.log(reverseParameters("aya", "kamal", "eldeeb")); 








// 3-  Write your own function that can add n values ensure that all passing parameters are numerical values only

// function addNumbers(...numbers) {
//     // Check if all the arguments are numbers
//     for (const num of numbers) {
//       if (typeof num !== 'number') {
//         throw new Error('All parameters must be numerical values.');
//       }
//     }
  
//     // Add all the numbers
//     return numbers.reduce((sum, num) => sum + num, 0);
//   }

//   console.log(addNumbers(1, 2, 3, 4, 5));
// console.log(addNumbers(1, 2, 3, 'hello'));