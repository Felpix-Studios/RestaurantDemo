const express=require('express');
const path=require('path');
const app=express();

//PORT NUMBER OR ENV PORT
const PORT=process.env.PORT || 5000;

//Set static folder instead of routes - use for static website w/o template engine
//Using express.static middleware
app.use(express.static(path.join(__dirname,"client")));

app.listen(PORT, ()=>console.log(`Server on ${PORT}`));