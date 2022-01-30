import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';
import './css/styles.css';

const breakPoints=[
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 3},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 5},
];




class TopCarousel extends Component{
  
state={
  items:[
    {id:1, title:1, url: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg'},
    {id:2, title:2, url: 'https://www.netcetra.com/images/howto_images/photoshop-logo.jpg'},
    {id:3, title:3, url: 'https://www.teahub.io/photos/full/273-2732949_eiffel-tower-cloudy.jpg'},
    {id:4, title:4, url: 'https://www.teahub.io/photos/full/322-3228862_dudhsagar-falls.jpg'},
    {id:5, title:5, url: 'https://www.teahub.io/photos/full/274-2748760_mount-everest-hd-wallpaper-mount-everest.jpg'},
    {id:6, title:6, url: 'https://www.teahub.io/photos/full/274-2748760_mount-everest-hd-wallpaper-mount-everest.jpg'},
    {id:7, title:7, url: 'https://www.teahub.io/photos/full/274-2748760_mount-everest-hd-wallpaper-mount-everest.jpg'}
  ]
}

  render() {
    const{items}=this.state;
    return(
        <Carousel breakPoints={breakPoints}>
        {items.map(
          item => <div key={item.id} class="carousel-image">
            <img src={item.url} alt={item.title}></img>
          </div>
        )}
      </Carousel>
    );
  }
}


export default TopCarousel;