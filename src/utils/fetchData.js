export const  exerciseoptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': "12f7d92fcdmshb29dc70d54946e3p182334jsnd9a69db0fb7a",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData= async (url, options) =>{

    const response = await fetch(url, options)
    const data= await response.json()

    return data;
}