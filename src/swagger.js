// import swaggerAutogen from 'swagger-autogen'
const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        title: 'API training',
        description: "Description"
    },
    host: 'localhost:3000'
}
const outputfile = './swagger-outputfile.json'
const routes = ['./routes/student.routes.ts']


swaggerAutogen(outputfile, routes, doc)