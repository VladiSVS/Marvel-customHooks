import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{
                'textAlign': 'center', 
                'fontWeight': 'bold', 
                'fontSize': '24px'}}>Page doesn't exist</p>
            <Link to="/" style={{
                'display': 'block', 
                'textAlign': 'center', 
                'fontWeight': 'bold', 
                'fontSize': '24px', 
                'marginTop': '30px'}}>Back to main page</Link>
        </div>
    )
}

export default Page404;