import './HowCard.css'

function HowCard({ how_card_info }) {
    return (
        <div className={`how_card ${how_card_info.class}`}>
            {
                how_card_info.icon
            }
            <h3> {how_card_info.title}</h3>
            <p>{how_card_info.desc}</p>
        </div>
    )
}

export default HowCard