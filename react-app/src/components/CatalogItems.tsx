import CatalogCard from './CatalogCard';
import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useEffect } from 'react';
import './Loader.css';

export const base_url = "http://localhost:5000/cats";

export async function getCats(url: string) {
    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

function CatalogItems() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const items = await getCats(base_url);
                setVisibleItems(items);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const sortItemsByTitle = async () => {
        setLoading(true);
        const items = await getCats(base_url + "/title");
        setVisibleItems(items);
        setLoading(false);
    };

    const sortItemsByAge = async () => {
        setLoading(true);
        const items = await getCats(base_url + "/age");
        setVisibleItems(items);
        setLoading(false);
    };

    const sortItemsByTitleLength = async () => {
        setLoading(true);
        const items = await getCats(base_url + "/text");
        setVisibleItems(items);
        setLoading(false);
    };

    const handleSearch = (searchInput: string) => {
        const filteredItems = visibleItems.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
        setVisibleItems(filteredItems);
    };

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <>
            <Header onSearch={handleSearch} />
            <div className="wrapper">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="btn-group">
                                <button onClick={sortItemsByTitle} type="button" className="btn btn-success">Title</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="btn-group">
                                <button onClick={sortItemsByAge} type="button" className="btn btn-success">Age</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="btn-group">
                                <button onClick={sortItemsByTitleLength} type="button" className="btn btn-success">Text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {visibleItems.map((item, index) => (
                    <div className="col" key={index} style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px' }}>
                        <CatalogCard img={item.img} age={item.age} title={item.title} text={item.text} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default CatalogItems;
