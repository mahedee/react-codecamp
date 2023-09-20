import { useEffect, useState } from "react";

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then((data) => {
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch(() => {
                setLoading(false);
                setPost({});
                setError('There wa a problem');
            })
    }, []);

    return (
        <div>
            {loading? 'Loading .....' : post.title}
            {error ? error : null} 
            {/* equivalent code for above {error || null} */}

        </div>
    );
}