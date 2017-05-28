const fs = require('fs');
const glob = require('glob');
const path = require('path');

glob(__dirname + '/renameThese/**.txt', (err, files) => {
  for (var i = 0; i < files.length; i++) {
    var dir = path.dirname(files[i]);
    var filename = path.basename('bagOfGummyCandies' + [i]  +
  '.txt');
    fs.rename(files[i], dir + '/' + filename);
  }
  console.log('All files in folder renamed successfully!');
});
