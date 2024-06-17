import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Profile() {
  let userName = "Terry";

  const navigate = useNavigate();

  async function logOutUser() {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }

  return (
    <div>
      <br />
      <h1>Profile</h1>
      <br />
      Hello {userName}! Welcome to your Profile
      <br />
      <br />
      <br />
      <button onClick={logOutUser}>Log Out</button>
    </div>
  );
}

export default Profile;
