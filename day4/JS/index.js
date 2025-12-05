console.log(2=="2");
console.log(2==="2");

let c=[1,2,3,"ass"];
let d=[1,2,3,"ass"];
console.log(c[0]===d[0]);

console.log("For :")
let arr=[1,2,3,4,5,6];
//for loop
for(let i=0;i<arr.length;i++)
{
    console.log(i,arr[i]);
}

console.log("For Each:");
let arr1=[2,4,6,8,10];
//forEach
arr1.forEach((element,index)=>{
    console.log(element,index);
});

let arr2=[1,2,3,4,5,6];
//let aa=arr.map((el,ind)=>){
//    return el+ind;
// }
// or
let aa=arr.map((el,ind)=>el+ind);
console.log(arr2);
console.log(aa);