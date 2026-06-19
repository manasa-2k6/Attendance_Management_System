// console.log("Welcome students")
// var a=10
// var b="10"
// console.log(a===b)
// console.log(name)
// var name='kumar'
// console.log(name)
// name='arun'
// console.log(name)
// function greet(){
//     var a='Welcome'
//     console.log(a)
// }
// console.log(a)  

// if(true){
//     var c = 100
//     console.log(c)
// }
// console.log(c)
// if(true){
//      let c = 100
//      console.log(c)
//  }
//  console.log(c)
// const a=10
// const a=10
// console.log(a)
// var a=10
// var b="25"
// console.log(a+b)
// let a=10 
// a+=20
// console.log(a++)
// const a=10
// console.log(typeof a)
// const b="10"
// console.log(typeof b)
// console.log(a==b)
// const c=70 
// const d=c>50?"YES":"NO"
// console.log(checking)
// const age=12
// if(age>=18){
//     console.log("Eligible for voting")
// }
// else{
//     console.log("Not Eligible for voting")
// }
//greater among three numbers
// const a=10
// const b=20
// const c=15
// if (a>b && a>c){
//     console.log("a is grater")
// }
// else if(b>a && b>c){
//     console.log("b is greater")
// }
// else{
//     console.log("c is greater")
// }
// const age = 16
// const license=true
// if (age >=18){
//     if(license==true){
//         console.log("you can drive")
//     }
// }
// else{
//     console.log("you cannot drive")
// }
// day = 3
// switch(day){
//     case day=1:
//         console.log("Monday")
//         break;
//     case day=2:
//         console.log("Tuesday")
//         break;
//     case day=3:
//         console.log("Wednesday")
//         break;
// }
const arr=["apple","banana","orange"]
for(let name of arr){
    console.log(name)
}
const obj={
    name:"Samsung A50",
    disc:"Stylish phone",
    price:25000
}
for(let mobile in obj){
    console.log(obj[mobile])
}
const arr2=[{name:"Samsung A50",disc:"Stylish phone",price:25000},{name:"vivo y20",disc:"budget phone",price:15000},{name:"iphone",disc:"premium phone",price:50000}]
for(let mobile of arr2){
    for(let details in mobile){
        console.log(mobile[details])
    }
}