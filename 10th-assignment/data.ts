export interface Book {
  id: number;
  title: string;
  author: string;
  imgUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    imgUrl: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    imgUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    imgUrl: "https://covers.openlibrary.org/b/id/5897643-L.jpg",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
    imgUrl: "https://covers.openlibrary.org/b/id/7222266-L.jpg",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imgUrl: "https://covers.openlibrary.org/b/id/7944916-L.jpg",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    imgUrl: "https://covers.openlibrary.org/b/id/8225635-L.jpg",
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    imgUrl: "https://covers.openlibrary.org/b/id/8231990-L.jpg",
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgUrl: "https://covers.openlibrary.org/b/id/8168693-L.jpg",
  },
];
