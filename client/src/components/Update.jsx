import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'

const Update = (props) => {
    let history = useHistory();
    const { id } = useParams();

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get("http://localhost:2222/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        //create object and set the variables to state variables, if they are the same only one word is needed, if differerent title: specialTitle
        const newProduct = {
            title,
            price,
            description
        }
        //put to the database,(route comes from server routes) passing the object created above 
        axios.put("http://localhost:2222/api/products/" + id, newProduct)
            .then(res => {
                console.log(res.data);
                console.log("Successfully written to database!");
                //redirects to home page through app.js
                history.push("/")
            })
            .catch(err => console.log(err))
            .catch(err => console.log('Error!!'))

    }

    return <div>
        <form onSubmit={updateProduct} className="container">
        {JSON.stringify(title)}
        {JSON.stringify(price)}
        {JSON.stringify(description)}
            <div className="form-group">
                <h2>Add new product:</h2>
                <label>Title:</label>
                <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" value={title} />
                <label >Price:</label>
                <input onChange={e => setPrice(e.target.value)} type="text" className="form-control" value={price} />
                <label >Description:</label>
                <input onChange={e => setDescription(e.target.value)} type="text" className="form-control" value={description} />
                <input type="submit" value="Add product" className='btn btn-primary' />
            </div>
        </form>
    </div>;
};

export default Update;
