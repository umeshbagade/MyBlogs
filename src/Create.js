import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("umesh")
    const [body, setBody]   = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const blog  = {title, body , author}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false) //data added
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = {(e)=>{
                        setTitle(e.target.value)
                    }}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e)=>{
                        setBody(e.target.value)
                    }}
                ></textarea>

                <label >Blog author:</label>
                <select
                    onChange={(e)=>{
                        setAuthor(e.target.value)
                    }}
                    value = {author}
                >
                    <option value="umesh">Umesh</option>
                    <option value="vaishnav">Vaishnav</option>
                </select>

                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Data...</button>}
                <br />
             
            </form>
        </div>
     );
}
 
export default Create;