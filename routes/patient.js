import express from 'express'
import { addPatient, deletePatient, getAPatient, getAllPatient, updatePatient } from '../controllers/patient.js'

const router=express.Router()

//get
router.get("/:doctorId/:id",getAPatient)
router.get("/:doctorId",getAllPatient)
router.post("/:doctorId",addPatient)
router.put("/:doctorId/:id",updatePatient)
router.delete("/:doctorId/:id",deletePatient)

export default router 