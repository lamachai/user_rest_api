import app from "./src/app.js"

const port = 5051

//listen
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
});