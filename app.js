const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

//register view-engine
// ejs does not need sendFile method and routes 
app.set('view engine', 'ejs');



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

//static and public files
app.use(express.static('public'))

// morgan middleware ** dev and tiny **
app.use(morgan('dev'));
// app.use(morgan('tiny'));

app.use((req,res,next)=>{
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});



app.get('/', (req,res)=>{
    // res.sendFile('./lesson2/views/index.html',{root:__dirname});
    const blogs = [
        {title: 'i miss home' , snippet:'i wanna see all my family'},
        {title: 'i miss you' , snippet:'i wanna see you your smile'},
        {title: 'i miss myDog' , snippet:'i wanna play with puppu ku kuu'},
    ];
    res.render('index', {title:'from app.Js', blogs});
});

app.use((req,res,next)=>{
    console.log('this is next middleware');
    next();
});
app.get('/about',(req,res)=>{
    res.render('about', {title : 'about'});
});

//redirect express
// app.get(
//     '/about-us', (req,res)=>{
//         res.redirect('/about');
//     }
// );

app.get('/blogs/create',(req,res)=>{
    res.render('create', {title:'create'});
})

//404Page * * *  use()method fires every single request . *** it should be place at the bottom
// app.use((req,res)=>{
//     res.sendFile('./lesson2/views/404.html',{root:__dirname});
// });
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});
