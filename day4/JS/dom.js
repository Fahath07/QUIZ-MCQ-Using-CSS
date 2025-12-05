//tag selector
let heading1=document.getElementsByTagName("h1");
console.log(heading1[1]);


//2.Class Selector
let cl =document.getElementsByClassName("a");
//HTML Collection Array
console.log(c[10]);


//3.ID Selector
let idd=document.getElementById("b");
//It will return Single Element and the first element
console.log(idd);


//4.Query Selector(it Works on all the three selectors)
let sel=document.querySelector("Hi");
//It will return Single Element and the first Element
console.log(sel);


//5.Ouery Selector All
let d=document.querySelectorAll("hi");
//NodeList Array
console.log(d[0]);

//read and write operation
let head=document.querySelector("p");
//read operation
console.log(head.textContent);

//Write Opeation
head.textContent="This is the new text Content.";
let div=document.querySelector("div");
div.innerHTML="<p>hello from PARA</p>";
//div.textContent="<p>Hello From PARA</p>;
console.log(div.textContent);

console.log(div.innerHTML);
