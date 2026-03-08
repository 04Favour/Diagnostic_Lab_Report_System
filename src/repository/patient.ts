import Patient, { IPatient } from "../model/patient";




class PatientRepository {
  async getAllPatients(): Promise<IPatient[]> {
    return await Patient.find().sort({ createdAt: -1 });
  }

  async getPatientById(id: string): Promise<IPatient | null> {
    return await Patient.findById(id);
  }

  async createPatient(patientData: Partial<IPatient>): Promise<IPatient> {
    const patient = new Patient(patientData);
    await patient.save();
    return patient;
  }

  async updatePatient(
    id: string,
    patientData: Partial<IPatient>,
  ): Promise<IPatient | null> {
    return await Patient.findByIdAndUpdate(id, patientData, {
      new: true,
      runValidators: true,
    });
  }

  async deletePatient(id: string): Promise<IPatient | null> {
    return await Patient.findByIdAndDelete(id);
  }
}

export default new PatientRepository();
