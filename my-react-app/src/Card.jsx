import Image from './assets/Image.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={Image} alt= "profile picture"></img>
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">I make videos and play games</p>
        </div>
    )
}

export default Card