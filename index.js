const api_url = 'https://api.imgflip.com/get_memes'
    async function getMEME() {
        const response = await fetch(api_url);
        const data = await response.json();
     
        
            //number of memes available in JSON
            memeLength = data.data.memes.length;
            console.log(memeLength)

    console.log(data.data.memes[0])
        
    //function to get random meme from array
    function getRandomMeme(data) {
        //get random index value
        const randomIndex = Math.floor(Math.random()*memeLength)
        //get random item
        const item = data.data.memes[randomIndex];
        return item;
    }
    const randomMeme = getRandomMeme(data)
    
    
    //grab the url of the randomMeme generated
    randomMemeUrl = randomMeme.url
    randomMemeTitle = randomMeme.title

    //connect randomMemeUrl java to HTML page so img can appear
    var image = document.getElementById("image")

    image.src = randomMemeUrl
    image.title = randomMemeTitle

    }

    getMEME();  


    


