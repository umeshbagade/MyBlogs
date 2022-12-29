import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        // done use setTimeout Ever its just for Concept Clarification
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {                // request on the endpoint which is not present
                       throw Error('Could not fetch the data for that resourse')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {                   // if unable to fetch i.e. like, server not present
                   setError(err.message)
                   setBlogs(null)
                   setIsLoading(false)
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div style={{ textAlign: 'left' }}>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
export default Home;