//ensures whole document loads before javascript runs
//document.addEventListener("DOMContentLoaded", () => {
   

    const memeImg = document.querySelector("meme-img")
    const likeBtn = document.getElementById('like-button')
    const nextBtn = document.getElementById('next-button')
    const mainDisp = document.getElementById("quote");

    //array to save favorite meme URLs
    const savedUrls = [];

    console.log('about to fetch meme library');
    
    const api_url = 'https://api.imgflip.com/get_memes'
    async function getMEME() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        
    //number of memes available in JSON
        memeLength = data.data.memes.length;
        console.log(memeLength);
    
    //function to get random meme from array
    function getRandomMeme(data) {
        //get random index value
        const randomIndex = Math.floor(Math.random()*memeLength)
        //get random item
        const item = data.data.memes[randomIndex];
        return item;
    }
    const randomMeme = getRandomMeme(data)
    console.log(randomMeme)
    //grab the url of the randomMeme generated
    console.log(randomMeme.url)
    randomMemeUrl = randomMeme.url
    console.log(randomMemeUrl)


    //link to meme connected to html file
    document.getElementById("link_1").href = randomMemeUrl;

    //connect randomMemeUrl java to HTML page
    var a1 = randomMemeUrl
    var image = document.getElementById("image")
    image.src = a1

    //save Meme
    const saveMeme = () => {
        savedUrls.push(mainDisp.textContent);
    }
        //specific meme url
        console.log(data.data.memes[0].url)
        var memeURL = data.data.memes[0].url
        console.log(memeURL)
    }   

    getMEME();

    //document.addEventListener("DOMContentLoaded", newMeme)
    
    nextBtn.addEventListener("click", newMeme)
    likeBtn.addEventListener("click", saveMeme)


