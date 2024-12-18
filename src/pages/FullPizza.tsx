import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{ imageUrl: string; title: string; price: string }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const { data } = await axios.get(`https://67360abe5995834c8a952b8f.mockapi.io/items/${id}`);
        if (!data) {
          navigate('/');
          return;
        }
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
        navigate('/');
        // throw error;
      }
    };
    fetchPizzaData();
  }, [id]);
  if (!pizza) {
    return <div>Loading Pizzas...</div>;
  }

  return (
    <div className="container">
      {' '}
      <h2>{pizza.title}</h2> <img src={pizza.imageUrl} alt={pizza.title} />
      <h4>{pizza.price} $</h4>{' '}
    </div>
  );
};

export default FullPizza;
