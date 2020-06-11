const express = require('express');
require('dotenv').config()

const app = express();
const cors = require('cors');
const axios = require('axios');
let  token='EAAMdjmZCduS0BAAESLyn6ZA5GNRZBvnlph2VZBnqFn5a1SmgHqdVZBPZA78lg70jY1f4LMiW2EhSegziZCOIpE2uofP0QA6RVeehh3hZCsdaGmBk3pcpAC5knwsLZBWxIZC7hFEzqS5kaz5FYPUxy11usZAmWGxufio8O1vHQkdLwUq01gUbMZA5YldZB';
// I have it in env File and dotenv, you don't so here it is.
const FBToken= process.env.FBToken || token;
if(!FBToken){
    console.error("============MAJOR PROBLEM===============");
    throw "no FBToken in env file."
}

app.use(cors({origin: 'http://localhost:8080'}));

app.get('/', async (req, res) => {
    try{
        const searchStr=req.query.query;
        const places = await getData(searchStr);
        res.send(places)
    }catch(err){
        console.error('err route:',err)
    }
});

app.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const place = await getById(id);
        res.send(place)
    }catch(err){
        console.error('err route:',err)
    }
});

const getById=async (id)=>{
    const fields=['about','cover','description','location','overall_star_rating','phone','single_line_address','website','id']
    const url= `https://graph.facebook.com/v7.0/${id}?fields=${fields}&access_token=${FBToken}`;

    try{
        const {data}= await axios.get(url);
        if(data.cover)data.cover = data.cover.source;
        return data
    }catch(err){
        console.error('err:',err);  
    }
}

const mapData= (places)=>{
    const mapped = places.map(i=>{
        const loc = i.location;
        i.city= loc.city;
        i.country= loc.country;
        i.location = {
            latitude: loc.latitude,
            longitude:loc.longitude
        }
        return {...i};
    })
    return mapped;
};

const getData= async(searchStr)=>{
    let places = [];
    const res = await getFirstDataCall(searchStr);
    places= places.concat(res.data);
    let nextPage = res.paging? res.paging.next: null;
    if(nextPage){
        let resp= await getNext(nextPage);
        places = places.concat(resp.data);
    }

    const mapped = mapData(places)
    return mapped
}

const getNext=  async(nextPage)=>{
    const {data}= await axios.get(nextPage);
    return data;
}


const getFirstDataCall= async(searchStr= 'facebook')=>{
    try{
    const url = `https://graph.facebook.com/search?type=place&q=${encodeURI(searchStr)}
          &fields=id,name,location,link&limit=200
          &access_token=${FBToken}`
        const {data}= await axios.get(url);
        return data
    }catch(err){
        console.error('err:',err);
        
    }
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ilan's app listening on port ${PORT}!`));


