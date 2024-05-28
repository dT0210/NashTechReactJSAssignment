import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookDetails, updateBook } from "../../services/books";
import InputField from "../../components/InputField";

const EditBook = () => {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        year: new Date().getFullYear(),
        country: '',
        language: '',
        pages: 0,
        link: ''
    });

    useEffect(() => {
        getBookDetails(id)
            .then((res) => {
                setFormData(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleValueOnChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const navigate = useNavigate();

    const handleFormSubmit = () => {
        updateBook(id, formData);
        navigate("/books");
    }

    return (
        <div className="pt-[80px]">
            <div className="flex justify-center items-center pt-[20px]">
                <form action="" onSubmit={handleFormSubmit} className="">
                    <div className="text-2xl mb-[12px] font-medium">Edit a book</div>
                    <table className="border-separate border-spacing-3">
                        <tr>
                            <td>
                                <InputField
                                    disabled={true}
                                    name="id"
                                    id="id"
                                    value={formData.id}
                                    onChange={handleValueOnChange}
                                    label="ID"
                                />
                            </td>
                            <td>
                                <InputField
                                    name="author"
                                    id="author"
                                    value={formData.author}
                                    onChange={handleValueOnChange}
                                    label="Author"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputField
                                    name="title"
                                    id="title"
                                    value={formData.title}
                                    onChange={handleValueOnChange}
                                    label="Title"
                                />
                            </td>
                            <td>
                                <InputField
                                    type="number"
                                    name="year"
                                    id="year"
                                    value={formData.year}
                                    onChange={handleValueOnChange}
                                    label="Publish Year"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputField
                                    name="country"
                                    id="country"
                                    value={formData.country}
                                    onChange={handleValueOnChange}
                                    label="Country"
                                />
                            </td>
                            <td>
                                <InputField
                                    name="language"
                                    id="language"
                                    value={formData.language}
                                    onChange={handleValueOnChange}
                                    label="Language"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputField
                                    type="number"
                                    name="pages"
                                    id="pages"
                                    value={formData.pages}
                                    onChange={handleValueOnChange}
                                    label="Pages"
                                />
                            </td>
                            <td>
                                <InputField
                                    name="link"
                                    id="link"
                                    value={formData.link}
                                    onChange={handleValueOnChange}
                                    label="Reference link"
                                />
                            </td>
                        </tr>
                    </table>
                    <button className="block mx-auto px-6 py-3 bg-[#d6001c] text-white font-medium rounded-md">Update</button>
                </form>
            </div>
           
        </div>
    );
};

export default EditBook;