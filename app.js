const express = require('express');
const app = express();
// const connection = require('./databse');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); 
var urlencodeParser = bodyParser.urlencoded({extended: false});
const port = process.env.PORT || 8003;
app.set("view engine","ejs");
app.get("/form",(req,res)=>{
    res.render("form");
})
app.get("/display",(req,res)=>{
    res.render("display");
});
app.get("/output",(req,res)=>{
    res.render("output");
});
app.get("/course-details",(req,res)=>{
    res.render("course-details");
});
// app.post('/course-details',urlencodeParser,(req,res)=>{
//     // let v1 = String(req.body.v1);
//     var n = req.body.st_name;
//     console.log(n);
//     var sql6="SELECT students.student_id, students.student_name, students.student_phone, students.student_address, student_department.department_id, department.department_name FROM students JOIN student_department ON students.student_id=student_department.student_id JOIN department ON department.department_id = student_department.department_id where students.student_name="+mysql.escape(n);
//     connection.query(sql6,function(err,data){
//       console.log(data);
//         if(err) throw err;
       
//        res.render('output',{userData:data})
//     });
    
//    });

      
  
    
  
  
   
        // let v1 = String(req.body.v1);
       
        
    // res.send('id: ' + req.params.id);


// databse code here
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_practise'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected ');
//   connection.query(`select * from department`,function(err,result){
//     console.log(result);
//   });

});
// app.post('/course-details:name', function(req, res) {
//     var results = req.query.name;
//     console.log(results);
//     var sql7="SELECT * FROM students where student_name="+results;
//     connection.query(sql7,function(err,datass){
//       console.log(datass);
//         if(err) throw err;
       
//        res.render('course-details',{userDatas:datass})
//     });
    
//    });
       
app.post('/output',urlencodeParser,(req,res)=>{
    // let v1 = String(req.body.v1);
    var n = req.body.st_name;
    // console.log(n);
    var sql6="SELECT students.student_id, students.student_name, GROUP_CONCAT(course.course_name SEPARATOR ',') AS records, students.student_phone, students.student_address, student_department.department_id, department.department_name FROM students JOIN student_department ON students.student_id=student_department.student_id JOIN department ON department.department_id = student_department.department_id JOIN student_course ON student_course.student_id = students.student_id JOIN course ON student_course.course_id = course.course_id GROUP BY students.student_id HAVING students.student_name="+mysql.escape(n);
    
    connection.query(sql6,function(err,data){
      console.log(data);
        if(err) throw err;
       
       res.render('output',{userData:data})
    });
    
   });
app.post("/form",urlencodeParser,(req,res)=>{
    console.log(req.body);
    res.render('form',{qs:req.query});
    var f_name = req.body.fname;
    var l_name = req.body.lname;
    var add = req.body.add;
    var course = req.body.agent_id;
    var course_id_form = 0;
    var dept = req.body.dept;
    if(course=="maths"){
course_id_form = 1;
    }
    else if(course=="english"){
        course_id_form = 2;
    }
    else if(course=="electronics"){
        course_id_form = 3;
    }
    else if(course=="physics"){
        course_id_form = 4;
    }


    // console.log(course);
    var sql = `INSERT INTO students (student_name, student_phone, student_address) VALUES ("${f_name}", "${l_name}", "${add}")`;
    connection.query(sql);
    var sql3 = 'SELECT student_id FROM students WHERE student_name = ' + mysql.escape(f_name)+'&& student_phone= '+mysql.escape(l_name);
    connection.query(sql3, (err, data)=>{
        console.log(data);
        studentId = data[0].student_id;
    var sql2 =`INSERT INTO student_course (student_id, course_id) VALUES ("${studentId}", "${course_id_form}")`;
    connection.query(sql2);
    console.log(sql2);
      console.log('record inserted');
      var sql4 = `SELECT department_id from department where department_name = `+ mysql.escape(dept);
connection.query(sql4,(err2,data2)=>{
    console.log(data2);
    deptId = data2[0].department_id;
    console.log(deptId);
  var sql5 = `INSERT INTO student_department (student_id, department_id) VALUES ("${studentId}", "${deptId}")`;
  console.log(sql5);
  connection.query(sql5);
});

    });
});

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
});

