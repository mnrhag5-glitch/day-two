//Hello! today im learning and prcticing javascript,in js we are 
//learning about variables , operators,data types.
//so lets start.


//variables ---

// Name="gautam";
// age=22;
// gender="male"
// proffession="full stack developer";
// married="false";
// console.log(age);


//so these are variable ,we can create our variable like any kind of name ,we can add numbers in name(use after or in the middle of the word)
//we can use syble like doller,minus and some more.
//there are three type keyword var , let ,const.
//so lets start it.


// var name="gautam";
// var age=22;
// var gender="male"

// console.log(gender);

//let keyword

// let name="ram";
// let age=22;
// let gender="male"
// console.log(age);

//data typee-->string,number,boolean,null,undifine,symble,bigint
//and there are non-primitve--object,fnction,array

//let is block sccope 

// let name="gautam";
// name="seju";
// console.log(name);

// let info={
//     name:"seju",
//     age:21,
//     gender:"female",
//     from:"badon",
//     merried:false
// }
// console.log(info.gender);
// console.log(info.age);
// console.log(info.name);
// console.log(info.merried);
// console.log(info);


// //so this is object 

// //we can change some info under it---

// let about={
//     name:"seju",
//     age:21,
//     gender:"female",
//     from:"badon",
//     merried:false
// }
// about.age=27;
// about.from="dumehar";

// console.log(about);


// //so this is object and this is how we can check key,value and change the value
// //now next is operators and condition

// //we use these operators for calculte , cpmpare , logic check

// let a=5;
// let b=10;
// let sum=a+b;
// console.log(sum)

// let c=5;
// let d=10;
// let sub=a-b;
// console.log(sub)

// let e=5;
// let f=10;
// let multi=a*b;
// console.log(multi)

// let g=15;
// let h=5;
// let divide=a/b;
// console.log(divide)


// let i=15;
// let j=3;
// let exponetation=a%b;
// console.log(exponetation);

// let k=15;
// let l=3;
// let modulor=a**b;
// console.log(modulor);


//assignment-------

// let a=10;
// let b=20;


//console.log(++a);   //it gave us 11
//console.log(a++);   //it gave us 11
//console.log(a++);   //it gave us 12


// let x=12;
// console.log(x+=5);
//just like another AO worked



//comparison operator-----

// let a=4;
// let b="4";

//console.log(a===b);   //bcs tripple equlstwo check value+type and value is diff so it gave us false


//console.log(a==b);    //turw bcs it check only value not type


// let a =12;
// let b="12";

//console.log(a!=b);     //false  bcz ! its mean not-equals two
//console .log(a!==b)    // true  bcz not equal value or type


// let a=23;
// let b=45;

//console.log(a>=b)   // false//gretter then
//console.log(a<=b)   //ture // less then


//logical ---------------

// let age=9;
// if(age>=18){
//     console.log("adult");
// }else
// {console.log("bda ho ja munna abhi")}

//this is example of greter and less then-----


//&& -----this says that i need both condition true then i gave ture

//  ||----says i need onlty one true condition and i will gave ture 

let age =23;
let hasVoterId=true;

if(age>=18 && hasVoterId===true){
    console.log("you can vote buddy")
}else{
    console.log("bhagg ynha se");
}








