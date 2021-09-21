var str="";
function show(value){

    str+=value;
    document.getElementById('output').innerHTML=str;

}

function result(){

    str=eval(str);
    document.getElementById('output').innerHTML = str;

}

function erase(){

    str="";
    document.getElementById('output').innerHTML = 0;

}

function backSpace(){
    str = str.slice(0,-1);
   if(str.length==0){
    document.getElementById('output').innerHTML = 0;
   }
   else{
    document.getElementById('output').innerHTML = str;
   }

}