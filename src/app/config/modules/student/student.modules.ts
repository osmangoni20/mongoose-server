export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherNumber: string
  motherName: string
  motherOccupation: string
  motherNumber: string
}
export type localGuardian = {
  name: string
  occupation: string
  contactNumber: string
}
export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type IStudentInfo = {
  id: string
  name: UserName
  email: string
  contactNumber: string
  emergencyNumber: string
  gender: 'male' | 'female'
  dateOfBirth?: string
  bloodGroupe?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+'
  permanentAddress: string
  presentAddress: string
  guardian: Guardian
  localGuardian: localGuardian
  isActive: 'active' | 'blocked'
  studentAvatar: string
}
