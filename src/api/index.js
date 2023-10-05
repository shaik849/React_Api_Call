const getPost = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    mehod : 'GET',
   }  
    )
    return await response.json();
}

export default getPost