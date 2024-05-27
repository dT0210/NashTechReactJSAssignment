const Pagination = (props) => {
    const {postsPerPage, length, handlePagination} = props;
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumbers.push(i);
    }

    return (
        <div>
            {paginationNumbers.map((pageNumber) => (
                <button 
                    key={pageNumber}
                    onClick={handlePagination}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Pagination;