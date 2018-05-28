function calc(){
    var n=document.getElementById("given").value;
    if(n<0){
         document.getElementById("output").innerHTML="enter the positive number";
    }
    var out='';
    for(var i=1;i<n;i++){
        if(i%3==0 && i%5==0){
            out=out+"FizzBuzz,"
        }
        else if(i%3==0){
            out=out+"Fizz,"
        }
        else if(i%5==0){
            out=out+"Buzz,"
        }
        else{
            out=out+i+","
        }
    }
    
    //console.log(out);   
    document.getElementById("output").innerHTML=out;
}