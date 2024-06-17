import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    navigate("/profile");
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(email, password);
      const user = userCredential.user;
    } catch (error) {
      console.error("Error signing user in: ", error);
    }
  }

  return (
    <div>
      <br />
      <h1>Login in Page</h1>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
      <p>Don't alreday have an account?</p>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Login;
