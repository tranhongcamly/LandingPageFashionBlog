const likeBtn = document.querySelectorAll(".like");

likeBtn.forEach((btn) =>{
    btn.addEventListener("click", function(){
        btn.children[0].classList.replace("fa-thumbs-up", "fa-check")
    });
});

const comments = document.querySelectorAll(".comment");
const replites = document.querySelectorAll(".replites");

replites.forEach((btn, index) =>{
    btn.addEventListener("click", function(){
        comments[index].classList.toggle("d-none");
            
    });
});