import { serverConfig } from '../config/serverConfig'
import { createServer } from './api/main'

const server = createServer(serverConfig)

server.start()
