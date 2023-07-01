/*
	Assignment : 
		1. Server -- http module
			4 endpoints
			get, post, put, delete to /books
		In a seprate file ; books.json: 10 books details
		
		get  -- return the books in books.json
		post -- add a anew book after validation to file books.json
		put/delete -- respective task;
		
*/

const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostname ="localhost"

var app = http.createServer((request, response) => {
	if (request.method == "PUT") {
		if (request.url == "/book") {
			var fullData = "";
			request.on("data",(chuck) => {
				fullData += chunk.toString();
			})
			request.om("end", () => {
				var bookToBeUpdated = JSON.parse(fullData);
				console.log(bookToBeUpdated);
				
				var obj;
				fs.readFile('books.json, 'utf8', function (err, data) {
					if (err) throw err;
					obj pos = obj.findIndex(item => item.bookId == bookToBeUpdated.bookId);
					console.log(pos);
					if (pos >= 0)
					{
						obj[pos].bookName=bookToBeUpdated.bookName;
						obj[pos].bookAuthorName=bookToBeUpdated.bookAuthorName;
						obj[pos].bookPrize=bookToBeUpdated.bookPrize;
						
						fs.writeFile("books.json", JSON.stringify(obj, null, 2)
							if(err)
							{
								console.log(`Error during the write operation: ${err}`);
							}
							else
							{
								console.log("write into the files is succeessfull")
								response.end(JSON.stringify(obj));
							{
						})
					}
					else
					{
						response.end("The book ID does not exist");
					}
				});
			})
			request.on("error", (err) => {
				response.statusCode = 401;
				response.end(`Error : ${err}`);
			})
		}
		else
		{
			response.end("PUT request is not allowed for this url")
		}
	}
	else if (request.method == "POST")
	{
		if ( request.url == "/book")
		{
			var fullData = "";
			request.on("data", (chunk) => (
				fullData += chunk.toString();
			})
			request.on("end, () => {
				var boolToBeInserted);
				console.log(boolToBeInserted);
				var obj;
				fs.readFile('books.json', 'utf8', function (err, data) {
				if (err) throw err;
				obj = JSON.parse(data);
				var pos = obj.findIndex(item => item.bookId == boolToBeInserted.bookId);
				console.log(pos);
				if(pos >= 0)
				{ 
					response.end("The Book ID already exists. Insertion could not be done");
				}
				else
				{
					obj.push(boolToBeInserted);
				}
				fs.writeFile("books.json", JSON.stringify(obj, null, 2), (err) => {
				if (err) 
				{
					console.log(`Error during thr write operation : ${err}`);
				}
				else
				{
					console.log("Write into the file is successfull")
					response.end(JSON.stringify(obj));
				}
			})
			
		}
	});
	})
	request.on("error", (err) => {
		respinse.statusCode = 401;
		response.end(`Error : $(err)` );
		})
	}
	else{
		response.end("POST requestnot allowed for this url")
	}
	else if ( request.method == "DELETE") {
		if (request.url ="/book")	{
			var fullData = "";
			request.on("data", (chunk) => {
				fullData += chunk.toString();
			})
			request.on("end", () => {
				var empToBeDeleted =JSON.parse(fullData);
				console.log(empToBeDeleted);
				
				var objl
				fs.readFile('books.json', 'utf8', function (err, data) {
				obj = JSON.parse(data);
				var pos = obj.findIndex(item => item.bookId == empToBeDeleted.bookId);
				console.log(pos);
				if (pos >= 0) {
					obj.splice(pos,1);
					obj.sort(function(a,b) {
						return a.bookId - b.bookId;
					});
					fs.writeFile("books.json", JSON.stringify(obj, null, 2), (err) => {
						if(err) {
							console.log(`Error during the write operation: ${err}`);
						}
						else{
							console.log("Write into the file is successfull");
							response.end(JSON.stringify(obj));
						}
					})
				}
				else{
					response.end("Book id does not exist.");
				}
			});
		})
	}
	else {
		response.end("Delete request is not allowed for this url ")
		}
	}
	else if( request.method == "GET") {
		if (request.url == "/book") {
		rStream.pipe(response);
	}
	else if ( request.url == "/") {
		console.log('HAHA')
		response.end("Welcome to home page");
		}
	}
	else{
		response.write("Hello");
		response.write("Request received. ");
		response.end("Bye");
	}
});

app.listen(POST, () => {
	console.log(`server is runninf at ${PORT}`);
})
})