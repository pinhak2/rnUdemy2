import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Skeedoo extends Component {
  render() {
    let img = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wgARCAA0AEgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//aAAwDAQACEAMQAAAAjHaEtRSWZCVvXkq40C+LteUofEdxJs3Wyy8BO6OcmaO1aLNvxVK5fzSX1QXjhp7aCihICgj/xAAbEQACAwADAAAAAAAAAAAAAAAAARARITFBUf/aAAgBAgEBPwCL8O4bKHiFDVls1jRsPgU//8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwAn/8QAKxAAAgICAAMFCQEAAAAAAAAAAQIDBAARBSExEBITIEEUIjI0QlFhcZEj/9oACAEBAAE/APLDBJO2kXf5xeHRJoTTAMfQZerrXm7inY1vyxVppfgQkZHwycuO+Aq+pyzbWBfArctdWyjE09kMxJC8yTl+US2WI6DkPJVqKiePY5KOg++Nbnnk8KuvcX0yWadHZGlJI5HnleIzzBAeZ9ctSLTi9niHvH4m8lKvGkXtM3wjoMtW3nk30UdBj8Q/x0iBZCNFhhJJ2c4UN2wfsMmEV8Mo0sqnl+clieJyrjRHbTZLFVqznTfTk1aWJyrIf2M8KQ/Q38xa0zdI2/mVIDTiklm0pI0BgkZZO+p0d7yO3DZQR2l0fRsl4axHegYOvYCVOwdEYnE5lUAgNr75SvPPP3GVQCPQZY4hYSVkBA0dZLNJKffcntjnkiPuOR5OF/OLlz5qT9+X//4AAwD/2Q==';

    return <Image source={{uri: img}} style={{width: 100, height: 100}} />;
  }
}

export default Skeedoo;