 //reverse loop


// for(let i=10;i>=1;i--)   
// console.log(i)


//arr using for loop


// let arr = ['apple','orange','banana']   


// for(let i=0;i<arr.length;i++)
// console.log(arr[i])


 //continur for loop


// for(let i=10;i<=100;i=i+10){

// if(i%40==0){                     
//     continue
    
// }
// console.log(i)
// }


 //for of loop


// let arr = ['apple','orange','banana']

                                               
// for(let fruits of arr)
// console.log(fruits)


// let items = {phone:'redmi',price:15000,quantity:1}

// for(let key in items)
// console.log(items[key])






//0==0   //true
//0!=0   //false
//0<=0   //true
//0>=0   //true
//0<0    //false
//0>0    //false


//1==0   //false
//1!=0   //true
//1<=0   //false
//1>=0   //true
//1<0    //false
//1>0    //false



//for loop using array


// let arr = [1,5,7,8,9]

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }




//for loop using Reverse array


// let arr = [1,5,7,8,9]

// for(let i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
// }






//while loop using array


// let arr = [1,5,6,8,9]

// let i = 0

// while(i<arr.length){

//     console.log(arr[i])
//     i++
//     }






// While loop using Reverse Array


//     let arr1 = [1,5,6,8,9]

//  let i = arr1.length-1

// while(i>=0){

//     console.log(arr[i])
//     i--
//     }





//Recursive loop using array

let arr = [1,5,6,8,9]

let i = 0

function recursive(arr,i){
  if(i<arr.length){
    console.log(arr[i])
    recursive(arr,i+1)
  }
}
recursive(arr,i)




   

//Recursive loop using Reverse Array


// let arr = [1,5,6,8,9]


// let i = arr.length-1

// function RecursiveR(arr,i){
//   if(i>=0){
//     console.log(arr[i])
//     RecursiveR(arr,i-1)
//   }
// }
// RecursiveR(arr,i)






// function reverseArray(arr, start, end) {
//     if (start >= end) {
//         return;
//     }
    
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     reverseArray(arr, start + 1, end - 1);
// }

// const arr = [1, 2, 3, 4, 5];
// reverseArray(arr, 0, arr.length - 1);
// console.log("Reversed array:", arr);


