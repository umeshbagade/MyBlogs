import { useEffect, useState } from "react"

const useFetch = (url) => {


    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        // done use setTimeout Ever its just for Concept Clarification
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {                // request on the endpoint which is not present
                        throw Error('Could not fetch the data for that resourse')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {                   // if unable to fetch i.e. like, server not present
                    setError(err.message)
                    setData(null)
                    setIsLoading(false)
                })
        }, 1000)

        return () => console.log("hi")

    }, [url])

    return { data, isLoading, error }

}

export default useFetch;