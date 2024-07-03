import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoute } from './app/config/modules/student/student.route'
export const app: Application = express()
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoute)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
