import React from 'react';

const Form = props => {
const results = props.result.map((result, index) => {
  return <li key={index}>{result}</li>
  }
);

const handleNumberChild = ev => {
  props.handleNumber(ev.target.value);
}

const handleEvenChild = ev => {
  props.handleEven(ev.target.value);
}
  return (
  <div>
    <form>
      <label htmlFor="number"> Number:
        <input id="number" name="number" type="number" onChange={handleNumberChild}></input>
      </label>
      <label htmlFor="evenNumbers" onChange={handleEvenChild}> Show only even
        <input
          id="even"
          type="checkbox"
          value="evenOption"
          name="numbers"
        />
      </label>
    </form>
    <div>
      <ul>
        {results}
      </ul>
    </div>
  </div>
  );


}

export default Form;
