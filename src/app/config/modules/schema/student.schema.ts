import { Schema } from 'mongoose'
import {
  Guardian,
  IStudentInfo,
  UserName,
  localGuardian,
} from '../student/student.modules'

const UserSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherNumber: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherNumber: { type: String },
})
const LocalGuardianSchema = new Schema<localGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNumber: { type: String },
})
export const StudentSchema = new Schema<IStudentInfo>({
  id: { type: String },
  name: UserSchema,
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  gender: ['male', 'female'],
  contactNumber: { type: String },
  emergencyNumber: { type: String },
  bloodGroupe: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+'],
  permanentAddress: { type: String },
  presentAddress: { type: String },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  isActive: { type: String },
  studentAvatar: { type: String },
})
