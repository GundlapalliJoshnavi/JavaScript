import React, { useState } from "react";


const PasswordInput = ({ setPassword, setConfirmPassword }) => {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
};