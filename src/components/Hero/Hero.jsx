import './Hero.css'
import hero_bg from './../../assets/images/hero_bg.png'
import small_hero_bg from './../../assets/images/small_hero_bg.png'
import HeroCard from '../HeroCard/HeroCard'
import location_img from './../../assets/images/location.png'
import price_img from './../../assets/images/price.png'
import property_img from './../../assets/images/property.png'
import { useEffect, useState } from 'react'

function Hero() {
    const card_info = [
        {
            title: 'Location',
            desc: 'Ahmedabad, India',
            img: location_img,
        },
        {
            title: 'Price',
            desc: '$1000 - $10,000',
            img: price_img,
        },
        {
            title: 'Type of Property',
            desc: 'Apartment',
            img: property_img,
        },
    ]
    const [imageSrc, setImageSrc] = useState(window.innerWidth < 800 ? small_hero_bg : hero_bg);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 800) {
            setImageSrc(small_hero_bg);
          } else {
            setImageSrc(hero_bg);
          }
        };
    
        window.addEventListener('resize', handleResize);
    

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <div className='hero'>
            <img className='hero_img' src={imageSrc} alt="hero img" />
            <div className='title_container'>
                <h1>Discover a place
                    you will love to live</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Imperdiet tempus felis vitae sit est quisque.</p>
                <div className='hero_card_container'>
                    {
                        card_info.map((c, i) => {
                            return <HeroCard card_info={c} key={i} />
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero