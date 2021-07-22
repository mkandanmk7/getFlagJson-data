let jsonData=new XMLHttpRequest();
   jsonData.open("GET","https://restcountries.eu/rest/v2/all");
   jsonData.onload=function(){
      let empty=JSON.parse(this.response);
      
      getData(empty);
   };
   jsonData.onerror=function()
   {
      console.log("error",this.statusText);
   };
   jsonData.send();

   function getData(value)
   {
      for(let key of value)
      {
         console.log(key.flag);
      }
      
   };
