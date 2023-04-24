import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Darik Angeli',
    email: 'crpearce892@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Colby Pearce',
    email: 'cpearce22@turing.edu',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
