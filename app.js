const express=require('express');
const path =require('path');
//init app
const app=express();

//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//home route
app.get('/',function(req,res){
  let articles=[
    {
      id:1,
      title:'First',
      author:'Shreya',
      body:'This is first article'
    },
    {
      id:2,
      title:'Second',
      author:'Simran',
      body:'This is second article'
    },
    {
      id:3,
      title:'Three',
      author:'Sherry',
      body:'This is third article'
    }
  ];
  res.render('index4', {
    title:'Articles',
    articles: articles
  });
});

//add route
app.get('/articles/add',function(req, res){
  res.render('add_articles',{
    title:'Add Article'
  });
});

//start server
app.listen(3000,function(){
  console.log('Server started on port 3000...');
});
