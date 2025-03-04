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


//SNACK 4
const ages = books.map(b => b.author.age)
console.log(ages)

const agesSum = ages.reduce((acc, age) => acc + age, 0)
console.log(agesSum)

const agesSumAvg = agesSum / ages.length
console.log(agesSumAvg)


//SNACK 5
async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getBooks(ids) {
    const promises = ids.map(id => {
        return fetchJson(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`)
    })
    const books = await Promise.all(promises)
    return books
}

const idsTest = [2, 13, 7, 21, 19]
getBooks(idsTest)
    .then(data => console.log(data))
    .catch(err => console.error(err))


//SNACK 6
const areThereAvailableBooks = books.some(b => b.available === true)
console.log(areThereAvailableBooks)

const booksByPrice = books.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

booksByPrice.sort((a, b) => (b.available === true) - (a.available === true)) //1 - 0
console.log(booksByPrice)


//SNACK 7
const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach(tag => {
        if (acc[tag]) {
            acc[tag] += 1
        } else {
            acc[tag] = 1
        }
    })
    return acc
}, [])

console.log(tagCounts)