import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body
    console.log(student)
    // Will Call service function to send this data
    const result = await StudentServices.createStudentIntoDB(student)
    // send response

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB()

    res.status(200).json({
      success: true,
      message: 'Student Info retrieve from DB',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDb(studentId)

    res.status(200).json({
      status: true,
      message: ' Students is retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
