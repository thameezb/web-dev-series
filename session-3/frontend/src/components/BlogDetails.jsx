import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = ({token}) => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE',
            headers: {'Authorization': 'Bearer '+ token}
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
        })
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author_username}</p>
                <div>{blog.content}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;