import { Link } from "react-router-dom";
const notfound = () => {
    return ( 
        <div className="Notfound">
        <h2>Cannot find the page</h2>
        <button>
        <Link to="/" >Go back</Link> </button>
        </div>
     );
}
 
export default notfound;