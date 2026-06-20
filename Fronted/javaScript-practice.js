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
// const arr=["apple","banana","orange"]
// for(let name of arr){
//     console.log(name)
// }
// const obj={
//     name:"Samsung A50",
//     disc:"Stylish phone",
//     price:25000
// }
// for(let mobile in obj){
//     console.log(obj[mobile])
// }
// const arr2=[{name:"Samsung A50",disc:"Stylish phone",price:25000},{name:"vivo y20",disc:"budget phone",price:15000},{name:"iphone",disc:"premium phone",price:50000}]
// for(let mobile of arr2){
//     for(let details in mobile){
//         console.log(mobile[details])
//     }
// }
// mern()
// function mern(){
//     console.log("Welcome to Marn Stack classes")
// }
// mern()

// const frontend=function(){
//     console.log("lets start Frontend")
// }
// frontend()

// const backend = ()=>{
//     console.log("lets start Backend")
// }
// backend()

// const frontend=function(){
//     console.log("You are Learning Frontend")
//     return "Frontend Completed"
// }
// const a=frontend()
// console.log(a)

// const backend = ()=>"Backend Completed"
// b=backend()
// console.log(b)

// const higherorderfunction = (a)=>{
//     console.log("You are in HDF")
//     a()
// }
// const callbackfunction = ()=>{
//     console.log("I am in callback function")
// }
// higherorderfunction(callbackfunction)

//const arr=[20,15,30,56]
// const arr2=arr.map(function(num){
//     return num*2
// })
// console.log(arr2)
//const arr2=arr.map((num)=>num*2)
// const arr2=arr.map((num)=>console.log(num))
// console.log(arr2)


// const arr=[10,5,500,602,45,[5,3,25]]
// console.log(arr.push(6))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.unshift(15))
// console.log(arr)
// console.log(arr.shift())
// const arr2=[10,"karthik",500,"sathi babu"]
// console.log(arr2.splice(2,1))
// console.log(arr2)
// console.log(arr2.splice(0,2,"sam"))
// console.log(arr2)
// console.log(arr2.splice(1))

// const arr3=["arun","vamshi","anusha"]
// console.log(arr3.indexOf("Anusha"))
// console.log(arr3.includes("Anusha"))

//find()
// const arr=[
//     {
//         rollno: "25AG1A6630",
//         name:"Manasa",
//         department:"CSM"
//     },
//      {
//         rollno: "25AG1A6655",
//         name:"Puli",
//         department:"CSM"
//     },
//      {
//         rollno: "25AG1A6659",
//         name:"Chaturya",
//         department:"CSM"
//     },
//     {
//         rollno: "25AG1A0519",
//         name:"Thanishka",
//         department:"CSE"
//     },
//      {
//         rollno: "25AG1A66D0",
//         name:"Manisha",
//         department:"CSD"
//     }
    
// ]
// const studentreport=arr.find(
//     s=>s.name ==="Puli"
// )
// console.log(studentreport)

// arr.forEach(
//    student =>{
//         console.log(student)
//     }
//     ) //for each method is used to iterae each element from an array

// const modarr=arr.map(
//     student=>console.log(student.name)
// )
// console.log(modarr) 

// const arrx=[2,50,18]
// const modarrx = arrx.map(element => element+5)
// console.log(modarrx) 

// const filter_arr=arr.filter(
//     student=>student.department === "CSD"
// )
// console.log(filter_arr.length)

//reduce()

// const marks=[25,75,50,30,82,65]
// const total=marks.reduce(
//     (sum,sub)=>sum+sub,0
// )
// console.log(total)

// //sort()
// const arr=[10,25,350,50,65]
// arr.sort()
// console.log(arr)//this method will convert numbers to string
// arr.sort(
//     (a,b)=>b-a
// )
// console.log(arr)


// const students = [
//   { rollNo: 101, name: "Arun", department: "CSE", marks: 85 },
//   { rollNo: 102, name: "Ravi", department: "CSD", marks: 22 },
//   { rollNo: 103, name: "Sita", department: "CSM", marks: 78 },
//   { rollNo: 104, name: "Kiran", department: "IT", marks: 45 },
//   { rollNo: 105, name: "Priya", department: "CSO", marks: 91 },

