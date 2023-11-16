
interface CardProps {
    img?: string;
    title?: string;
    age?: number;
    text?: string;
}

function CardInfo(props:CardProps) {
    
    return <div className="card mb-3">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        </div>
    </div>
}

export default CardInfo;