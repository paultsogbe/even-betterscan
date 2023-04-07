import React, { useState } from "react";
import Nft from "./Nft";
import { getHomeData } from "./getHomeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollCarousel(props) {
    // ---------par segments (chunk)---------------
    const resultPerPageOptions = [5];

    const [currentPage, setCurrentPage] = useState(1);

    const [resultsPerPage, setResultsPerPage] = useState(5);

    const lastPage = props.data.length / resultPerPageOptions;

    const firstPage = 1;

    console.log(lastPage);
    console.log(props.data.length);
    console.log(props.data);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;

    const currentResults = props.data.slice(
        indexOfFirstResult,
        indexOfLastResult
    );

    console.log(currentResults);

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
    }
    // ----------------chunk-----------------------

    return (
        <div className="flex flex-col bg-background1  m-auto p-auto mb-20 ">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar carrousel">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    {/* ----button left and icon */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="rounded text-6xl"
                    >
                        <FontAwesomeIcon
                            icon=" fa-solid fa-circle-chevron-left"
                            style={{ color: "#ec4899" }}
                        />
                    </button>
                    {/* --------- */}
                    {currentResults.map((el, i) => (
                        <div className="inline-block px-3" key={i}>
                            <div className="w-64 h-80 max-w-xs overflow-hidden">
                                <Nft
                                    image={el.imgUrl}
                                    title={el.name}
                                    description="Plancher: 0.19 ETH"
                                />
                            </div>
                        </div>
                    ))}
                    {/* ----button right and icon */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={indexOfLastResult >= props.data.length}
                        className="rounded text-6xl"
                    >
                        <FontAwesomeIcon
                            icon=" fa-solid fa-circle-chevron-right"
                            style={{ color: "#ec4899" }}
                        />
                    </button>
                    {/* --------- */}
                </div>
            </div>
        </div>
    );
}

export default ScrollCarousel;
