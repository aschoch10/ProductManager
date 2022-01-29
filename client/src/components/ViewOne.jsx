import React, {useState, useEffect} from 'react';
import { useParams } from  'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {
    //getting varibale from URL
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:2222/api/products/" + id)
        .then(res =>{
            console.log(res.data);
            setOneProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return <div>
            <h2>One Product</h2>
    </div>;
};

export default ViewOne;
