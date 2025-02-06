// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const useFetch = () => {

//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null)

//     const fetchData = async () => {
//         setIsLoading(true);

//         try {
//             const response = await axios.get('http://192.168.100.8:8000/api/products')
//             setData(response.data)
//             setIsLoading(false)
//         } catch (error) {
//             setError(error)
//             console.warn(error)
//         }finally{
//             setIsLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])

//     const refetch = () => {
//         // setIsLoading(true)
//         fetchData();
//     }

//     return { data, isLoading, error, refetch }
// }

// export default useFetch