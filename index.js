// console.log("hellp..");
// console.log("one");
// setTimeout(() => {
//     console.log("two")}, 2000);



// console.log("three");
//promise
// const myPromise = new Promise((resolve, reject) => {
//     let age=30;
//     if (age >= 18) {
//         throw new Error("age is not defined");
//         resolve("promise resolved")
//     }else{ reject("promise rejected")}});
    // console.log(myPromise)
    // to handle promise
    // myPromise.then((message) => {
    //     console.log(message);
    // }).catch((error) => {
    //     console.log(error);
    // });
    //another way to handle promise using async await
//      async function handlePromise() {
//         try {
//             const message = await myPromise;
//             console.log(message);
//         } catch (error) {
//             console.log(error);
//         }finally {
//             console.log("promise is handled");
//         }}
//    console.log(handlePromise());
// const response= fetch('https://fakestoreapi.com/products')
// response.then((res)=>res.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));
const container=document.getElementById("container");
const btn=document.getElementById("btn");
const loader=document.getElementById("loader");
console.log(btn);
console.log(container)
let html='';
async function getData(){
    try{
        loader.innerHTML=`<h2 style="color: red;">Data is Loading...</h2>`;
const response= await fetch('https://fakestoreapi.com/products');
const data=  await response.json();  
data.map((ele)=>{
    html+=`<div><h2>${ele.title}</h2>
    <h2>${ele.price}</h2> </div>`})


console.log(data[0].title)
// container.innerHTML=`<h1 style="color: blue;">${data[0].title}</h1>`;  
container.innerHTML=html;
}catch(error){
        console.log(error)
    }
finally{
    loader.innerHTML=``;
}}
    // console.log(getData());
    // getData();
    btn.addEventListener('click',() => getData());
    