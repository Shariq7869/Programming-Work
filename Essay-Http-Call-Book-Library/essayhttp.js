function EasyHttp(){
    this.http = new XMLHttpRequest();
}

EasyHttp.prototype.get = function(url,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('GET',url,true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
           const data = JSON.parse(this.responseText);
           callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error : ${xhr.status}`);
        }
    }
    xhr.send();
}

EasyHttp.prototype.post = function(url,data,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
           const data = JSON.parse(this.responseText);
           callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error : ${xhr.status}`);
        }
    }
    const updatedData = JSON.stringify(data);

    xhr.send(updatedData);
}

EasyHttp.prototype.put = function(url,data,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('PUT','https://jsonplaceholder.typicode.com/posts/1',true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
           const data = JSON.parse(this.responseText);
           callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error : ${xhr.status}`);
        }
    }
    const updatedData = JSON.stringify(data);

    xhr.send(updatedData);
}

EasyHttp.prototype.delete = function(url,data,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('DELETE','https://jsonplaceholder.typicode.com/posts/1',true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
           const data = JSON.parse(this.responseText);
           callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error : ${xhr.status}`);
        }
    }
    const updatedData = JSON.stringify(data);

    xhr.send(updatedData);
}


