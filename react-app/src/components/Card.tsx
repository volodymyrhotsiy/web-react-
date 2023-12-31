interface CardProps {
    img: string;
    title: string;
    text: string;
}

function Card(props: CardProps) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt="Cat Image" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default Card;
