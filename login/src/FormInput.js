import react ,{useState}from 'react';
//import ContactInput from './ContactInput';
//import PasswordInput from './PasswordInput';
const FormInput = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      // Here you can add a redirect to the first component using react-router or window.location
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <PasswordInput
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <ContactInput setEmail={setEmail} setMobile={setMobile} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  export default FormInput;