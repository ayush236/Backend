const HTML_template=(text,message)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>thanks giving</title>
    <style>
        p{
            background-color: blue;
            color: white;
            align-items: center;
            width: fit-content;
            font-size: 50px;
        }
    </style>
</head>
<body>
    <span><p>Thank you my friend</p></span>
    <h1>${message}</h1>
    <p>${text}</P>
</body>
</html> `
}
export default HTML_template