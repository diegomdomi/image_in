const accesKey = process.env.REACT_APP_APIKEY;
const endPoint = process.env.REACT_APP_APIENDPOINT;
const randomEndPoint = process.env.REACT_APP_RANDOMENDPOINT;

export const apiCall = async(param,page=1) => {
    try{
        if(!param || param === '' ){
          const response = await fetch(`${randomEndPoint}?client_id=${accesKey}&count=30&page=${page}`)
          const data = await response.json();
          return [...data];
        }else{
          const response = await fetch(`${endPoint}?query=${param}&client_id=${accesKey}&per_page=30&page=${page}`)
          const data = await response.json();
            return [...data.results];
          
        }
      }catch(err){
          console.log(err)
      }
}