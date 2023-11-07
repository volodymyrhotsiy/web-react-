function Card() {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src="https://i.pinimg.com/736x/97/d0/2a/97d02ad83bbf9161f2a4d73ff8b95195.jpg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">Cat</h5>
                <p className="card-text">
                    Silly Cute Cat
                </p>
            </div>
        </div>
    );
}

export default Card;
