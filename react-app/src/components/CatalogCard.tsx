import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../state/Items/ItemsSlice";

interface CardProps {
    img: string;
    title: string;
    age: number;
    text: string;
}

function CatalogCard(props: CardProps) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(props));
    };

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt="Cat Image" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.age}</p>
                    <p className="card-text">{props.text}</p>
                    <Link to={`/catalog/${props.title}`} className="btn btn-primary">
                        View more
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-secondary"
                        style={{ margin: "10px" }}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
}

export default CatalogCard;
