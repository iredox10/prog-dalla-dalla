import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const usefetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [data,setData] = useState([])
    
    useEffect(() =>{
        setLoading(true)
        const fetchData = async () =>{
            try{
                const res = await axios.get(url)
                setData(res.data)
            }
            catch(err){
                setError(err)
            }
            setLoading(false)
        }
        fetchData()
    },[])

    const refetch = async () =>{
        try{
            const res = await axios.get(url)
            const data = res.data
            setData(res.data)
            console.log(data);
        }
        catch(err){
            setError(err)
            console.log(err)
        }
        setLoading(false)
    }
    // console.log(data)
    return {data,error,loading,refetch}
}

export default usefetch