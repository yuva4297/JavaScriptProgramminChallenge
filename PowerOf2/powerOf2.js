function power()
{
    var n=document.getElementById("num").value;
    var i=1;
   while(i<n)
    { var pow=Math.pow(2,i);
      if(pow<n)
      {
          i++;
      }
      else{
          alert(i-1);
      }
    }

}