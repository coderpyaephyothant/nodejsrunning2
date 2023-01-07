const express = require('express');

//express app
const app = express();

//register view-engine




//listen for requests
// app.listen(3000)
// app.get('/', (req,res) => {
//     res.send('<p>Home Page by Node Js</p>');
// });
// app.get('/about', (req,res) => {
//     res.send('<p>About Page by Node Js</p>');
// });

//listen for requests
app.listen(3000)
app.get('/', (req,res)=>{
    res.sendFile('./lesson2/views/index.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    res.sendFile('./lesson2/views/about.html',{root:__dirname});
});
//redirect ***
app.get(
    '/about-us', (req,res)=>{
        res.redirect('/about');
    }
);
//404Page * * *  use()method fires every single request . *** it should be place at the bottom
// app.use((req,res)=>{
//     res.sendFile('./lesson2/views/404.html',{root:__dirname});
// });
app.use((req,res)=>{
    res.status(404).sendFile('./lesson2/views/404.html',{root:__dirname});
});
