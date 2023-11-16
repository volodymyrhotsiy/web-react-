import { useState } from 'react';
import Card from './Card';

function CardList() {
    const cardData = [
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU",
            title: "Card 1",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU",
            title: "Card 2",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            imgSrc: "https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg",
            title: "Card 3",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU",
            title: "Card 1",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU",
            title: "Card 2",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            imgSrc: "https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg",
            title: "Card 3",
            text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        }
    ];

    const [visibleItems, setVisibleItems] = useState(cardData.slice(0, 3));

    const handleClick = () => {
        setVisibleItems(cardData);
    };

    return (
        <>
            <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {visibleItems.map((card, index) => (
                    <div className="col" key={index} style={{ flex: '0 0 calc(33.33% - 10px)', marginBottom: '10px' }}>
                        <Card img={card.imgSrc} title={card.title} text={card.text} />
                    </div>
                ))}
            </div>
            {visibleItems.length < cardData.length && (
                <div className="wrapper">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button onClick={handleClick} className="btn btn-primary" type="button">
                            View more
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardList;