import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [gotProducts, setGotProducts] = useState(false);

    useEffect(() => {
        console.log("Use effect fired!");
        getProductsDB()
    }, [])

    const getProductsDB = () => {
        axios.get("http://localhost:2222/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
                // setGotProducts(true);
            })
            .catch(err => console.log(err))
    }
    console.log(products)
    return (
        <div>
            <h1>Hello from jsx!</h1>
            {JSON.stringify(products)}

            {
                products.map((product, idx) => {
                    return (
                        <div>
                            <p>
                                {product.title}
                            </p>
                        </div>
                    )
                })
            }



        </div>
    );
};

export default Main;
