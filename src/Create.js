import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("umesh")
    const [body, setBody]   = useState("")

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form >
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

                <button>Add Blog</button>
                <br />
             
            </form>
        </div>
     );
}
 
export default Create;