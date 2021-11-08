document.querySelector('.get-jokes').addEventListener('click',getjokes);


function getjokes(e)
{

const numberofJokes=document.getElementById("number");
//console.log(numberofJokes.value);

const xhr=new XMLHttpRequest();

xhr.open('GET',`https://api.icndb.com/jokes/random/${numberofJokes.value}`,true);

xhr.onload = function()
{ 
   if(this.status === 200)
   {
       const response=JSON.parse(this.responseText);
      let output = ' ';

    console.log(response)
  
      var count=0;
      
     if(response.type==='success')
     {
         response.value.forEach(function(jokes) {
            count++;
            output+=`<li>${count + ":" } ${jokes.joke}</li>`
         });
        
     }
    
       else
       {
           output+='<li>Something is wrong </li>'
       }

    
         document.querySelector('.jokes').innerHTML=output;
   }



}
xhr.send();
e.preventDefault();

}
