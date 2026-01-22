// console.log("hello")
const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent)
// const h2 = React.createElement("h2" ,{style: {color: "pink"}} , "Hello World from ReactJS");
// const h1 = React.createElement("h1" ,{style :{color:"blue"}} ,"its my second react heading");
// const li1 = React.createElement("li" ,{} , "Java Progrmaing")
// const li2 = React.createElement("li" ,{} , "C++")
// const li3 = React.createElement("li" ,{} , "JavaScript")
// const li4 = React.createElement("li" ,{} , "Python")
// const ul = React.createElement("ul" ,{} ,[li1, li2, li3, li4])
// const img = React.createElement("img" ,{src:"https://www.freepik.com/free-photo/ui-ux-representations-with-laptop_38688238.htm#fromView=keyword&page=1&position=0&uuid=275a6ba8-fc9d-4d65-b2ef-2278439564c3&query=Website+design",style:{height:"100px" ,width:"100px" , borderRadius:"50%"}} );
// const div = React.createElement("div" ,{} , h1, h2,img,ul);
// root.render(div);

//to avoid the React.createElement method we use JSX for fast development
// const h2 = '<h2>Hello World from ReactJS </h2>' //ok
const h2 = <h2>Hello World from ReactJS </h2>// not ok
root.render(h2);
//Babel is a JS compiler which converts JSX code into React.createElement methods