import express from 'express'
import {getUsersData, createUser, deleteUser, updateUser, loginUser} from '../Controllers/usersDataController.js'

const router = express.Router()

router.get('/', getUsersData)

router.post('/register', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/login', loginUser)


export default router