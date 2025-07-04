const btnEl = document.getElementById("btn")
const jokeEl=document.getElementById("joke")

const apiKey="CjWNLhGzhpovnRFkavQWkfq1e3RIeB0tP8OGjONq";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
}

const apiURL="https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {

     try {
        jokeEl.innerText="Updating...";
        btnEl.disabled=true;
        btnEl.innerText="Loading..."
    
        const response= await fetch(apiURL,options);
        const data= await response.json() 
    
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke"
      
        jokeEl.innerText=data[0].joke;
        
     } catch (error) {
        jokeEl.innerText="Something went wrong try agin letter"
        btnEl.disabled=false;
      
        btnEl.innerText="Tell me a joke"
        console.log("Error")
     }
  


}

// api to fetch data eg. Api Ninjas
btnEl.addEventListener("click",getJoke);
