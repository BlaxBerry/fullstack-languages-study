import { Request, Response, NextFunction } from 'express'
import cors from 'cors'

const customCORS = (req: Request, res: Response, next: NextFunction) => {
  cors()
  next()
}

export default customCORS
