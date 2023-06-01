import Patient from "../models/Patient.js"
import User from "../models/User.js"

export const getAPatient =async (req,res,next)=>{
    try {
        const PatientById=await Patient.findById(req.params.id)
        res.status(200).json(PatientById)
    } catch (error) {
        next(error)
    }
}

export const getAllPatient =async (req,res,next)=>{
    try {
        const allPatients=await Patient.find()
        res.status(200).json(allPatients)
    } catch (err) {
        next(err)
    }
}
export const updatePatient= async (req,res,next)=>{
    try{
        const updatedPatient=await Patient.findByIdAndUpdate(req.params.id,{ $set: req.body },{new:true})
        res.status(200).json(updatedPatient)
    }
    catch(err){
        next(err)
    }
}
export const deletePatient=async (req,res,next)=>{
    
    const doctorId=req.params.doctorId;
    try {
        const deletedPatient=await Patient.findByIdAndDelete(doctorId)
        try {
            await User.findByIdAndUpdate(doctorId,{
                $pull:{patients:req.params.id}

            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(deletedPatient)
    } catch (error) {
        next(error)
    }
}

export const addPatient=async(req,res,next)=>{
    const doctorId=req.params.doctorId;
    const patient=new Patient(req.body)
    try {
        const newPatient=await patient.save()
        try {
            await User.findByIdAndUpdate(doctorId,{
                $push:{patients:newPatient._id}

            })
        } catch (error) {
            next(error)
            // res.status(404).json("error here!")
        }
        res.status(200).json(patient);
    } catch (error) {
        // res.status(404).json("error here!")
        next(error)
    }
}