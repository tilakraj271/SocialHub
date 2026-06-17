const postBtn = document.getElementById("postBtn");
const postText = document.getElementById("postText");
const imageInput = document.getElementById("imageInput");
const postsContainer = document.getElementById("postsContainer");

postBtn.addEventListener("click", () => {

    const text = postText.value.trim();

    if(text === ""){
        alert("Write something first 😅");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post-card");

    let imageHTML = "";

    if(imageInput.files.length > 0){
        const imageURL = URL.createObjectURL(imageInput.files[0]);

        imageHTML = `
        <img src="${imageURL}"
        style="
        width:100%;
        margin-top:15px;
        border-radius:15px;
        ">
        `;
    }

    post.innerHTML = `
        <div class="post-header">
            <h3>You</h3>
        </div>

        <p>${text}</p>

        ${imageHTML}

        <div class="post-actions">

            <button class="like-btn">
                ❤️ <span>0</span>
            </button>

            <button class="comment-btn">
                💬 Comment
            </button>

            <button class="share-btn">
                📤 Share
            </button>

        </div>
    `;

    postsContainer.prepend(post);

    postText.value = "";
    imageInput.value = "";

    attachEvents(post);
});

function attachEvents(post){

    const likeBtn = post.querySelector(".like-btn");
    const commentBtn = post.querySelector(".comment-btn");
    const shareBtn = post.querySelector(".share-btn");

    let likes = 0;

    likeBtn.addEventListener("click", () => {
        likes++;
        likeBtn.querySelector("span").innerText = likes;
    });

    commentBtn.addEventListener("click", () => {
        const comment = prompt("Enter your comment:");

        if(comment){
            alert("Comment Added: " + comment);
        }
    });

    shareBtn.addEventListener("click", () => {
        alert("Post Shared 🚀");
    });
}

document.querySelectorAll(".post-card").forEach(post => {
    attachEvents(post);
});
