import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const generateCaptcha = () => {
    const digits = "0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += digits[Math.floor(Math.random() * 10)];
    }
    setCaptcha(captcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      setError("Captcha verification failed");
      return;
    }
    if (username.trim() === "" || password.trim() === "") {
      setError("Username and password are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccessMessage("Sign up successful!");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setInputCaptcha("");
    generateCaptcha();
  };

  return (
    <div className="App">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label>Captcha:</label>
        <div className="captcha-container">
          <div className="captcha">{captcha}</div>
          <input
            type="text"
            value={inputCaptcha}
            onChange={(e) => setInputCaptcha(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="button" onClick={generateCaptcha}>
          Refresh Captcha
        </button>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
