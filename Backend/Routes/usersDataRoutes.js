import express from 'express'
import {getUsersData, createUser, deleteUser} from '../Controllers/usersDataController.js'

const router = express.Router()

router.get('/', getUsersData)

router.post('/', createUser)

router.delete('/:id', deleteUser)

export default router