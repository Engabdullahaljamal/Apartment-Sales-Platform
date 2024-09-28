import MainTitle from '../MainTitle/MainTitle'
import TrendingCard from '../TrendingCard/TrendingCard'
import t_card1 from './../../assets/images/t_card1.png'
import t_card2 from './../../assets/images/t_card2.png'
import t_card3 from './../../assets/images/t_card3.png'
import t_card4 from './../../assets/images/t_card4.png'
import t_card5 from './../../assets/images/t_card5.png'
import t_card6 from './../../assets/images/t_card6.png'
import './TrendingSec.css'

function TrendingSec() {
    const trending_card_info = [
        {
            img: t_card1,
            price: '$300000',
            title: 'Luxury Apartment in California',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            img: t_card2,
            price: '$330000',
            title: 'Luxury Apartment in london',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            img: t_card3,
            price: '$350000',
            title: 'Luxury Apartment in New york',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            img: t_card4,
            price: '$290000',
            title: 'Luxury Apartment in Texas',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            img: t_card5,
            price: '$270000',
            title: 'Luxury Apartment in California',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
        {
            img: t_card6,
            price: '$250000',
            title: 'Luxury Apartment in New Jersy',
            location: '1901 Thornridge Cir. Shiloh, Hawaii 81063'
        },
    ]
    const title_info = {
        title: 'Most Trending',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    }
    return (
        <div id="trending_sec">
            <MainTitle title_info={title_info} />
            <div className='trending_card_container' >
                {
                    trending_card_info.map((t, i) => {
                        return <TrendingCard trending_card_info={t} key={i} />
                    })
                }
            </div>

        </div>
    )
}

export default TrendingSec