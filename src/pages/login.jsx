import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useStore();
  const navigate = useNavigate();

  const handleLogin = () => {
        console.log('Login button clicked');
    login();
    navigate("/checkout");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
