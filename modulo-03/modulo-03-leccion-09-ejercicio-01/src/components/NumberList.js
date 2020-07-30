import React, {useState} from 'react';
import Form from './Form';

const numbers = [1, 4, 6, 8, 45, 40, 50, 60, 89];

const NumberList = () => {
  const [result, setResult] = useState(numbers);

  const handleNumber = filterNumber => {
    setResult(numbers.filter(n => n > filterNumber));
  }

  const handleEven = () => {
    setResult(numbers.filter(n => n % 2 === 0));
  }

  return (
  <div>
    <Form handleNumber={handleNumber} handleEven={handleEven} result={result}/>
  </div>
  )
}

export default NumberList;
