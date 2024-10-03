const userModel = require("../models/userModel");
const validator = require("validator");
const bcrypt = require('bcrypt');
const token = require('jsonwebtoken');

const createToken = (id) => {
    return token.sign({ id }, process.env.JWT_SECRET_KEY);
}

const userLogin = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email});
        
        if(!user) return res.json({ success: false, message: "user doesn't exist" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if(isMatch){
            const authToken = createToken(user._id);
            return res.json({ success: true, authToken, message: 'you have logged in successfully' });
        } 

        return res.json({ success:false, message: "email or password wrong please try again with correct credintials" });
        
        } catch (error) {
            console.error(err);
            res.json({ success:false, message: err.message });            
        }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await userModel.findOne({email});

        if(exist) return res.json({ success: false, message: "user already exist" });
        if(!validator.isEmail(email)) return res.json({ success: false, message: "email or password are incorrect" })
        if(password.length < 8) return res.json({ success: false, message: "please enter strong password" });
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        const authToken = createToken(newUser._id);
        res.json({ success: true, message: "user registered successfully", authToken });
        
    } catch (err) {
        console.error(err);
        res.json({ success:false, message: err.message });
    }
}

const adminLogin = async (req, res) => {
    try {
        const { email, password} = req.body;

        if(email === process.env.ADMIN_ID && password === process.env.ADMIN_PWORD){
            const adminToken = token.sign({id: email}, process.env.JWT_SECRET_KEY);
            return res.json({ message:true, adminToken });
        }

        if(!email || !password) return res.json({ success:false, message: 'Input fields are required' })

        return res.json( {success:false, message: "Invalid Credintials" });
    } catch (err) {
        console.error(err);
        res.json({ success:false, message: err.message });
    }
}

module.exports = {
    userLogin,
    registerUser,
    adminLogin
}