import "./Global.css"

function CardList() {
    return <div className="wrapper">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>      
            <div className="col">
                <div className="card">
                    <img src="https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
}

export default CardList;
