let searchBtn = document.getElementById("btn");
let result = document.getElementById("face");

let film = {};
let rate = 0;
let time = 0;
let perioud = "0";
let kind1 = "";
let kind2 = "";
let kind3 = "";
let img = "";
let story = "";
let summary = "";

searchBtn.addEventListener("click" , function() {
let input = document.querySelector("input").value;

if (input == "Terrifier") {
    film ={ rate : 9, time : 2020, perioud :"1h 45m", kind1 : "Action", kind2 :"Drama",
    kind3 : "Horror", img : "images/folder (8).jpg", story : "The Clown",
    summary : `It takes about a mad clown who enjoys killing others and slicing their body 
    into pieces.the police has no turn in this story, but at the end the girl will kill 
    him with special sword`};

} else if (input== "Fast and Furious") {
    film ={ rate : "9.9", time : 1999, perioud :"2h 45m", kind1 : "Action", kind2 :"Cars",
        kind3 : "Drama", img : "images/folder (11).jpg", story : "Brain :",
        summary : `It takes about cars and how gangs in USA makes Money with car racing,
        but when the cups put a spier in the gang he became with them and left the cups`} 
    
} else if (input== "Bad Boys") {
    film ={ rate : "10", time : 2000, perioud :"2h", kind1 : "Action", kind2 :"Comidy",
        kind3 : "Fun", img : "images/folder (2) (2).jpg", story : "Bad Boys :",
        summary : `It takes about two detectives in Miami who are frinds since thier high school
        .They dreamt together to become cups and they follow the criminlas`} 
    
} 
result.innerHTML = `
            <div class="interface">
                <img src='${film.img}' alt="">
                <div class="rating">
                    <div class="rates">
                        <h2>${input}</h2>
                        <span class="star">⭐${film.rate}</span>
                        <div class="small-info">
                            <span id="iq">PO-13</span> <span id="date">${film.time}</span> <span id="perioud">${film.perioud}</span>
                        </div>
                        <div class="kinds">
                            <span>${film.kind1}</span>
                            <span>${film.kind2}</span>
                            <span>${film.kind3}</span>
                        </div>
            
                    </div>
                </div>
            </div>
            <div class="desc one">
                <h3>${film.story}</h3>
                <p> ${film.summary} </p>
            </div>

    `
});

// let c = [];
// let d =0;
// let e =0;
// function sum(a,b) {
//     for(let i=0; i< a.length; i++){
//         if(a[i] > b[i]){
//             d++;
//         } else if(a[i] < b[i]) {
//             e++;
//         } 
//     }
//     return c.push(d,e);
// }
// let ar = sum([3,2,4,4] , [1,1,2,3]);
// console.log(c);

var addTwoNumbers = function(l1, l2) {
    if( l1[i] < l1[i] )
};
let l1 = [2,4,3];
let l2 = [5,6,4];
console.log(addTwoNumbers(l1,l2));
