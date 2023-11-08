import Card from './Card';

function CatalogItems() {
    const items = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU',
            title: 'Card 1',
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU',
            title: 'Card 2',
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
        {
            img: 'https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg',
            title: 'Card 3',
            text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        },
    ];

    return (
        <div className="wrapper">
            {items.map((item, index) => (
                <div className="col" key={index}>
                    <Card img={item.img} title={item.title} text={item.text} />
                </div>
            ))}
        </div>
    );
}

export default CatalogItems;
