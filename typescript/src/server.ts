import express from 'express'
import { createCourse } from './routes'

const app = express()
const port = 3333

app.get('/', createCourse)

app.listen(port, () => console.log(`Server is running on port ${port}`))