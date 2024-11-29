

const User = require('../model/UserModel'); // Ensure correct path to User model
const bcrypt = require('bcryptjs'); // Ensure bcrypt is imported
const { createSecretToken } = require('../util/SecretToken'); // Ensure correct path to token utility

// Signup function (if needed)
module.exports.Signup = async (req, res) => {
    // Implement Signup logic here if needed
    res.send('Signup logic is not implemented yet');
};

// Login function
// module.exports.Login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.json({ message: 'All fields are required' });
//         }
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.json({ message: 'Incorrect password or email' });
//         }
//         const auth = await bcrypt.compare(password, user.password);
//         if (!auth) {
//             return res.json({ message: 'Incorrect password or email' });
//         }
//         const token = createSecretToken(user._id);
//         res.cookie("token", token, {
//             withCredentials: true,
//             httpOnly: false,
//         });
//         res.status(201).json({ message: "User logged in successfully", success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required', success: false });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Incorrect email or password', success: false });
      }
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.status(401).json({ message: 'Incorrect email or password', success: false });
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.status(200).json({ message: "User logged in successfully", success: true });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: 'Internal server error', success: false });
    }
  };