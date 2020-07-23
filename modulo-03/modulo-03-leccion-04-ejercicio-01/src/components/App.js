import React from 'react';
import Item from './Item';


class App extends React.Component {
  render() {

    const arrayOfItems = [
      {
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 'hola'
      },
      {
        name: 'Hamburguesa con queso',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];
    console.log(arrayOfItems[0]);
  let items = [];
  for(let i = 0; i < arrayOfItems.length; i++) {
    items[i] = <li>
      <Item
        name= {arrayOfItems[i].name}
        description={arrayOfItems[i].description}
        quantity={arrayOfItems[i].quantity}
        category={arrayOfItems[i].category}
        price={arrayOfItems[i].price}
      />
    </li>
  }
  console.log(items);
    return ( 
    <ul className="item-list">
        {items}
        </ul>
    );
  }
}

export default App;




// //punto b
// let items = [];
//   //filtra los precios para solo recoger los que valen menos de 10€
//   const newarray = arrayOfItems.filter(item => parseInt(item.price) < 10);
//   for(let i = 0; i < newarray.length; i++) {
//     items[i] = <li>
//       <Item
//         name= {newarray[i].name}
//         description={newarray[i].description}
//         quantity={newarray[i].quantity}
//         category={newarray[i].category}
//         price={newarray[i].price}
//       />
//     </li>