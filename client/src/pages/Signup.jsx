import { useState } from "react";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function signup(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 200) {
      alert("Signup failed");
    } else {
      alert("Signup successful");
    }
  }
  return (
    <form className="signup" onSubmit={signup}>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Signup</button>
    </form>
  );
}
