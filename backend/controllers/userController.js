// Register new User
// POST /api/users
// Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

// Authenticate User
// POST /api/users/login
// Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User' })
}

// Get user data
// POST /api/users/me
// Public
const getMe = (req, res) => {
    res.json({ message: 'User Data' })
}


module.exports = {
    registerUser,
    loginUser,
    getMe,
}