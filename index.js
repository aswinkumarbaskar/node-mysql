const mysql=require("mysql")
var connection;
var DbConnect=function ash(x,y)
{

var object={ host:"localhost",user:"root",password:x,database:y};

connection=mysql.createConnection(object);

 connection.connect((err)=>
 {
 	if(err) throw err;
 	console.log("DB Connected")
});

}

var query=(query,output)=>{
	connection.query(query,(err,data)=>{
		if(err)throw err;
		output(data);
		//console.log(output);
	});
}

var output=(hello)=>{
	console.log(hello);
}
module.exports={DbConnect,query,output};