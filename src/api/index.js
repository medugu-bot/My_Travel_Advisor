import axios from 'axios';





export const getPlacesData  = async (type,sw, ne) => {
  
  
    try{

        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
            'X-RapidAPI-Key': 'a2dae88711mshc0cc7d5b2e58ae4p1fc95fjsn220384c98bcc',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
        return data;

    } catch(error){
       console.log(error)     
    }



}