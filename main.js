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

      return;
    }

    let token = await loginRes.json();
    localStorage.setItem("token", token.token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
