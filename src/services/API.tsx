const getDataFromApi = () => {
    // obtengo los datos del api
    return fetch('//localhost:3000/api/v1/posts/')
      .then((response) => response.json())
      .then((data) => {
      // recorro el array, cojo los datos que me interesan y lo guardo en otro array (cleanData)
        const cleanData = data.results.map((data:any) => {
            return {
                id: data.id,
                title: data.title,
                content: data.content,
                lat: data.lat,
                long: data.long,
                image_url: data.image_url,
                created_at: data.created_at,
                updated_at: data.updated_at  
            };
          });
          return cleanData;
      });
  };
  
  export default getDataFromApi;
 