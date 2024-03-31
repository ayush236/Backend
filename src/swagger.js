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
            },
            teacherSchema:{
                $firstname:"salman ",
                $lastname:"khan",
                age:55
            }
        },
        examples:{
            studentExample:{
                value:{
                    firstname:"kale ",
                lastname:"don",
                age:30
                },
            summary:'studentdata'},
            teacherExample:{
                value:{
                    firstname:"salman ",
                lastname:"khan",
                age:55
                },
            summary:'teacherdata'}
        }
        
    },
    host: 'localhost:3000'
}


const outputfile = './swagger-outputfile.json'

const routes = ['./routes/student.routes.ts','./routes/teacher.routes.ts']



swaggerAutogen(outputfile, routes, doc,)

