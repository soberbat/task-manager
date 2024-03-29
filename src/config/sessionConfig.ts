const RedisStore = require('connect-redis').default
import { createClient } from 'redis'

const redisClient = createClient({
  password: '3JluMijpNIdRLNlgqVdyLE6HnhNClCTC',
  socket: {
    host: 'redis-11743.c300.eu-central-1-1.ec2.cloud.redislabs.com',
    port: 11743
  }
})

redisClient.connect().catch(console.error)

const redisStore = new RedisStore({
  client: redisClient
})

redisClient.on('connect', () => {
  console.log('Connected to Redis server')
})
export const sessionOptions = {
  store: redisStore,
  secret: 'mysecret',
  saveUninitialized: false,
  resave: false,
  cookie: {
    path: '/',
    domain: 'taskermanager.site',
    maxAge: 1000 * 60 * 30,
    sameSite: 'none',
    secure: true,
    httpOnly: true
  }
  // cookie: {
  //   path: '/',
  //   // domain: "auth-test.site",
  //   maxAge: 1000 * 60 * 60
  //   // sameSite: "none",
  //   // secure: true,
  //   // httpOnly: true,
  // }
}
