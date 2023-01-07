// http module and create server


const httpModule = require('http');
const fs = require('fs');
const _ = require('lodash');

// httpModule.createServer();
// const server = httpModule.createServer();
const server = httpModule.createServer(
    (req,res)=>{
        // console.log('request made');
        // console.log(req);

        // console.log(req.url, req.method);  -> *** it is not require since i installed lodash ***

        //lodash
        const num = _.random(0,20);
        // console.log(num);

        // const greet = () => {
        //     console.log('hey. . .')
        // };

        // lodash _.once(); run only one time even i call greet() many times.. . . . .  .
        const greet = _.once(() => {
            console.log('hey. . .')
        }) ;

        greet();
        greet();
        greet();
        greet();



        let path = './views/';
        switch(req.url){
            case '/' :
                path += 'index.html';
                // res.statusCode = 200;
                break;
            case '/about' :
                path += 'about.html';
                // res.statusCode = 200;
                break;
            case '/about-me':
                res.statusCode = 301;     //important to insert code before redirect with ***   res.setHeader('Location', '/') ***
                console.log(req.url)
                res.setHeader('Location','/about');
                res.end();
                break;
                case '/aboutMe':
                res.statusCode = 301;
                res.setHeader('Location','/about');
                res.end();
                break;
            default:
                path += '404.html';
                res.statusCode = 404;
                break;
        }

        //set header content type
        // res.setHeader('Content-Type', 'text/plain');
        // res.write('Hello Pyae, I am a greeting text from server.');
        // res.write('Hello again, I am a greeting text from server.');
        // res.end();

        //html
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<head><link rel="stylesheet" href="#"></head>');
        // res.write('<p>Hello Pyae, I am a greeting text from Node Js Server</p>');
        // res.end();

        //send html file
            fs.readFile(path, (err,data)=>{
                if(err){
                    console.log(err);
                    res.end();
                } else {
                    // res.write(data);
                    // console.log('data',data.toString());
                    res.end(data);
                }
            });
    }
);
//listen for requests
server.listen(3000,'localhost', ()=>{
    console.log('listening for requests on port 3000');
})



//to create folder and file 
// let checkAndCreateFunction = ()=> {
//     if(!fs.existsSync('./views/index.html')){
//         console.log('there is no index.html file in views folder..so i will create index.html file in it.')
//         fs.writeFile('./views/index.html', 'index file', ()=>{
//             console.log('index.html file is also created successfully.');
//         })
//     }else{
//         console.log('index.html file is already created.');
//     }
// };
// const fs = require('fs')
// if(!fs.existsSync('./views')){
//   console.log('there is no views folder.');
//   console.log('now i will create views folder');
//   fs.mkdir(
//     './views',
//     (err)=>{
//       if(err){
//         console.log(err);
//       }else{
//         console.log('created views folder now. . . ')
//       }
//     }
//   );
//     checkAndCreateFunction();
// }else{
//     checkAndCreateFunction();
// }


