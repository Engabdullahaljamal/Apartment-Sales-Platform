import MainTitle from '../MainTitle/MainTitle'
import './BestDealsSec.css'
import b_img1 from './../../assets/images/b_img1.png'
import b_img2 from './../../assets/images/b_img2.png'
import b_img3 from './../../assets/images/b_img3.png'
import BestDealsImg from '../BestDealsImg/BestDealsImg'
function BestDealsSec() {
    const title_info = {
        title: 'Best Real Estate Deals',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
    }
    const images = [
        {
            img: b_img1,
        },
        {
            img: b_img2,
        },
        {
            img: b_img3,
        },
    ]
    return (
        <div id='best_deals'>
            <MainTitle title_info={title_info} />
            <ul className='option_container'>
                <li>Residential Property</li>
                <li>Commercial Property</li>
                <li>Agriculture Property</li>
                <li>Industrial Property</li>

            </ul>
            <div className='best_deals_img_container' >
                {
                    images.map((img, i) => {
                        return <BestDealsImg image={img} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default BestDealsSec