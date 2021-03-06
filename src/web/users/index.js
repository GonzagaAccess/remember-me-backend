import create from './create.js'
import list from './list.js'
import remember from './remember.js'
import { UserService } from '../../domain/user/userService.js'
import { UserRepository } from '../../domain/user/userRepository.js'

export default async (fastify) => {
  registerDependencies(fastify)
  fastify.register(create)
  fastify.register(list)
  fastify.register(remember)
}

function registerDependencies (fastify) {
  const userService = new UserService(new UserRepository(fastify.knex, 'users'))
  fastify.decorate('userService', userService)
}
