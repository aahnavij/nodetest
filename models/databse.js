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

module.exports.connection=connection;
