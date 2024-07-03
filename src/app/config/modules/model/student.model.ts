import { model } from 'mongoose'
import { StudentSchema } from '../schema/student.schema'
import { IStudentInfo } from '../student/student.modules'

export const StudentModel = model<IStudentInfo>('Student', StudentSchema)
