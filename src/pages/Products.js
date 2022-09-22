// import  {useContext} from 'react';
// import { CounterContext } from '../context/CounterContext';

// Rerfatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

const Products = () => {
  const {counter} = useCounterContext();
  return (
    <div>
      <h1> Products </h1>
      <p> Valor do contador: {counter}</p>
    </div>
   
  )
}

export default Products