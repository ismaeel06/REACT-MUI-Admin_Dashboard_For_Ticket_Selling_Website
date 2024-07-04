import asyncHandler from 'express-async-handler'

const getUsersData = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Users Data'})
})
const createUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Create User'})
})
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete User with id ${req.params.id}`})
})
export { getUsersData, createUser, deleteUser }