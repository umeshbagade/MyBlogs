import { useState } from "react"

const Home = () => {

    const [blogs, setBlogs] = useState([
        {   title:"My new Website", body:"Come and visit, hurry up", author:"Umesh", id:1   },
        {   title:"Welcome Party", body:"Hey buddy lets come for Internship party", author:"Vaishnav", id:2   },
        {   title:"Placement Party", body:"Guyz, placement is here", author:"Kaustubh", id:3   },
    ]);
 

    
    return (  
        <div className="home">
         {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
         ))}
        </div>
    );
}
 
export default Home;