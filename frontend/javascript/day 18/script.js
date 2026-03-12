//https://dummyjson.com/recipes/1


async function get1Recipe(){
    try{
        const response = await fetch("https://dummyjson.com/recipes/1");
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.error("Error fetching recipe:", error);
    }


}