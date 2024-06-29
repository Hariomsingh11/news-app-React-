import axios from "axios"
export  function getNews() {
  const API_Key=`a55b630e46cb4cceaa7f52bfb56f9490`
  const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us`

 
   
   
        return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)
        
  }

  


