import './HeroCard.css'

function HeroCard({ card_info }) {
    return (
        <div className='hero_card'>
            <div className='icon_container'>
                <img src={card_info.img} alt="" />
            </div>
            <div className='title_desc_container'>
                <h6>{card_info.title}</h6>
                <p> {card_info.desc}</p>
            </div>
        </div>
    )
}

export default HeroCard