import { Router } from 'express'
import { ctrlGetUserInfoByToken, ctrlLoginUser, ctrlRegisterUser } from '../controllers/auth.controller.js'
import { createUserSchema, loginUserSchema } from '../models/schemas/user.schema.js'
import { validator } from '../middlewares/validator.js'

const authRouter = Router()

authRouter.get('/user', ctrlGetUserInfoByToken)

authRouter.post('/login', loginUserSchema, validator, ctrlLoginUser)

authRouter.post('/register', createUserSchema, validator, ctrlRegisterUser)

export { authRouter }