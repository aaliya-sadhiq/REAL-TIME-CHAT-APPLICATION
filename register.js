import React, { useState } from "react";

function Register({ setUser }) {
  const [name, setName] = useState("");

  const joinChat = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name);
    }
  };

  return (
    <div className="register-page">
      <form className="register-card" onSubmit={joinChat}>
        <h2>🚀 Welcome to LiveChat</h2>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Join Chat</button>
      </form>
    </div>
  );
}

export default Register;