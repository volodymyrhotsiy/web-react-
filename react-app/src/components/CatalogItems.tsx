import CatalogCard from './CatalogCard';
import { useState } from 'react';
import Header from './Header';

function CatalogItems() {
    const items = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU',
            title: 'Myaus',
            age: 2,
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU',
            title: 'Catus',
            age: 1,
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
        {
            img: 'https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg',
            title: 'Jenny',
            age: 3,
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
    ];

    const [visibleItems, setVisibleItems] = useState(items);

    const sortItemsByTitle = () => {
        setVisibleItems([...visibleItems].sort((a, b) => a.title.localeCompare(b.title)));
    };

    const sortItemsByAge = () => {
        setVisibleItems([...visibleItems].sort((a, b) => a.age - b.age));
    };

    const sortItemsByTitleLength = () => {
        setVisibleItems([...visibleItems].sort((a, b) => a.title.length - b.title.length));
    };

    const handleSearch = (searchInput: string) => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
        setVisibleItems(filteredItems);
    };

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