//   { rollNo: 106, name: "Rahul", department: "CSE", marks: 30 },
//   { rollNo: 107, name: "Sneha", department: "CSD", marks: 67 },
//   { rollNo: 108, name: "Teja", department: "CSM", marks: 55 },
//   { rollNo: 109, name: "Divya", department: "IT", marks: 29 },
//   { rollNo: 110, name: "Ajay", department: "CSO", marks: 72 },

//   { rollNo: 111, name: "Anil", department: "CSE", marks: 95 },
//   { rollNo: 112, name: "Meena", department: "CSD", marks: 41 },
//   { rollNo: 113, name: "Vamsi", department: "CSM", marks: 18 },
//   { rollNo: 114, name: "Nisha", department: "IT", marks: 88 },
//   { rollNo: 115, name: "Kavya", department: "CSO", marks: 36 },

//   { rollNo: 116, name: "Ramesh", department: "CSE", marks: 50 },
//   { rollNo: 117, name: "Pooja", department: "CSD", marks: 93 },
//   { rollNo: 118, name: "Tarun", department: "CSM", marks: 34 },
//   { rollNo: 119, name: "Deepika", department: "IT", marks: 62 },
//   { rollNo: 120, name: "Manoj", department: "CSO", marks: 28 },

//   { rollNo: 121, name: "Lokesh", department: "CSE", marks: 74 },
//   { rollNo: 122, name: "Anusha", department: "CSD", marks: 81 },
//   { rollNo: 123, name: "Sai", department: "CSM", marks: 39 },
//   { rollNo: 124, name: "Harika", department: "IT", marks: 27 },
//   { rollNo: 125, name: "Keerthi", department: "CSO", marks: 58 },

//   { rollNo: 126, name: "Bhanu", department: "CSE", marks: 33 },
//   { rollNo: 127, name: "Mahesh", department: "CSD", marks: 46 },
//   { rollNo: 128, name: "Jyothi", department: "CSM", marks: 87 },
//   { rollNo: 129, name: "Chandu", department: "IT", marks: 53 },
//   { rollNo: 130, name: "Suresh", department: "CSO", marks: 20 }
// ];

// const passedStudents = students.filter(student => student.marks >= 35);
// console.log(passedStudents)
// const passedStudents1 = students.filter(student => student.marks >= 35 && student.department==="CSE");
// console.log(passedStudents1)
// const passedStudents2 = students.filter(student => student.marks >= 35 && student.department==="CSD");
// console.log(passedStudents2)
// const passedStudents3 = students.filter(student => student.marks >= 35 && student.department==="CSM");
// console.log(passedStudents3)
// const passedStudents4 = students.filter(student => student.marks >= 35 && student.department==="IT");
// console.log(passedStudents4)
// const passedStudents5 = students.filter(student => student.marks >= 35 && student.department==="CSO");
// console.log(passedStudents5)


const students = [
  { rollNo: 101, name: "Arun", department: "CSE", marks: 85, placed: true, package: 12 },
  { rollNo: 102, name: "Ravi", department: "IT", marks: 65, placed: false, package: 0 },
  { rollNo: 103, name: "Sita", department: "CSD", marks: 92, placed: true, package: 15 },
  { rollNo: 104, name: "Rahul", department: "CSM", marks: 55, placed: true, package: 6 },
  { rollNo: 105, name: "Priya", department: "CSO", marks: 88, placed: true, package: 18 },
  { rollNo: 106, name: "Ajay", department: "CSE", marks: 72, placed: false, package: 0 },
  { rollNo: 107, name: "Sneha", department: "IT", marks: 81, placed: true, package: 10 },
  { rollNo: 108, name: "Kiran", department: "CSD", marks: 49, placed: false, package: 0 },
  { rollNo: 109, name: "Deepika", department: "CSM", marks: 90, placed: true, package: 14 },
  { rollNo: 110, name: "Manoj", department: "CSO", marks: 76, placed: true, package: 8 }
];

const placedStudents = students.filter(student => student.placed === true);
 console.log(placedStudents)

 const placedstudentnames=placedStudents.map(
     student=>({
        name:student.name,
        package:student.package
     })
 )
 console.log(placedstudentnames)

const averagePackage = students.reduce((sum, student) => sum + student.package, 0)/placedStudents.length;
console.log(averagePackage);


const highestpackage=placedStudents.reduce((max,student)=>max>student.package?max:student.package,0)
console.log(highestpackage)

const tenlpa=placedstudentnames.filter(student=>student.package>=10)
console.log(tenlpa)
tenlpa.map(student=>console.log(student.name))