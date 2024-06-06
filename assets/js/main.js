async function Login(email, password) {
  const loginUrl = "https://reqres.in/api/login";
  const loginData = {
    email: email,
    password: password,
  };

  try {
    let loginRes = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!loginRes.ok) {
      let errorMessage = await loginRes.json();
      alert(`Error: ${errorMessage.error}`);

      return false;
    }

    let token = await loginRes.json();
    localStorage.setItem("token", token.token);
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return false;
  }
}

document.getElementById("log").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;

  let isLogin = await Login(email, password);

  if (isLogin) {
    window.location.href = "./login_successfully.html";
  }
});
