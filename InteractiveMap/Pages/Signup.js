import { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  console.log(username, email, password);

  async function userSubmit(e) {
    e.preventDefault();
    navigate("/profile");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username,
        email
      });
    } catch (error) {
      console.error("Error in Registration: ", error.message);
    }
  }

  return (
    <div>
      <br />
      <h1>Sign Up Page</h1>

      <form onSubmit={userSubmit}>
        <label>Username</label>
        <br />
        <input
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br />
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
    </div>
  );
}

export default Signup;
