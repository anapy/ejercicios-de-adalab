import React from 'react';
import MediaCard from './MediaCard';

class MediaList extends React.Component {
  render() {
    return <div>
      <ul className="cards_list"></ul>
      <li>
      <MediaCard
        photo="https://i.pinimg.com/736x/bd/ea/fe/bdeafee9460b48e87f081bf0b807ce9e.jpg"
        name="Pancho"
        date="Lunes 26 de junio de 2017"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et velit eu ante laoreet mattis vestibulum eu quam. Donec ullamcorper ultrices lacus ac hendrerit. Praesent condimentum ullamcorper dignissim. Pellentesque tincidunt massa aliquet, dictum turpis eu, eleifend libero. Nulla feugiat faucibus ex, ac finibus orci vulputate rutrum. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tempor metus, vitae pulvinar turpis posuere eu. Fusce iaculis lobortis massa ac mollis."
        like={37}
        heart={true}
        />
      </li>
      <li>
      <MediaCard
        photo="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg"
        name="Derretido"
        date="Lunes 26 de junio de 2017"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et velit eu ante laoreet mattis vestibulum eu quam. Donec ullamcorper ultrices lacus ac hendrerit. Praesent condimentum ullamcorper dignissim. Pellentesque tincidunt massa aliquet, dictum turpis eu, eleifend libero. Nulla feugiat faucibus ex, ac finibus orci vulputate rutrum. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tempor metus, vitae pulvinar turpis posuere eu. Fusce iaculis lobortis massa ac mollis."
        like={57}
        heart={true}
        />
        </li>      
        <li>
        <MediaCard
        photo="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"
        name="Blanquito"
        date="Lunes 26 de junio de 2017"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et velit eu ante laoreet mattis vestibulum eu quam. Donec ullamcorper ultrices lacus ac hendrerit. Praesent condimentum ullamcorper dignissim. Pellentesque tincidunt massa aliquet, dictum turpis eu, eleifend libero. Nulla feugiat faucibus ex, ac finibus orci vulputate rutrum. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit tempor metus, vitae pulvinar turpis posuere eu. Fusce iaculis lobortis massa ac mollis."
        like={137}
        heart={true}
        />
        </li>
      </div>
  }
} 

export default MediaList;