import axios from "axios";

const usePost = async (url,data) =>{
try{
    const res = await axios.post(url,{...data})
    console.log(res.data)
}
catch(err){
    console.log(err );
}
}

export default usePost