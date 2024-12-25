const fetchUserPosts = async () => {
    try {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const userDetailData = await response.json();
  console.log(userDetailData);
  displayUserDetails(userDetailData);
}
 catch (error) {
    console.log("Bir hata oluştu: ", error);
 }
};

const displayUserDetails = (userDetail) => {
    const container = document.getElementById("postContainer");
    userDetail.forEach((user) => {
        postContainer.innerHTML +=`
        <div class="col-lg-3">
         <div class="card container my-2" style="width: 18rem">
        <img class="card-img-top" src="./assets/400x400.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title fw-bold">${user.id}</h5>
          <p class="card-text bg-light">${user.title}</p>
          <p class="card-text">${user.body}</p>
        </div>
      </div>
      </div>`
    });
}

document.getElementById("inputForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const userIdInput = Number(document.getElementById("userId").value);
  if (userIdInput >= 1 && userIdInput <=10) {
    window.location.href = `posts.html?userId=${userIdInput}`
  } else {
    alert("Yanlış değer girdiniz. Lütfen tekrar deneyin.");
  }

});

onsubmit = (event) => {};

window.onload = () => {
    fetchUserPosts();
}