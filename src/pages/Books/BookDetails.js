import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchBook = () => {
            axios.get(`http://localhost:3000/books/${id}`)
                .then((result) => {
                    setBook(result.data)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        fetchBook();
    }, [id]);

    return (
        <div className="pt-[80px]">
            <div className="p-[20px] flex justify-center">
                <table className="w-[80%]">
                    <tbody>
                        <tr>
                            <td className="font-semibold">ID</td>
                            <td>{book?.id}</td>
                            <td className="font-semibold">Author</td>
                            <td>{book?.author}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Title</td>
                            <td>{book?.title}</td>
                            <td className="font-semibold">Publish Year</td>
                            <td>{book?.year}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Country</td>
                            <td>{book?.country}</td>
                            <td className="font-semibold">Language</td>
                            <td>{book?.language}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Pages</td>
                            <td>{book?.pages}</td>
                            <td className="font-semibold">Reference</td>
                            <td><a href={book?.link} target="_blank" rel="noreferrer" className="hover:underline text-blue-600">{book?.link}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookDetails;