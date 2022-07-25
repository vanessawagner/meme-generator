

const api_url = 'https://api.imgflip.com/get_memes'
    async function getMEME() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data)

        var increment = document.getElementById('increment')
        var decrement = document.getElementById('decrement')
       

        var i = 0;
        memeCurrent = data.data.memes[i]
        image.src = memeCurrent.url

        increment.addEventListener('click', function() {
            i++
            console.log(i)
            console.log(data.data.memes[i])
            memeCurrent = data.data.memes[i]
            image.src = memeCurrent.url
            
        
        })
        
        decrement.addEventListener('click', function() {
            i--
            console.log(i)
            console.log(data.data.memes[i])
            memeCurrent = data.data.memes[i]
            image.src = memeCurrent.url
            console.log(memeCurrent.name)
            title = memeCurrent.name
    })


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


    getMEME();

    
    