import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { deleteBook, getListBooks } from "../../services/books";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredBooks, setFilteredBooks] = useState([]);
    let booksPerPage = 10;
    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        const getBooks = () => {
            const params = {
                _page: currentPage,
                _per_page: booksPerPage
            }
            getListBooks(params)
                .then((result) => {
                    setBooks(result);
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                })
        };
        getBooks();
    }, [currentPage, booksPerPage, books]);

    const navigate = useNavigate();

    const handleDeleteBook = (id) => {
        const confirm = window.confirm("Do you really want to delete this book");
        if (confirm) {
            deleteBook(id).catch((error)=>{console.log(error)});
            navigate("/books");
        }
    }

    return (
        <div className="p-[20px] mt-[80px]">
            <div className="mb-6">
                <Link to="add" target="_blank" rel="noreferrer" className="bg-[#d6001c] text-white hover:bg-white hover:text-[#d6001c] hover:outline-[#d6001c] hover:outline rounded-lg px-4 py-2 font-semibold">
                    Add
                </Link>
            </div>
            <table className="border border-black border-collapse w-full">
                <thead>
                    <tr>
                        <th className="border border-black w-[40px]">Id</th>
                        <th className="border border-black w-[300px]">Title</th>
                        <th className="border border-black">Author</th>
                        <th className="border border-black">Language</th>
                        <th className="border border-black w-[240px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.data?.map((book, index) => 
                        <tr className="border-b h-[60px]" key={index}>
                            <td className="w-[80px] text-center">{book.id}</td>
                            <td className="px-4">{book.title}</td>
                            <td className="px-4 text-center">{book.author}</td>
                            <td className="px-4 text-center">{book.language}</td>
                            <td className="">
                                <div className="flex gap-2 justify-center items-center h-full">
                                    <Link to={book.id} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-[green] text-white">Details</Link>
                                    <Link to={`edit/${book.id}`} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-yellow-600 text-white">Edit</Link>
                                    <button onClick={()=>{handleDeleteBook(book.id)}} className="px-3 py-1 rounded bg-[#d6001c] text-white">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-end w-full mt-6">
                <Pagination
                    length={books?.items}
                    itemsPerPage={booksPerPage}
                    currentPage={currentPage}
                    handlePagination={handlePagination}
                />
            </div>
            
        </div>
    );
};

export default Books;