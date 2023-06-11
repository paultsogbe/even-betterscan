// ------------------------------------------
import React, { useState, useRef, useCallback, useEffect } from "react";
import Nft from "./Nft";

function Placeholder() {
    return (
        <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs bg-gray-200 animate-pulse"></div>
        </div>
    );
}

function ScrollCarousel(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(7);
    const [isLoading, setIsLoading] = useState(false);
    const [currentResults, setCurrentResults] = useState([]);

    console.log(props.tendanceOption);

    const observer = useRef();

    const lastResultRef = useCallback(
        (node) => {
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !isLoading) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setCurrentPage((currentPage) => currentPage + 1);
                        setIsLoading(false);
                    }, 3000); // Modify the delay duration here (in milliseconds)
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [setCurrentPage, setIsLoading, isLoading]
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [props.data, props.alltime]);

    useEffect(() => {
        setCurrentResults(() => {
            if (
                props.tendanceOption === "option1" ||
                props.tendanceOption === "title"
            ) {
                return props.data.slice(0, currentPage * resultsPerPage);
            } else if (props.tendanceOption === "option2") {
                return props.alltime.slice(0, currentPage * resultsPerPage);
            }
            return [];
        });
    }, [
        currentPage,
        props.data,
        props.alltime,
        props.tendanceOption,
        resultsPerPage,
    ]);

    console.log(currentResults);

    const placeholders = Array(currentResults.length)
        .fill()
        .map((_, index) => <Placeholder key={index} />);

    return (
        <div className="flex flex-col bg-background1 m-auto p-auto mb-20">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar carrousel">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 relative">
                    {isLoading ? placeholders : null}
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
                    <div className="inline-block px-3">
                        {/* Placeholder for left scroll */}
                    </div>
                    {currentResults.length > 0 && (
                        <div className="inline-block px-3">
                            {/* Placeholder for right scroll */}
                        </div>
                    )}
                    <div className="inline-block px-3" ref={lastResultRef}>
                        {/* Empty div used as a reference for the last visible result */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollCarousel;
