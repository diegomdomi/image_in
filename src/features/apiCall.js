const accesKey = process.env.REACT_APP_APIKEY;
const endPoint = process.env.REACT_APP_APIENDPOINT;
const randomEndPoint = process.env.REACT_APP_RANDOMENDPOINT;

export const apiCall = async(param) => {
    try{
        if(!param.inputSearch || param.inputSearch === '' ){
          const response = await fetch(`${randomEndPoint}?client_id=${accesKey}&count=30`)
          const data = await response.json();
          return [...data];
        }else{
          const response = await fetch(`${endPoint}?query=${param.inputSearch}&client_id=${accesKey}&per_page=30&page=${param.valu}`)
          const data = await response.json();
            return [...data.results];
          
        }
      }catch(err){
          console.log(err)
      }
}