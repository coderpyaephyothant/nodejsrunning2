const fs = require('fs');

// By me
//*** for create Big file in doc folder with condition check */
//coded by me for creating folder or fild 
// if(!fs.existsSync('./doc')){
//   console.log('there is no doc folder.');
//   console.log('now i will create doc folder');
//   fs.mkdir(
//     './doc',
//     (err)=>{
//       if(err){
//         console.log(err);
//       }else{
//         console.log('created doc folder now. . . ')
//       }
//     }
//   );
// }else{
//   if(!fs.existsSync('./doc/bigFile.txt')){
//     console.log('there is no bigFile in the doc folder.');
//     fs.writeFile('./doc/bigFile.txt','big doc ',
//     ()=>{
//       console.log('file created in doc folder');
//     }
//     );
//   }else{
//     console.log('bigFile exists. and i will delete it now...');
//     fs.unlink(
//       './doc/bigFile.txt',
//       (err)=>{
//         if(err){
//           console.log(err);
//         }else{
//           console.log('Congratulation. . .bigFile has been deleted. . . ');
//         }
//       }
//     );
//   }
// }

//by me

//reading streams. . . . . write streams Large Data

const readStreams = fs.createReadStream(
  './doc/bigFile.txt',
  {encoding:'utf8'}
);

// const writeStream = fs.createWriteStream(
//   './doc/bigFile2.txt'
// );

// readStreams.on(
//   'data',
//   (chunk)=>{
//     console.log('------N E W C H U N K-------');
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
//   }
// );


//reading streams . . . .write streams example with pipe

//piping

const writeStream = fs.createWriteStream(
  './doc/bigFile3.txt'
);

// readStreams.pipe(writeStream);














// By The net ninja

// const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  // writeStream.write('\nNEW CHUNK:\n');
  // writeStream.write(chunk);
// });

// piping
// readStream.pipe(writeStream);