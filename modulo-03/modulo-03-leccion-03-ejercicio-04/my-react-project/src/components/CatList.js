import React from 'react';
import RandomCat from './RandomCat';


class CatList extends React.Component {
  render() {
      return (
        <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
          <RandomCat height="200" width="200"/>
          </li>
          <li>
          <RandomCat height="200" width="400"/>
          </li>
          <li>
          <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

RandomCat.defaultProps = {
  height:"200", 
  width:"300"
};
export default CatList;
