const API_URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async() => {
    try {
    const response = await fetch(API_URL);
    const users = await response.json();
    console.log(users);
    renderUsers(users);
}
    catch (error) {
        console.log("Bir hata oluştu: ", error);
    }
}

const renderUsers = (users) => {
    const container = document.getElementById("userContainer");
    users.forEach((user) => {
        userContainer.innerHTML +=`
        <div class="col-lg-3">
         <div class="card container my-2" style="width: 18rem">
        <img class="card-img-top" src="./assets/400x400.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title bg-warning fw-bold">${user.name}</h5>
          <p class="card-text"><i class="fa-solid fa-user"></i> <span class="fw-bold">Username:</span> ${user.username}</p>
          <div class="card-text fw-bold">Detailed Info:</div>
          <p class="card-text"><i class="fa-solid fa-location-dot"></i><span class="fw-bold"> Address:</span> ${user.address.street}</p>
          <p class="card-text"><i class="fa-solid fa-phone"></i><span class="fw-bold"> Phone Number:</span> ${user.phone}</p>
          <p class="card-text"><i class="fa-solid fa-globe"></i> <span class="fw-bold"> Website:</span> ${user.website}</p>
          <p class="card-text"><i class="fa-solid fa-building"></i> <span class="fw-bold"> Company Name:</span> ${user.company.name}</p>
        </div>
      </div>
      </div>`
    });
}

const navigatePost = () => {
    const userIdInput = Number(prompt("User Id Girin: (1-10)"));
    if (userIdInput >= 1 && userIdInput <= 10) {
      window.location.href = `posts.html?userId=${userIdInput}`;
    } else {
      alert("Yanlış değer girdiniz. Lütfen tekrar deneyin.");
    }
  };

window.onload = () => {
    fetchUsers();
}