import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:4000/login",
  //       {
  //         ...inputValue,
  //       },
  //       { withCredentials: true }
  //     );
  //     console.log(data);
  //     const { success, message } = data;
  //     if (success) {
  //       handleSuccess(message);
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 1000);
  //     } else {
  //       handleError(message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setInputValue({
  //     ...inputValue,
  //     email: "",
  //     password: "",
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        console.log("Navigating to dashboard...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred. Please try again.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="input_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="submit_button">
          Submit
        </button>
        <span className="login_link">
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

// Reuse the same CSS from the signup page
const styles = `
.form_container {
  background: url('/mnt/data/image.png') no-repeat center center fixed; 
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.input_group {
  margin-bottom: 15px;
}

.input_group label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

.input_group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit_button {
  background-color: #005ca9;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
}

.submit_button:hover {
  background-color: #003f7d;
}

.login_link {
  display: block;
  margin-top: 10px;
  text-align: center;
}

.login_link a {
  color: #005ca9;
  text-decoration: none;
}

.login_link a:hover {
  text-decoration: underline;
}
`;

// Inject CSS into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);