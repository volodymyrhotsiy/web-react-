import { useParams } from "react-router-dom";
import { getCats, base_url } from "./CatalogItems";
import { useEffect, useState } from 'react';
import './Loader.css';

function CardInfo() {
    const { title } = useParams();
    const [cat, setCat] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const catData = await getCats(base_url + "/" + title);
                setCat(catData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [title]);

    if (!cat) {
        return <div className="loader">Loading...</div>;
    }    

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={cat.img} className="card-img-top" alt="Cat Image" />
            <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                <p className="card-text">{cat.age}</p>
                <p className="card-text">{cat.text}</p>
            </div>
        </div>
    );
}

export default CardInfo;
