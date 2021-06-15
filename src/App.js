import React, {Component} from 'react';
import axios from 'axios';




class App extends Component{


    state = {
          pictures: [],
          filter: '',
          showModal: false,
        }

  componentDidMount() {
    axios
      .get('https://pixabay.com/api/?q=лето&page=номер_страницы&key=21271136-bb8fcb5deeeca7c55db92c216&image_type=photo&orientation=horizontal&per_page=12')
      .then(response => {
        // console.log(response.data));
        this.setState({ pictures: response.data });
      })
      .catch(error => this.setState({ error }));
    }

  render() {

        return (
          <div>
            Test
            </div>
        );
    }
}
  

export default App;
