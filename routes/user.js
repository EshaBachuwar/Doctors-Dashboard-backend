import express from 'express'
import {  getAUser,getAllUsers,updateUser } from '../controllers/user.js'

const router=express.Router()

//get
router.get("/:id",getAUser)
router.get("/",getAllUsers)
router.get("/:id",updateUser)

export default router 