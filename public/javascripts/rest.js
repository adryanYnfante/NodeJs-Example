const message = document.querySelector("#message");

fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    message.textContent = data.message;
})
.catch(err => {
    console.log(err); 
});

const restApi = async () => {
    const data = await fetch("http://localhost:3000/users/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    message.textContent = data.message;
  };
  
  restApi();