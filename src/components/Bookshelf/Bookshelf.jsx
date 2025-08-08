import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState(
        { title: "", author: "", }
    );

    const handleInputChange = (event => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook]);
        setNewBook({ title: "", author: "" });
    };

    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">title: </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">author:</label>
                        <input
                            id="author"
                            name="author"
                            type="text"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit">submit</button>

                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => {
                   return (
                   <div key={index} className="bookCard">
                      
                           <h4> {book.title} </h4>
                            <p>{book.author}</p>
                    </div>)
                })}
            </div>
        </div>
    )
};

export default Bookshelf;