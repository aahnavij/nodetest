const homePage =(req,res)=>{
    res.render("home");
}
const getForm = (req,res)=>{
    res.render("form");
}
const display =(req,res)=>{
    res.render("display");
}
const output=(req,res)=>{
    res.render("output");
}

module.exports = {homePage,getForm,display,output}