import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from  'react-router-dom';
import axios from 'axios';

const ViewOne = (props) => {
    //
    let history = useHistory()
    //getting varibale from URL
    const {id} = useParams()
    //state variables for the show one page
    const [oneProduct, setOneProduct] = useState({})

    //use effect is triggered once when the page loads, if anything is in the brackets it fires again when that function is run 
    useEffect(()=>{
        axios.get("http://localhost:2222/api/products/" + id)
        .then(res =>{
            console.log(res.data);
            setOneProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    //axios call using back end routes to delete product
    const deleteProduct = (productId) => {
        // console.log(productId);
        axios.delete('http://localhost:2222/api/products/' + productId)
            .then(res => {
                console.log("Succesful deletion!");
                //redirects via app.js
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
