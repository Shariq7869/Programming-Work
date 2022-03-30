const http = new EasyHttp();
const getRequestBtn = document.querySelector('.get-request');
const getRequestBtn2 = document.querySelector('.get-request-2');
const postRequestBtn = document.querySelector('.post-request');
const putRequestBtn = document.querySelector('.put-request');
const deleteRequestBtn = document.querySelector('.delete-request');

// GET REQUEST
getRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
http.get('https://jsonplaceholder.typicode.com/posts',function(data,error){
    console.log(data);
    console.log(error);
  })
});

// GET REQUEST 2
getRequestBtn2.addEventListener('click',function(event){
    event.preventDefault();
http.get('https://jsonplaceholder.typicode.com/posts',function(data,error){
    console.log(data);
    console.log(error);
  })
});

// POST REQUEST
postRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    const payload = {
      userId: 1,
      is: 1,
      title: "title is title",
      body: "title is body"
};

http.post('https://jsonplaceholder.typicode.com/posts',payload,function(data,error){
    console.log(data);
    console.log(error);
 })
});

// PUT REQUEST
putRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
const payload2 = {
    userId: 1,
    is: 1,
    title: "title is title",
    body: "title is body"
};
http.put('https://jsonplaceholder.typicode.com/posts/1',payload2,function(data,error){
    console.log(data);
    console.log(error);
 })
});

// DELETE REQUEST
deleteRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
http.delete('https://jsonplaceholder.typicode.com/posts/1',payload2,function(data,error){
    console.log(data);
    console.log(error);
 })
});