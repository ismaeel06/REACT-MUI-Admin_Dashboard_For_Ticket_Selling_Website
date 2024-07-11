import asyncHandler from 'express-async-handler'
import User from '../Model/usersDataModel.js'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'


const getUsersData = asyncHandler(async (req, res) => {
    
    const users = await User.find()
    res.status(200).json({users: users})
})

const createUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, address, city, state, email, password, isAdmin, isOrganizer, created } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
        res.status(400).json('User already exists');
    }
        const user = await User.create({
            firstName,
            lastName,
            address,
            city,
            state,
            email,
            password: hashedPassword, // Use the hashed password
            isAdmin,
            isOrganizer,
            created,
        });

    const newUser = await user.save();
    if (newUser){
        res.status(200).json({
            message: 'User created',
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            address: newUser.address,
            city: newUser.city,
            state: newUser.state,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            isOrganizer: newUser.isOrganizer,
            
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    } else {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.address = req.body.address || user.address;
        user.city = req.body.city || user.city;
        user.state = req.body.state || user.state;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10); // Hash the new password
        }
        if ('isOrganizer' in req.body) {
            user.isOrganizer = req.body.isOrganizer;
        }
        // Check if isAdmin is explicitly provided
        if ('isAdmin' in req.body) {
            user.isAdmin = req.body.isAdmin;
        }

        const updatedUser = await user.save();
        res.status(200).json({user: updatedUser});
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error('User not found')
    }   

    else{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'User removed with id: ' + req.params.id})
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if(user && (await user.matchPassword(password))){
        const token = generateToken(user._id)
        res.status(200).json({
            message: 'User logged in successfully',
            token: token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                city: user.city,
                state: user.state,
                email: user.email,
                isAdmin: user.isAdmin,
                isOrganizer: user.isOrganizer,
            }

        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//Generate token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '5h'
    })
}

export { getUsersData, createUser, deleteUser, updateUser, loginUser }