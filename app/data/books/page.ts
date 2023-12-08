interface BooksDataList {
    id: number,
    img: string;
    genre: string[];
    title: string;
    author: string;
    description: string;
}

export const BooksData:BooksDataList[] = [
    {
        id: 1,
        img: "/images/book-1.png",
        genre: [
            "Contemporary Romance", "Crime Fiction", "Erotica", "Young Adult", "Dark",
        ],
        title: "The Maddest Obsession",
        author: "Danielle Lori",
        description: "She fears the dark. He rules it. Her dresses are too tight, her heels too tall. She laughs too loudly, eats without decorum, and mixes up most sayings in the book. Little do most know it’s just a sparkly disguise, there to hide one panic attack at a time. Nobody can crack Gianna’s facade . . . no one anyway, until he comes along. Most see a paragon of morality; a special agent upholding the law. In the New York underworld, others know him as a hustler, a killer, his nature as cold as the heart of ice in his chest. Christian Allister has always followed the life plan he’d envisioned in his youth, beneath the harsh lights of a frigid, damp cell. With a proclivity for order and the number three, he’s never been tempted to veer off course. But perhaps one should never say never . . ."
    },
]