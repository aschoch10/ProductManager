import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from  'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {
    //getting varibale from URL
    let history = useHistory()
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState({})
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:2222/api/products/" + id)
        .then(res =>{
            console.log(res.data);
            setOneProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = (productId) => {
        // console.log(productId);
        axios.delete('http://localhost:2222/api/products/' + productId)
            .then(res => {
                console.log("Succesful deletion!");
                history.push("/")
            })
            .catch(err => console.error(err));
    }

    return <div>
            <h2>{oneProduct.title}</h2>
            <h3>{oneProduct.price}</h3>
            <h3>{oneProduct.description}</h3>
            <h3><button onClick={() => { deleteProduct(oneProduct._id) }} className="btn btn-danger">Delete</button></h3>
    </div>;
};

export default ViewOne;
