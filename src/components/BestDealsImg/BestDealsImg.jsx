import './BestDealsImg.css'

function BestDealsImg({ image }) {
    return (
        <div className='best_deals_img_card'>
           
            <img src={image.img} alt="" />
            <div className='img_button_container'>
                <div className='featured'>Featured</div>
                <div className='three_d'>3D</div>
            </div>
        </div>

    )
}

export default BestDealsImg