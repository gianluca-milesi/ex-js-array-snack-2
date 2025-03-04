const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//SNACK 1
//Crea una funzione che somma due numeri.
const longBooks = books.filter(b => b.pages > 300)
console.log(longBooks)

const longBooksTitles = longBooks.map(b => b.title)
console.log(longBooksTitles)

longBooksTitles.forEach(title => console.log(title))


//SNACK 2
const availableBooks = books.filter(b => b.available === true)
console.log(availableBooks)

const discountedBooks = availableBooks.map(b => ({
    ...b,
    price: (parseFloat(b.price) * 0.8).toFixed(2) + "€"
}))
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(b => parseFloat(b.price) % 1 === 0)
console.log(fullPricedBook)


//SNACK 3
const authors = books.map(b => b.author)

const areAuthorsAdults = authors.every(a => a.age >= 18)
console.log(areAuthorsAdults)

if (!areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age)
} else {
    authors.sort((a, b) => b.age - a.age)
}
console.log(authors)