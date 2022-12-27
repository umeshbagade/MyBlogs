import { useState } from "react"

const Home = () => {

   const [name, setName] = useState("umesh");
   const [age, setAge] = useState(19)

    const handleClick = (e) =>{

        alert("After 3 years")
        
        setName("Umesh");
        setAge(age+3)

        console.log("button clicked",e, name, age);
    }
    const handleClickAgain = (name,e) =>{
        console.log("hello"+name, e);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old...</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) =>handleClickAgain("mario", e)}>Click me again</button>
        </div>
    );
}
 
export default Home;