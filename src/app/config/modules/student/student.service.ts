import { StudentModel } from '../model/student.model'
import { IStudentInfo } from './student.modules'

const createStudentIntoDB = async (student: IStudentInfo) => {
  const result = await StudentModel.create(student)
  return result
}
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
  return result
}
const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id: id })
  return result
}
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDb,
}
