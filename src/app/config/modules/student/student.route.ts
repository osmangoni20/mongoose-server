import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

// will call controller function
router.post('/create_student', StudentController.createStudent)
router.get('/', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)
export const StudentRoute = router
