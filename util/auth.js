import axios from "axios";

const API_KEY = "AIzaSyAsJegV_gp855DPKeF4jwM3tm0voG3eMhM";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
