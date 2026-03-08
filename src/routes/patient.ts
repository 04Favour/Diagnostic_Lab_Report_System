import express from 'express'
import patientRepository from "../repository/patient"; 

export const patientRouter = express.Router()


patientRouter.get("/", async (req, res, next) => {
  try {
    const patients = await patientRepository.getAllPatients();
    res.json({ patients });
  } catch (error) {
    next(error);
  }
});


patientRouter.get("/:id", async (req, res, next) => {
  try {
    const patient = await patientRepository.getPatientById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ patient });
  } catch (error) {
    next(error);
  }
});


patientRouter.post("/patients", async (req, res, next) => {
  try {
    const patient = await patientRepository.createPatient(req.body);
    res.status(201).json({ patient });
  } catch (error) {
    next(error);
  }
});


patientRouter.patch("/:id", async (req, res, next) => {
  try {
    const patient = await patientRepository.updatePatient(req.params.id, req.body);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ patient });
  } catch (error) {
    next(error);
  }
});


patientRouter.delete("/:id", async (req, res, next) => {
  try {
    const patient = await patientRepository.deletePatient(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default patientRouter;