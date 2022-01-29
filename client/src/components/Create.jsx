import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Create = (props) => {
    let history = useHistory();
    //state variables to hold form information
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const createProduct = (e) =>{
        e.preventDefault();
        //create object and set the variables to state variables, if they are the same only one word is needed, if differerent title: specialTitle
        const newProduct ={
            title,
            price,
            description
        }
        //post to the database,(route comes from server routes) passing the object created above 
        axios.post("http://localhost:2222/api/products", newProduct)
            .then(res => {
                console.log(res.data);
                console.log("Successfully written to database!");
                history.push("/")
            })
            .catch(err => console.log(err))
            .catch(err => console.log('Error!!'))

    }

    return <div>
        {/* {JSON.stringify(title)}
        {JSON.stringify(price)}
        {JSON.stringify(description)} */}
            <form onSubmit={createProduct}className="container">
                <div className="form-group">
                    <h2>Add new product:</h2>
                    <label>Title:</label>
                        <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" value={title}/>
                    <label >Price:</label>
                        <input onChange={e=>setPrice(e.target.value)} type="text" className="form-control" value={price}/>
                    <label >Description:</label>
                        <input onChange={e=>setDescription(e.target.value)} type="text" className="form-control" value={description} />
                    <input type="submit" value="Add product" className='btn btn-primary' />
                </div>
            </form>
    </div>;
};

export default Create;
