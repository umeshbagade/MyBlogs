import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, seIsLoading] = useState(true)
    useEffect(() => {
    
       // done use setTimeout Ever its just for Concept Clarification
       setTimeout(()=>{         
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            seIsLoading(false)
        });
       },1000)
    }, [])

    return (
        <div className="home">
            { isLoading && <div style={{ textAlign: 'left'}}>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
export default Home;