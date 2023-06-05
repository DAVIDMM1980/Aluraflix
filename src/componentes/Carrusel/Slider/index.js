
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "./Carousel.css"
import { buscar } from "../../Api";
import ReactPlayer from 'react-player'
import Banner from '../../Banner';
import { StyledBox4,StyledBoxBanner,StyledBoxVideo,StyledBoxCarrusel,StyledBoxCarruselimage,
  StyledBoxCarrusecontainer,StyledBoxPost_stitle,StyledBoxPost_stitle2,StyledBoxCarrusecontainer2} from "../../UI"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

const MyCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    buscar(`/posts`, setPosts);
  }, []);

  const handleImageClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <>
   < StyledBox4>
   
   <StyledBoxBanner><Banner/></StyledBoxBanner>
  <StyledBoxVideo><MyPlayer selectedPost={selectedPost} /></StyledBoxVideo>
   <StyledBoxCarrusel> <MySlider posts={posts} handleImageClick={handleImageClick} settings={settings} /></StyledBoxCarrusel>

      </StyledBox4>
    </>
  );
};

const MySlider = ({ posts, handleImageClick, settings }) => {
  return (
    <section className="posts container">
      {['Asesinos', 'Vampiros', 'Monstruos'].map(categoria => {
        const filteredPosts = posts.filter(post => post.categoria === categoria);

        return (
          <StyledBoxCarrusecontainer>
           <StyledBoxPost_stitle>{categoria}</StyledBoxPost_stitle>
            <StyledBoxCarrusecontainer2>
              <Slider {...settings}>
                {filteredPosts.map(post => (
                  <div key={post.id}>
                    <StyledBoxPost_stitle2>{post.nombre}</StyledBoxPost_stitle2>
                    <StyledBoxCarruselimage>
                    <img src={post.foto} alt={post.nombre} 
                    onClick={() => handleImageClick(post)} 
                    style={{ height: '320px', width: '240px' }}/>
                    </StyledBoxCarruselimage>
                  </div>
                ))}
              </Slider>
            </StyledBoxCarrusecontainer2>
          </StyledBoxCarrusecontainer>
        );
      })}
    </section>
  );
};

const MyPlayer = ({ selectedPost }) => {
  return (
    selectedPost && (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={selectedPost.linkVideo}
          width='480px'
          height='360px'
          controls={true}
        />
      </div>
    )
  );
};

export default MyCarousel;
export { MySlider, MyPlayer };
