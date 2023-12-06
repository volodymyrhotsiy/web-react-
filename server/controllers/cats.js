let cats = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU",
        title: "John",
        age: 2,
        text: "Adorable cat with a playful personality. Loves to chase toys and cuddle.",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU",
        title: "Kate",
        age: 3,
        text: "Elegant cat with striking features. Enjoys sunbathing and exploring the house.",
    },
    {
        img: "https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg",
        title: "Benny",
        age: 1,
        text: "Playful kitten with boundless energy. Loves to climb and chase after anything that moves.",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAheo_YYcmrsyXM2vDVsjP-nqEoPIfqbN_azLTIhrjY7cLdUfb1vthTIqIHKvjdZV18A&usqp=CAU",
        title: "Billy",
        age: 2,
        text: "Sweet and gentle cat. Enjoys being pampered and will purr at the slightest touch.",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ1nPBsLGniRWG0Be-XEaF63WLfBgZEjeBsWGcaD4PtSxUwhrThAuCf_eS9odLshURU8&usqp=CAU",
        title: "Myaus",
        age: 4,
        text: "Majestic cat with a regal demeanor. Prefers lounging on comfortable surfaces and being treated like royalty.",
    },
    {
        img: "https://i.pinimg.com/736x/d0/9d/29/d09d2961bb9d2a2b1ef5cec3ec38dade.jpg",
        title: "Catus",
        age: 1,
        text: "Curious and adventurous cat. Enjoys exploring new places and meeting new friends.",
    },
];

export const getCats = (req, res) => {
    res.send(cats);
}

export const titleCats = (req, res) => {
    cats = cats.sort((a, b) => a.title.localeCompare(b.title));
    res.send('Done!');
}

export const ageCats = (req, res) => {
    cats = cats.sort((a, b) => a.age - b.age);
    res.send("Done!")
}

export const textCats = (req, res) => {
    cats = cats.sort((a, b) => a.text.length - b.text.length);
    res.send("Done!")
}

export const getCatByName = (req, res) => {
    const { name } = req.params;
    const cat = cats.find((cat) => cat.title === name)
    res.send(cat);
}