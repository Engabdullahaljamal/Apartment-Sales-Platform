import './MainTitle.css'

function MainTitle({ title_info }) {
    return (
        <div className='main_title'>
            <h2>{title_info.title}</h2>
            <p>{title_info.desc}</p>
        </div>
    )
}

export default MainTitle