import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>Sorry, the Page you have requested doesn't Exist</h3>
            <Link to="/">Go to Home Page</Link>
        </div>
     );
}
 
export default NotFound;