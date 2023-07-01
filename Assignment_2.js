/*
	Assignments :
		1. Copy the contents of a file into another file: fs.copyFile
		2. Create a new directory : log07062023; Create a new file with the name dailyLog.log and add the content : "07/06/2023"
*/

	const fs = require('fs');

	const path = require('path');
	fs.mkdir(' log07062023', (err) => {
		if (err) {
			return console.error(err);
		}
		else{
			console.log('Directory has been created successfully');
			fs.write('log07062023/dailyLog.log', '07/06/2023', function(err) {
				if (err) console.error(err);
				else console.log('File has been created successfully');
			});
		}
	});
			