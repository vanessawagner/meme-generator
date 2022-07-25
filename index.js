

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


    })

        

}

    getMEME();

