function login(){
    window.location.href="home.html";
}

function signup(){
    window.location.href="index.html";
}

let likes = 0;

const btn = document.querySelector(".likeBtn");

if(btn){

btn.addEventListener("click",()=>{

likes++;

document.getElementById("likes")
.innerText =
likes + " Likes";

});

}