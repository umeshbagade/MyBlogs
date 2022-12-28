import {  useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "Come and visit, hurry up", author: "Umesh", id: 1 },
        { title: "Welcome Party", body: "Hey buddy lets come for Internship party", author: "Vaishnav", id: 2 },
        { title: "Placement Party", body: "Guyz, placement is here", author: "Kaustubh", id: 3 },
    ]);

    const [name, setName] = useState("Umesh");

   
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog)=> blog.id !==id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log("UseEffect ran")
    },[name])
    return (
        <div className="home">
           <BlogList blogs = {blogs} title="All Blogs" name={name} handleDelete = {handleDelete}/>
           <button onClick={()=>setName("Vaishnav")}>Change Name</button>
        </div>
    );
}

export default Home;