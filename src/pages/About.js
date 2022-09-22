// import  {useContext} from 'react';
// import { CounterContext } from '../context/CounterContext';

// Rerfatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

const About = () => {
  const {counter} = useCounterContext();
  return (
    <div>
      <h1> About </h1>
      <p> Valor do contador: {counter}</p>
    </div>
  )
}

export default About