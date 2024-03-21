// import swaggerAutogen from 'swagger-autogen'
const swaggerAutogen = require("swagger-autogen")({openapi:"3.0.0"})

const doc = {
    info: {
        title: 'API training',
        description: "Description"
    },
    components:{
        schemas:{
            studentSchema:{
                $firstname:"kale ",
                $lastname:"don",
                age:30
            }
        },
        examples:{
            studentExample:{
                value:{
                    firstname:"kale ",
                lastname:"don",
                age:30
                },
            summary:'studentdata'}
        },
        
        
    },
    host: 'localhost:3000'
}

const docs = {
    info: {
        title: 'API training',
        description: "Description"
    },
    components:{
        schemas:{
            teacherSchema:{
                $firstname:"kale ",
                $lastname:"don",
                age:30
            }
        },
        examples:{
            teacherExample:{
                value:{
                    firstname:"kale ",
                lastname:"don",
                age:30
                },
            summary:'teacherdata'}
        },
        
        
    },
    host: 'localhost:3000'
}
const outputfile = './swagger-outputfile.json'
const outputfiles = './swagger-outputfiles.json'
const routes = ['./routes/student.routes.ts','./routes/teacher.routes']


swaggerAutogen(outputfile, routes, doc)
swaggerAutogen(outputfile1,routes,docs)