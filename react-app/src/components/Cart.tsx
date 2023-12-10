import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import CatalogCard from "./CatalogCard";
import { removeItem } from "../state/Items/ItemsSlice";

function Cart() {
    const items = useSelector((state: RootState) => state.items.itemsList);
    const dispatch = useDispatch();

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>
            <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {items.map((item, index) => (
                    <div className="col" key={index} style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px' }}>
                        <CatalogCard img={item.img} age={item.age} title={item.title} text={item.text} />
                        <button className="btn btn-primary" onClick={() => dispatch(removeItem(item))}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cart;
