import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) =>
  response.status(201).json({ message: 'Eae Brow' }),
)

export default routes
