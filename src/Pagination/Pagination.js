import React, { useEffect, useState } from "react";
import './Pagination.css'

const page_size = 12;

export const Pagiantion = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const productData = await fetch('https://dummyjson.com/products?limit=106');
        const all_data = await productData.json();
        setAllProduct(all_data.products);
    };

    const total_products = allProduct.length;
    const total_pages = Math.ceil(total_products / page_size);
    const start = currentPage * page_size;
    const end = start + page_size;

    const handlePageSelection = (num) => {
        setCurrentPage(num);
    };

    const handlePrevClick = () => {
        if (currentPage !== 0) {
            setCurrentPage((prev) => prev - 1)
        }
    };
    const handleNextClick = () => {
        if (currentPage !== total_pages - 1) {
            setCurrentPage((prev) => prev + 1)
        }
    };

    return (
        <>
            <h3 style={{ textAlign: "center" }}>Pagination</h3>
            {!allProduct.length ? (<h5 style={{ margin: "0 0 0 20px" }}>No Product Found</h5>) : (
                <>
                    <div className="pagination-body">
                        <span
                            className={currentPage === 0 ? "move-page-disable" : "move-page"}
                            onClick={handlePrevClick}
                        >
                            {"<<"}
                        </span>
                        {[...Array(total_pages).keys()].map((n, i) => (
                            <span
                                key={i}
                                className={currentPage === i ? "selected-page" : "page-nummber"}
                                onClick={() => handlePageSelection(n)}
                            >
                                {n + 1}
                            </span>
                        )
                        )}
                        <span
                            className={currentPage + 1 === total_pages ? "move-page-disable" : "move-page"}
                            onClick={handleNextClick}
                        >
                            {">>"}
                        </span>
                    </div>
                    <div className="page-container">
                        {allProduct.slice(start, end).map((d, index) => {
                            return (
                                <>
                                    <div key={index} className="harik product-container">
                                        <img src={d.thumbnail} alt="img" className="img-style" />
                                        <span className="title">{d.title}</span>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}