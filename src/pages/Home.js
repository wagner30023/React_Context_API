// import  {useContext} from 'react';
// import { CounterContext } from '../context/CounterContext';
import ChangeCouter from '../components/ChangeCouter';

// Rerfatorando com hook
// import { useTitleColorContext } from '../hooks/useTitleColorContext';

import { useCounterContext } from '../hooks/useCounterContext';

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const {counter} = useCounterContext();

  // 5 - context mais complexo
  const {color,dispatch} = useTitleColorContext();
  console.log(color);


  // 6 - alterando state complexo
const setTitleColor = (color) => {
    dispatch({type:color});
}


  return (
    <div>
      <h1 style={{color: color}}> Home </h1>
      <p> Valor do contador: {counter}</p>
      {/* Alterando o valor do contexto */}
      <ChangeCouter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home