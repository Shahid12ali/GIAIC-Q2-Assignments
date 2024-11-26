export const books = [
  {
    id: 1,
    title: "To Kill A Mocking Bird",
    shortIntro:
      "To Kill a Mockingbird is a 1961 novel by Harper Lee. Set in small-town Alabama, ",
    price: 14.99,
    availability: true,
    src: "/images/book1.jpg",
  },
  {
    id: 2,
    title: "1984",
    shortIntro:
      "A dystopian novel about totalitarianism and surveillance, written by George Orwell.",
    price: 12.99,
    availability: false,
    src: "/images/book2.jpg",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    shortIntro:
      "The opening lines of The Great Gatsby are: In my younger and more vulnerable years my father.",
    price: 10.99,
    availability: true,
    src: "/images/book3.jpg",
  },
  {
    id: 4,
    title: "Moby Dick",
    shortIntro:
      "A novel about the obsessive quest of Captain Ahab to seek revenge on the giant white whale, Moby-Dick.",
    price: 11.99,
    availability: true,
    src: "/images/book4.jpg",
  },
  {
    id: 5,
    title: "Pride And Prejudice",
    shortIntro:
      "The famous first sentence of Pride and Prejudice is: “It is a truth universally acknowledged,",
    price: 16.5,
    availability: true,
    src: "/images/book5.jpg",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    shortIntro:
      "A coming-of-age novel that explores themes of alienation and adolescent angst, by J.D. Salinger.",
    price: 18.5,
    availability: false,
    src: "/images/book6.jpg",
  },
  {
    id: 7,
    title: "The Lord Of The Rings",
    shortIntro:
      "The story starts with The Fellowship of the Ring,in which the placid Shire is upended by the finding of the One Ring.",
    price: 17.99,
    availability: true,
    src: "/images/book7.jpg",
  },
  {
    id: 8,
    title: "The Alchemist",
    shortIntro:
      "The Alchemist tells about the Andalusian boy (Santiago) who takes a journey to Egypt. He is a shepherd boy that wants to change his life.",
    price: 8.99,
    availability: true,
    src: "/images/book8.jpg",
  },
  {
    id: 9,
    title: "Rich Dad Poor Dad",
    shortIntro:
      "Rich Dad, Poor Dad by Robert T. Kiyosaki is a personal finance book that emphasizes the importance of financial education,",
    price: 18.99,
    availability: true,
    src: "/images/book9.jpg",
  },
];

export interface Book {
  id: number;
  title: string;
  shortIntro: string;
  price: number;
  availability: boolean;
  src: string;
}
