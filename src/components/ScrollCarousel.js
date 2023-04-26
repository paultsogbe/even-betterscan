// import React, { useState } from "react";
// import Nft from "./Nft";
// import { getHomeData } from "./getHomeData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function ScrollCarousel(props) {
//     // ---------par segments (chunk)---------------
//     const resultPerPageOptions = [5];

//     const [currentPage, setCurrentPage] = useState(1);

//     const [resultsPerPage, setResultsPerPage] = useState(5);

//     const lastPage = props.data.length / resultPerPageOptions;

//     const firstPage = 1;

//     console.log(lastPage);
//     console.log(props.data.length);
//     console.log(props.data);

//     const indexOfLastResult = currentPage * resultsPerPage;
//     const indexOfFirstResult = indexOfLastResult - resultsPerPage;

//     const currentResults = props.data.slice(
//         indexOfFirstResult,
//         indexOfLastResult
//     );

//     console.log(currentResults);

//     function handlePageChange(newPage) {
//         setCurrentPage(newPage);
//     }
//     // -----------fin-----chunk-----------------------

//     return (
//         <div className="flex flex-col bg-background1  m-auto p-auto mb-20 ">
//             <div className="flex overflow-x-scroll pb-10 hide-scroll-bar carrousel">
//                 <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
//                     {/* ----button left and icon */}
//                     <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="rounded text-6xl"
//                     >
//                         <FontAwesomeIcon
//                             icon=" fa-solid fa-circle-chevron-left"
//                             style={{ color: "#ec4899" }}
//                         />
//                     </button>
//                     {/* {props.data.map}--------- */}
//                     {currentResults.map((el, i) => (
//                         <div className="inline-block px-3" key={i}>
//                             <div className="w-64 h-80 max-w-xs overflow-hidden">
//                                 <Nft
//                                     image={el.imgUrl}
//                                     title={el.name}
//                                     description="Plancher: 0.19 ETH"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                     {/* ----button right and icon */}
//                     <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={indexOfLastResult >= props.data.length}
//                         className="rounded text-6xl button-carrousel"
//                     >
//                         <FontAwesomeIcon
//                             icon="  fa-solid fa-circle-chevron-right"
//                             style={{ color: "#ec4899" }}
//                         />
//                     </button>
//                     {/* --------- */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ScrollCarousel;

// -------------------------OPTION 2-- AVEC INTERVAL----------------------------------------------

// import React, { useState, useEffect } from "react";
// import Nft from "./Nft";
// import { getHomeData } from "./getHomeData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function ScrollCarousel(props) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [resultsPerPage, setResultsPerPage] = useState(5);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if (currentPage < props.data.length / resultsPerPage) {
//                 setCurrentPage(currentPage + 1);
//             } else {
//                 setCurrentPage(1);
//             }
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, [currentPage, props.data.length, resultsPerPage]);

//     const indexOfLastResult = currentPage * resultsPerPage;
//     const indexOfFirstResult = indexOfLastResult - resultsPerPage;

//     const currentResults = props.data.slice(
//         indexOfFirstResult,
//         indexOfLastResult
//     );

//     function handlePageChange(newPage) {
//         setCurrentPage(newPage);
//     }

//     return (
//         <div className="flex flex-col bg-background1 m-auto p-auto mb-20">
//             <div className="flex overflow-x-scroll pb-10 hide-scroll-bar carrousel">
//                 <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
//                     <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="rounded text-6xl"
//                     >
//                         <FontAwesomeIcon
//                             icon="fa-solid fa-circle-chevron-left"
//                             style={{ color: "#ec4899" }}
//                         />
//                     </button>
//                     {currentResults.map((el, i) => (
//                         <div className="inline-block px-3" key={i}>
//                             <div className="w-64 h-80 max-w-xs overflow-hidden">
//                                 <Nft
//                                     image={el.imgUrl}
//                                     title={el.name}
//                                     description="Plancher: 0.19 ETH"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                     <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={indexOfLastResult >= props.data.length}
//                         className="rounded text-6xl button-carrousel"
//                     >
//                         <FontAwesomeIcon
//                             icon="fa-solid fa-circle-chevron-right"
//                             style={{ color: "#ec4899" }}
//                         />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ScrollCarousel;

// ---------------------3 em Option---------------
import React, { useState, useRef, useCallback } from "react";
import Nft from "./Nft";
// import { getHomeData } from "./getHomeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScrollCarousel(props) {
    const [results, setResults] = useState(props.data);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;

    const observer = useRef();
    const lastResultRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setCurrentPage((currentPage) => currentPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading]
    );

    const currentResults = results.slice(0, currentPage * resultsPerPage);

    const loadMoreResults = () => {
        setLoading(true);
        setTimeout(() => {
            setResults([...results, ...props()]);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col bg-background1  m-auto p-auto mb-20 ">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar carrousel">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                    {/* ----button left and icon */}
                    <button
                        onClick={() =>
                            setCurrentPage((currentPage) => currentPage - 1)
                        }
                        disabled={currentPage === 1}
                        className="rounded text-6xl"
                    >
                        <FontAwesomeIcon
                            icon=" fa-solid fa-circle-chevron-left"
                            style={{ color: "#ec4899" }}
                        />
                    </button>
                    {/* {props.data.map}--------- */}
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
                    {loading && <p>Loading...</p>}
                    {results.length > currentResults.length && (
                        <button
                            onClick={loadMoreResults}
                            ref={lastResultRef}
                            className="rounded text-6xl button-carrousel"
                        >
                            <FontAwesomeIcon
                                icon="  fa-solid fa-circle-chevron-right"
                                style={{ color: "#ec4899" }}
                            />
                        </button>
                    )}
                    {/* --------- */}
                </div>
            </div>
        </div>
    );
}

export default ScrollCarousel;
