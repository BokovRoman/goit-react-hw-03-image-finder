import React, {Component} from 'react';
import fetchGallery from './services/PixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';


class App extends Component{


    state = {
          pictures: [],
          filter: '',
          showModal: false,
        }

        
  
  componentDidMount() {
 

    
    }

   onChangeQuerry = (searchQuery) => {
    this.setState({
      query: searchQuery,
      page: 1,
      pictures: [],
    })
  }   
  
  render() {

        return (
          <div>
            <Searchbar onFormSubmit={this.onChangeQuerry}/>
            Test
            </div>
        );
    }
}
  

export default App;
