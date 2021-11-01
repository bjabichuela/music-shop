import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'sample',
        email: 'sample@mail.com',
        password:bcrypt.hashSync('123456', 10),
    },
    {
        name: 'notadmin',
        email: 'notadmin@mail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users