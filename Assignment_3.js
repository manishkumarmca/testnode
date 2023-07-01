/* 	
	Assignments:

1. fs -- Check if a given directory exists or not

const checkDir=(dirName)=>{

    // return a boolean value based on whether the dirName exists or not

}




2. server creation :

GET request :

get request : /login ; login.html should get loaded

Form : Username, password ; Submit
*/

const fs=require("fs");
let dirName = 'log07062023';

const http=require("http");
const PORT=3003;
const hostname="localhost";

var app=http.createServer((request,response)=>{


	if(request.method =="GET")
	{
		if(request.url == "/")
		{
			response.end("This is the home page"); // static content string
		}
		if(request.url == "/login")
		{
			const rStream=fs.createReadStream("login.html");
			rStream.pipe(response);
		}
	}
});

app.listen(PORT,()=>{
	console.log(`The server is running at ${PORT}`);
})
