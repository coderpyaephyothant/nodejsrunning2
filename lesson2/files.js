// By me

const fs = require('fs');
//reading files
// fs.readFile(
//   './doc/blg.txt', (err,data) => {
//     if(err){
//       console.log(err);
//     }
//     console.log(data.toString());
//   }
// );
//   console.log('this is last line in file system')

//writing files
// fs.writeFile(
//   './doc/blg.txt', 'hello pyae', ()=>{
//     console.log('file has written now. . . .');
//   }
// );
// fs.writeFile(
//   './doc/blg1.txt', 'hello this is new greeting!', ()=> {
//     consolg.log('file is created now. . . ');
//   }
// );

//making or creating directory *** check with fs.existSync() ***
// if(!fs.existsSync('./asset')){
  // fs.mkdir(
    // './asset', (err)=>{
      // if(err){
        // console.log(err);
      // };
      // console.log('directory is created!');
      //****
      // fs.writeFile('./asset/blg2.txt','hello third file',()=>{
      //   console.log('file also created');
      // });
      //****
    // }
  // );
// }else{
  // fs.rmdir(
    // './asset', (err)=>{
      // if(err){
        // console.log(err);
      // }
      // console.log('file has been deleted. . . .');
    // }
  // );
// }

//deleting files

if(fs.existsSync('./doc/forDelete.txt')){
  fs.unlink('./doc/forDelete.txt', (err)=>{
    if(err){
      console.log(err);
    }else{
      console.log('deleted file now. . . ');
    }
  });
}else {
  fs.writeFile(
    './doc/forDelete.txt', 
    'hey do you wanna delete me?',
    ()=>{
      console.log('created file now. . . ');
    }
  );
}











// By The net ninja
// const fs = require('fs');

// reading files
//fs.readFile('./docs/blog.txt', (err, data) => {
  //if (err) {
    //console.log(err);
  //}  
  //console.log(data.toString());
//});

// console.log('last line');

// writing files
//fs.writeFile('./docs/blog.txt', 'hello, world', () => {
 // console.log('file was written');
//});

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   console.log('file was written');
// });

// directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

// deleting files
// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted');
//   });
// }