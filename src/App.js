import React, {Component} from 'react';
import fetchGalleryAPI from './services/PixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component{

  state = {
    images: [],
    largeImage: {
      src: '',
      alt: '',
    },
    currentPage: 1,
    isLoading: false,
    searchQuery: '',
    error: null,
  };

      componentDidUpdate(prevProps, prevState) {
        const {searchQuery} = this.state;

        if (prevState.searchQuery !== searchQuery) {
          this.searchImages();
        }
        if (this.state.images.length > 14) {
          window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
      });
    }
  }
  
    searchImages= () => {
      const { searchQuery, currentPage } = this.state;
      const options = { searchQuery, currentPage };

      this.setState({ isLoading: true });

      fetchGalleryAPI(options)
        .then((images) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
            currentPage: prevState.currentPage + 1,
          }))
        )
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
  };

    onChangeQuery = (query) => {
        this.setState({
          images: [],
          currentPage: 1,
          searchQuery: query,
          error: null,
        });
      };

    onImageClick = (e) => {
      if (e.target !== e.currentTarget) {
        const currentImage = this.state.images.find(
          (image) => image.webformatURL === e.target.src
        );

        const src = currentImage.largeImageURL;
        const alt = currentImage.tags;

        this.setState({ largeImage: { src, alt } });
      }
    };

    onCloseModal = () => {
      this.setState({
        largeImage: {
          src: '',
          alt: '',
        },
      });
    };

  render() {
        const { isLoading, images, largeImage, error } = this.state;
        const ShouldButtonBeVisible = images.length > 0 && !isLoading;
        
      return (
        <div>
          {isLoading && <Loader />}
            <Searchbar onSubmit={this.onChangeQuery} />
            <ImageGallery images={images} onImageClick={this.onImageClick} />
             {ShouldButtonBeVisible && <Button onClick={this.searchImages} />}  
            {largeImage.src !== "" && (
              <Modal
                src={largeImage.src}
                alt={largeImage.alt}
                onClose={this.onCloseModal}
              />
            )}  
        </div>
        );
    }
}
  

export default App;
