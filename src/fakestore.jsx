import React, { useState, useEffect } from 'react';
import MyApp from './mycomponent';
import Loader from './loader';
import Errors from './error';
import './fakeapi.css';

function Fakestore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`body ${loading ? 'loading' : ''}`}>
      {loading ? (
       <Loader/> 
      ) : error ? (
        <Errors/>) : (
        <div className="maindiv">
          {products.map((data) => (
            <MyApp
              key={data.id} 
              category={data.category.toUpperCase()}
              image={data.image}
              price={data.price}
              onClick={() => {
                alert(data.description);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Fakestore;
