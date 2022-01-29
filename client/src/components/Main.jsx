import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // console.log("Use effect fired!");
        getProductsDB()
    }, [])

    const getProductsDB = () => {
        axios.get("http://localhost:2222/api/products")
            .then(res => {
                // console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }
    // console.log(products)

    const deleteProduct = (productId) => {
        // console.log(productId);
        axios.delete('http://localhost:2222/api/products/' + productId)
            .then(res => {
                console.log("Succesful deletion!");
                setProducts(products.filter((product) => product._id !== productId))
            })
            .catch(err => console.error(err));
    }
    


    return (
        <div className='container'>

            <h2>Current inventory</h2>
            <br />

            {/* {JSON.stringify(products)} */}
            <div>
                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Product title:</th>
                            <th>Product price:</th>
                            <th>Product description:</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, idx) => {
                                return (

                                    <tr key={idx}>
                                        <td>{product.title}</td>
                                        <td>${product.price}</td>
                                        <td>{product.description}</td>
                                        <td>
                                        <button onClick={() => { deleteProduct(product._id) }} className="btn btn-danger">Delete</button>
                                        <Link to={"/products/" + product._id}> Show</Link>||
                                        <Link to={"/products/update/" + product._id}> Update</Link>
                                        
                                        </td>
                                    </tr>



                                )
                            })
                        }

                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default Main;
