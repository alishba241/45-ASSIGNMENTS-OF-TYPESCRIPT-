//TASK 2
// let personName: string="Eric";
// console.log(`hello ${personName}, would you like to learn some python today?`)
/////////////////////////////////////////////////////////////////////
//TASK 3
// lower case
// let personName: string="Alishba"
// console.log("lowercase:", personName.toLowerCase());
// // upper case
// console.log("uppercase:", personName.toUpperCase());
// // title case
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
//////////////////////////////////////////////////////////////////////
//TASK 4
// let qoute: string="A person eho never made a mistake never tried anything new.";
// let author: string="Albert Einstein";
// console.log(`${author} once said, "${qoute}"`);
//////////////////////////////////////////////////////////////////////////////
//TASK 5
// let famous_person: string="Albert Eintein";
// let qoute:string="A person who never made a mistake never tried anything new.";
// console.log(`${famous_person} once said, "${qoute}"`);
////////////////////////////////////////////////////////////////////////
//TASK 6
// let nam:string="\t\nKAMRAN KHAN TESSORI\n\t";
// console.log(nam);
// //stripped name
// let stripp:string=nam.trim();
// console.log(stripp);
/////////////////////////////////////////////////////////////////////
//TASK 7 & 8
// console.log(6 + 2);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(40 / 5);
////////////////////////////////////////////////////////////////////////
//TASK 9
// let favourite_number:number=16;
// console.log(`My favourite number is ${favourite_number}`);
///////////////////////////////////////////////////////////////////
//TASK 10
// alishba naveed
// date:19-feb-24
// let a:number=2;
// let b:number=4;
// console.log(a + b);
// this program will add the value a and b
///////////////////////////////////////////////////////////////////////
//TASK 11
// let Names:string[]=["Areesha" , "Ramsha" , "Hooria" , "Saima" , "Esha"];
// Names.forEach(Names => console.log(Names));
////////////////////////////////////////////////////////////////////
//TASK 12
// let Names:string[]=["Areesha" , "Ramsha" , "Hooria" , "Saima" , "Esha"];
// let message:string="\tWill you join us on birthday party?";
// Names.forEach(Names => console.log(Names + message));
///////////////////////////////////////////////////////////////////////
//TASK 13
// let arr:string[]=["Land Crusor" , "Cycle" , "Plane" , "Motorbike"];
// let state:string="I will buy a\t";
// arr.forEach(arr => console.log(state + arr));
///////////////////////////////////////////////////////////////////
//TASK 14
// let guestList:string[]=["Kainat" , "Hamza" , "Farwa" , "Aiman" , "Noor" , "Fahad"];
// let invitation:string="\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!";
// guestList.forEach(guestList => console.log(guestList + invitation));
// export{guestList};
/////////////////////////////////////////////////////////////////////////////////////////////
// // // // // // //TASK 15
// let guestList:string[]=["Kainat" , "Hamza" , "Farwa" , "Aiman" , "Noor" , "Fahad"];
// let invitation:string="\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!";
// guestList.forEach(guestList => console.log(guestList + invitation));
// ///not coming person
// let not_come=guestList[0];
// console.log(not_come + "\tis not coming today");
// ///lets invite shehroz
// let coming:string[]=["Kainat" , "Hamza" , "Farwa" , "Aiman" , "Noor" , "Fahad"];
// guestList.splice(0,1,"Shehroz");
//guestList.forEach(coming => console.log(`${coming}`,"\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!"));
// // // // // ////////////////////////////////////////////////////////////////////////////////////////
// // // // // //TASK 16
// let guestList: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// let invitation: string = "\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!";
// guestList.forEach(guestList => console.log(guestList + invitation));
// ///not coming person
// let not_come = guestList[0];
// console.log(not_come + "\tis not coming today");
// ///lets invite shehroz
// let coming: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// guestList.splice(0, 1, "Shehroz");
// guestList.forEach(coming => console.log(`${coming}`, "\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!"));
// //we got bigger table guys!!!
// console.log("we got bigger table!!");
// coming.splice(0, 0, "Fatima");
// coming.splice(2, 2, "Rehan");
// coming.splice(5, 5, "usman");
// let newMessage: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// coming.forEach(newMessage => console.log(`${newMessage}`,"\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!"));
// // // // ///////////////////////////////////////////////////////////////////////
// // // // //TASK 17
// let guestList: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// let invitation: string = "\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!";
// guestList.forEach(guestList => console.log(guestList + invitation));
// ///not coming person
// let not_come = guestList[0];
// console.log(not_come + "\tis not coming today");
// ///lets invite shehroz
// let coming: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// guestList.splice(0, 1, "Shehroz");
// guestList.forEach(coming => console.log(`${coming}`, "\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!"));
// //we got bigger table guys!!!
// console.log("we got bigger table!!");
// coming.splice(0, 0, "Fatima");
// coming.splice(2, 2, "Rehan");
// coming.splice(5, 5, "usman");
// let newMessage: string[] = ["Kainat", "Hamza", "Farwa", "Aiman", "Noor", "Fahad"];
// coming.forEach(newMessage => console.log(`${newMessage}`,"\tI want to invite you at dinner on upcoming saturday. I will be very glad to see you. Thank you!!"));
// //we have not a big table!!!
// console.log("sorry we cannot arrange a big table for dinner. Only two persons are invited.");
// while(coming.length>2){
//    let removeguest=coming.pop()
//    console.log(`sorry ${removeguest} you are not invited for today's dinner.`);
// }
// for(let i = 0; i<coming.length; i++){
// console.log(`Dear` +coming[i]+ `you are still invited on dinner.`);
// }
// coming.splice(0,2);
// console.log(coming);
// // // /////////////////////////////////////////////////////////////////////
// // // //TASK 18
// // Store the locations in a array. Make sure the array is not in alphabetical order.
// let fav_places: string[] = ["Turkey", "Paris", "Malir", "Newzland", "South africa"];
// // Print your array in its original order.
// console.log("Original Order:" + fav_places);
// //Print your array in alphabetical order without modifying the actual list.
// console.log("\nAlphabetical Order:" + [...fav_places].sort());
// //Show that your array is still in its original order by printing it.
// console.log("\nOriginal Order:" + fav_places);
// // Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("\nReverse Alphabetical Order:" + [...fav_places].sort().reverse());
// //Show that your array is still in its original order by printing it again.
// console.log("\nOriginal Order:" + fav_places);
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log("\nReversed Order:" + fav_places.sort());
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
// fav_places.reverse();
// console.log("\n Original Order:");
// console.log(fav_places);
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// fav_places.sort();
// console.log("\nSort Alphabetically:");
// console.log(fav_places);
// //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// fav_places.sort();
// console.log("\nSort in Reverse Alphabetical Order:");
// console.log(fav_places);
// // ///////////////////////////////////////////////////////////////////////////////
// // //TASK 19
// import{ guestList } from '../14.guest list/app';
// console.log("Number of people invited");
// console.log(`we had finally invited ${guestList.length} persons.`);
// ////////////////////////////////////////////////////////////////////////////////
// //TASK 20
// let fruits:string[]=["Apple" , "Orange" , "Grapes" , "Mango" , "Banana"];
// console.log("List of Fruits");
// for(let top of fruits){
//     console.log(top)
// }
///////////////////////////////////////////////////////////////////////////
// //TASK 21
// // interface for stationary
// interface stationary {
//      brand: string;
//      name: string;
//      price: number;
//  };
//  //Create objects 
//  const scale: stationary = {
//     brand: "dux",
//     name: "scale",
//     price: 10,
// };
// const ball_pen: stationary = {
//     brand: "signature",
//    name: "ballpen",
//     price: 15,
// };
// const pencil: stationary = {
//     brand: "dollar",
//     name: "pencil",
//     price: 10,
// };
// // Print information about each electronic device
// console.log(`brand:${scale.brand}, name: ${scale.name}, price: ${scale.price} `);
// console.log(`brand:${ball_pen.brand}, name: ${ball_pen.name}, price: ${ball_pen.price} `);
// console.log(`brand:${pencil.brand}, name: ${pencil.name}, price: ${pencil.price} `);
//////////////////////////////////////////////////////////////////////////
//TASK 22
// let fruits:string[]=["Apple" , "Orange" , "Grapes" , "Mango" , "Banana"];
// //getting index error
// console.log(fruits[7]);
// //as an array contain only 5 elements (4 index) hence this program will cause an error
// //correction
// console.log(fruits[0]);
//printig 1st element of array (index 0)
//////////////////////////////////////////////////////////////////////////
//TASK 23
// //example 1
// let num:number=50;
// //console.log("Is num ==50? I predict true otherwise I predict false")
// console.log(num ==50);
// console.log(num ==34);
// //example 2
// let color:string="pink";
// //console.log("Is color =="pink"? I predict true otherwise I predict false")
// console.log(color =="pink");
// console.log(color =="yellow");
// //example 3
// let flower:string="tulip";
// //console.log("Is flower =="tulip"? I predict true otherwise I predict false")
// console.log(flower =="tulip");
// console.log(flower =="rose");
// //example 4
// let device:string="laptop";
// //console.log("Is device =="laptop"? I predict true otherwise I predict false")
// console.log(device =="laptop");
// console.log(device =="PC");
// //example 5
// let language:string="typescript";
// //console.log("Is language =="typescript"? I predict true otherwise I predict false")
// console.log(language =="typescript");
// console.log(language =="Python");
//////////////////////////////////////////////////////////////
//TASK 24
// console.log("test for equality and inequality")
// const stationary1:string="pencil";
// const stationary2:string="scale";
// //equality
// console.log(stationary1===stationary2);
// //inequality
// console.log(stationary1!==stationary2);
// console.log("test for lower case function")
// const nam1:string="HUZAIFA";
// const nam2:string="huzaifa";
// console.log(nam1.toLowerCase()===nam2);
// console.log(nam2.toLowerCase()===nam1);
// console.log("test for numerical")
// //equal and not equal
// const num1:number=7;
// const num2:number=7;
// console.log(num1===num2);
// console.log(num1 !== num2);
// //greater than and less than
// const num3:number=9;
// const num4:number=3;
// console.log(num3 > num4);
// console.log(num3 < num4);
// //greater than or equal to, and less than or equal to
// const num5:number=2;
// const num6:number=5;
// console.log(num5 <= num6);
// console.log(num5 >= num6);
// console.log("test for and , or operators")
// const cond1:boolean=true;
// const cond2:boolean=false;
// console.log(cond1 && cond2);
// console.log(cond1 || cond2);
// console.log("test whether an item is an array")
// const array:string[]=["laptop" , "Pc" , "Mobile" , "tab"]
// console.log(array.includes("Mobile"));
// console.log(array.includes("television"));
// console.log("test whether an item is not an array");
// const arr:string[]=["pink" , "blue" , "red" , "orange"]
// console.log(arr.includes("yellow"));
// console.log(arr.includes("pink"));
/////////////////////////////////////////////////////////////////
//TASK 25
// console.log("aliencolor is green");
// let alienColor: string = "green";
// if (alienColor === "green") {
//     console.log("player just earned 5 points!!");
// }
// else {
//     console.log(); //no otput will show
// }
// console.log("alienColor is not green")
// let alien_color: string = "red";
// if (alien_color === "green") {
//     console.log(" player just earned 5 points!!");
// } else {
//     console.log(); //no output will show
// }
/////////////////////////////////////////////////////////////////////
//TASK 26
// console.log("RUN IF BLOCK\n")
// let alien_color:string="green";
// if(alien_color==="green") {
//     console.log(" the player just earned 5 points for shooting the alien.")
// }
// else{
//     console.log("the player just earned 10 points.")
// }
// console.log("RUN ELSE BLOCK\n")
// let aliencolor:string="red";
// if(aliencolor==="green") {
//     console.log(" the player just earned 5 points for shooting the alien.")
// }
// else{
//     console.log("the player just earned 10 points.")
// }
//////////////////////////////////////////////////////////////
//TASK 27
// //VERSION 1
// let alienColor:string="green";
// if (alienColor === "green") {
//     console.log(" the player earned 5 points.");
// }
// else if(alienColor === "yellow") {
//     console.log("the player earned 10 points. ");
// }
// else if(alienColor === "red") {
//     console.log( "the player earned 15 points.");
// };
// //VERSION 2
// let alien_color:string="yellow";
// if (alien_color === "green") {
//     console.log(" the player earned 5 points.");
// }
// else if(alien_color === "yellow") {
//     console.log("the player earned 10 points. ");
// }
// else if(alien_color === "red") {
//     console.log( "the player earned 15 points.");
// };
// // VERSION 3
// let alieColor:string="red";
// if (alieColor === "green") {
//     console.log(" the player earned 5 points.");
// }
// else if(alieColor === "yellow") {
//     console.log("the player earned 10 points. ");
// }
// else if(alieColor === "red") {
//     console.log( "the player earned 15 points.");
// };
///////////////////////////////////////////////////////////
//TASK 28
// let age:number=16;
// if(age < 2 )
// {
//     console.log(" the person is a baby.");
// }
// else if(age>=2 && age <4 )
// {
//     console.log(" the person is a toddler.");
// }
// else if(age>=4 && age <13)
// {
//     console.log(" the person is a kid.");
// }
// else if(age>=13 && age <20)
// {
//     console.log(" the person is a teenager.");
// }
// else if(age>=20 && age <65)
// {
//     console.log(" the person is a adult.");
// }
// else if(age>=65)
// {
//     console.log(" the person is a elder.");
// }
///////////////////////////////////////////////////////////////////
//TASK 29
// const favorite_fruits:string[]=["mango","apple","grapes","peach","cherry"];
// if(favorite_fruits.includes("banana")) {
//     console.log("you really like bananas!");
// }
// else{
//     console.log("I don't like bananas.");
// }
// if(favorite_fruits.includes("apple")) {
//     console.log("you really like apples!");
// }
// if(favorite_fruits.includes("blueberry")) {
//     console.log("you really like blueberries!");
// }
// else{
//     console.log("I don't like blueberries.");
// }
// if(favorite_fruits.includes("peach")) {
//     console.log("you really like peach!");
// }
// if(favorite_fruits.includes("cherry")) {
//     console.log("you really like cherries!");
// };
/////////////////////////////////////////////////////////////////////
//TASK 30
// const usernames: string[] = ["admin", "beena", "daniyal", "bushra", "arham"];
// // greetings by loop
// for (const username of usernames) {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
/////////////////////////////////////////////////////////
//TASK 31
// let usernames: string[] = ["admin", "beena", "daniyal", "bushra", "arham"];
// // removal of usernames
// usernames = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else{
//     for (let username of usernames) {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
// }
// else{
//     console.log(`Hello ${username}, thank you for logging in again.`)
// }
//     }
// }
///////////////////////////////////////////////////////////////
//TASK 32
// let current_users:string[] = ["Erum" , "Ayesha" , "Hira" ," Arifa" , "Hareem"];
// let new_users:string[] = ["Hafsa" , "Omer" , "Erum" , "Fatima" , "Hira"];
// let current_users_lower :string[] = current_users.map(user => user.toLowerCase())
// for( let new_user of new_users) {
//     if(current_users_lower.includes(new_user.toLowerCase())) {
//         console.log(`sorry ${new_user} this name is already taken.`);
//     } else{
//         console.log(`yes ${new_user} this name is available.`);
//     }
// };
////////////////////////////////////////////////////////////////////
//TASK 33
// let ordinal_numbers :number[] = [1,2,3,4,5,6,7,8,9];
// for(let number of ordinal_numbers) {
//     if(number === 1) {
//         console.log(`${number}st`);
//     }
// else if(number === 2) {
//     console.log(`${number}nd`);
// }
// else if(number === 3) {
//     console.log(`${number}rd`);
// }
// else{
//     console.log(`${number}th`);
// }
// };
///////////////////////////////////////////////////////////////
//TASK 34
// let fav_pizza : string[]=["Pepproni" , "Alfredo" , "Chicken tikka"];
// for(let pizza of fav_pizza){
//     console.log(pizza);
// };
// for(let pizza of fav_pizza){
//     console.log(`${pizza} is very delicious pizza flavor I really like it.`);
// };
//  console.log("\nI really love pizza!!");
////////////////////////////////////////////////////////////////////
//TASK 35
// let animal:string[] =["cat" , "tiger" , "rabbit"];
// for (let ani of animal){
//     console.log(ani);
// }
// console.log("\n");
// for (let ani of animal){
//     console.log(`A ${ani} has four legs.`);
// }
// console.log("\n");
// console.log("I love all the pets thay all are very cute but I like cats more!!");
//////////////////////////////////////////////////////////////////////////
//TASK 36
// function make_shirt(size:string , text:string) :void{
//     console.log(`your shirt size is ${size} that says ${text}.`);
// }
// make_shirt("Medium" , "Good vibes");
////////////////////////////////////////////////////////////////
//TASK 37
// function make_shirt(size :string = "large" , text:string = "I love typescript."): void{
//     console.log(`your shirt size is ${size} that says ${text}.`)
//     }
//     make_shirt();
//     make_shirt("medium");
//     //different message
//     make_shirt("small" , "Be honest to yourself");
///////////////////////////////////////////////////////////////////////
//TASK 38
// function describe_city(city:string , country:string = "Pakistan") :void{
//     console.log(`${city} is in ${country}.`);
//     }
//     describe_city("Islamabad");
//     describe_city("Quetta");
//     describe_city("Riyadh" , "Saudia Arabia");
///////////////////////////////////////////////////////////////
//TASK 39
// function city_country( city:string , country:string) :string{
//     return `${city} , ${country}`
// }
// let city1 = city_country("Pheonix","USA");
// let city2 = city_country("Multan","Pakistan");
// let city3 = city_country("Jaddah","Saudia Arabia");
// console.log(city1);
// console.log(city2);
// console.log(city3);
/////////////////////////////////////////////////////////////////////////
//TASK 40
// function make_album(artist:string , title:string):{artist :string; title:string} {
//     const dictionary = {
//         artist:artist.charAt(0).toUpperCase() +artist.slice(1),
//         title:title.charAt(0).toUpperCase() +title.slice(1)
//     };
//     return dictionary;
// }
// let album = make_album("hamza" , "heaven")
// console.log(album);
// album = make_album("ahmed" , "seasaw")
// console.log(album);
// album = make_album("zaid" , "broadway")
// console.log(album);
////////////////////////////////////////////////////////////////////
//TASK 41
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
//     }
//     const magician:string[] =["farhan" , "shoaib" , "naseem" , "babar"];
//     show_magicians(magician);
////////////////////////////////////////////////////////////////
//TASK 42
//copy of exercise 41 
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
//     }
//     // const magician:string[] =["farhan" , "shoaib" , "naseem" , "babar"];
//     // show_magicians(magician);
// //exercise 42
// function make_great(magicians:string[]):void{
//     for(let i =0; i < magicians.length; i++){
//         magicians[i] =magicians[i] + "\tis the great."
//     }
// }
// const magician2:string[]=["farhan" , "shoaib" , "naseem" , "babar"];
// make_great(magician2);
// show_magicians(magician2);
///////////////////////////////////////////////////////////////////////////////
//TASK 43
// function make_great2(magicians: string[]): string[] {
//     const great_magicians: string[] = [];
//     for(let i = 0; i<magicians.length; i++){
//         great_magicians.push(magicians[i] + "\tis the great.");
//     }
//     return great_magicians;
// }
// const magicians3:string[]=["farhan" , "shoaib" , "naseem" , "babar"];
// const great_magicians2 :string[] =make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(great_magicians2);
// //copy of exercise 41 
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
//     }
// const magician:string[] =["farhan" , "shoaib" , "naseem" , "babar"];
// show_magicians(magician);
////////////////////////////////////////////////////////////////////////
//TASK 44
// function sandwiches(...items: string[]):void{
//     console.log("Sandwich order:")
//     for (let i = 0; i < items.length; i++){
//     console.log(`-${items[i]}`)
//     }
// }
// console.log("Hot n Tasty sandwiches!!")
// sandwiches("chicken" , "mushrooms" , "tomatoes");
// sandwiches("chicken" , "pepproni" , "cheese");
// sandwiches("beef" , "cabbage" , "tomatoes");
//////////////////////////////////////////////////////////////////////
//TASK 45
// type car={
//     manufacture: string
//     model:string
//     [key:string]:any;
// }
// function car_creation(manufacture:string , model:string, optional: Record<string,any>): car{
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const mycar:car=car_creation("Honda" , "Civic" , {color:"white" , year:"2024"})
// console.log(mycar);
