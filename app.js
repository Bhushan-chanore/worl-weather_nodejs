const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.port || 8000;

// for attaching the html in it
const static_path = path.join(__dirname , "/public");
app.use(express.static(static_path));


// for using the hbs i.e tmplet engine
const templates_path = path.join(__dirname , "/templates/views");
app.set('view engine' , 'hbs');
app.set("views" , templates_path);

// for adding the partial file so that we can use navbar or etc
const partials_path = path.join(__dirname , "/templates/partials");
hbs.registerPartials(partials_path);



// routing
app.get('/' , (req , res)=>{
    res.render("index");
})

app.get('/about' , (req , res)=>{
    res.render("about");
})

app.get('/weather' , (req , res)=>{
    res.render("weather");
})

app.get('*' , (req , res)=>{
    res.render("404error", {
      errorMsg:"OOPS !! Page not found"
    });
})

app.listen(port , ()=>{
    console.log("all ok");
})