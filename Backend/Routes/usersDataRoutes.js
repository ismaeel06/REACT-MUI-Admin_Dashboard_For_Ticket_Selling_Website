import express from 'express'
import {getUsersData, createUser, deleteUser, updateUser, loginUser} from '../Controllers/usersDataController.js'
import {protect} from '../Middleware/authmiddleware.js'

const router = express.Router()

router.post('/register', createUser)

router.post('/login', loginUser)

router.get('/', protect, getUsersData)

router.put('/:id',protect, updateUser)

router.delete('/:id',protect, deleteUser)




export default router