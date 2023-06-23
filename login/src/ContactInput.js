import react from 'react';
const ContactInput = ({ setEmail, setMobile }) => {
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
    );
  };