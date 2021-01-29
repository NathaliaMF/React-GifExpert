export const getGif = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=HxIs4PB476PMfVHZMKxCjBOPIFy09qGF`;
    
    const {data} = await fetch(url).then( (r) => r.json());

    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    })
    return gifs;
}