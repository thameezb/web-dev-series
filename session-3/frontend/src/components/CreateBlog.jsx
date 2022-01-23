import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({token}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content };

        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token
            },
              body: JSON.stringify(blog)
        })
        .then(() => {
            setIsPending(false);
            navigate('/');
        })
        .catch((err) => {
            setError(err)
        })
    }

    return ( 
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
                {error && <div>{error}</div>}
            </form>
        </div>
     );
}
 
export default Create;