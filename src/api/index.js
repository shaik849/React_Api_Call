export const getPost = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    mehod : 'GET',
   }  
    )
    return await response.json();
}

export const getRandomUser = async() =>{
    const response = await fetch("https://randomuser.me/api/",{
        mehod : 'GET',
       }  
        )
        return await response.json();
}
