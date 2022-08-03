

const api_url = 'https://api.imgflip.com/get_memes'
    async function getMEME() {
        //fetch API Data and store data in response variable
        const response = await fetch(api_url);
        //store the response in an array format called data
        const data = await response.json();

        let increment = document.getElementById('increment')
        let decrement = document.getElementById('decrement')
       
        //displaying first image in array upon start up of the app
        let i = 0;
        memeCurrent = data.data.memes[i]
        image.src = memeCurrent.url

        //next button on HTML moves forwards through array by returning and then incrementing
        increment.addEventListener('click', function() {
            i++
            memeCurrent = data.data.memes[i]
            image.src = memeCurrent.url
        })
        
        //previous button on HTML moves backwards through array by returning and then incrementing
        decrement.addEventListener('click', function() {
            i--
            memeCurrent = data.data.memes[i]
            image.src = memeCurrent.url
        })

        //search and filter functionality
        const search = document.getElementById("search");
        const results = document.getElementById("results");
        
        //define input in search field
        let search_term = "";
  
        const listMemes = () => {
          //clear list
          results.innerHTML = "";
          //loop over data elements to filter if meme NAME matches search text
          data.data.memes.filter((item) => {
            return (
              item.name.toLowerCase().includes(search_term) 
            );
          })
          .forEach((e) => {
            //append a new list item to ul
            const li = document.createElement("li");
            li.innerHTML = `<b>Name:</b> ${e.name}  || <b>url:</b> ${e.url}`;
            results.appendChild(li);
          });
        };
    
        listMemes();

        //capture the search input
        search.addEventListener("input", (event) => {
          search_term = event.target.value.toLowerCase();
          listMemes();
        });
    }

    //call function to display array of data
    getMEME();

    
    