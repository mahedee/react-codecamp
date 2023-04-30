import React, { useReducer, useEffect, useState } from "react";

const initialState = {
    loading: true,
    error: "",
    post: {}
};


const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return{
                loading: false,
                post: action.result,
                error: ''
            };
        case 'ERROR':
            return{
                loading: false,
                post: {},
                error: 'There was a problem fetching!'
            };
        default:
            return state;
    }
}




export default function GetPost2() {
    const[state, dispatch] = useReducer(reducer, initialState);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
    // const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then((data) => {
                dispatch({type: 'SUCCESS', result: data});
            })
            .catch(() => {
                dispatch({type: 'ERROR'});
            })
    }, []);

    return (
        <div>
            {state.loading? 'Loading .....' : state.post.title}
            {state.error ? state.error : null} 
            {/* equivalent code for above {error || null} */}

        </div>
    );
}