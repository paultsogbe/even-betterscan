// import { useState, useEffect } from "react";
// ----------CETTE PARTIE A UNE AFFICHAGE NORMALE

// function Table(props) {
//     // console.log(props.jeton);
//     // console.log(props.volume);
//     const [visibleResults, setVisibleResults] = useState(
//         props.jeton.slice(0, 10) // Render the first 10 results initially
//     );
//     console.log(props.jeton);

//     useEffect(() => {
//         function handleScroll() {
//             const { scrollTop, clientHeight, scrollHeight } =
//                 document.documentElement;
//             if (scrollTop + clientHeight >= scrollHeight - 10) {
//                 // Load more results when user reaches near the bottom of the page
//                 setVisibleResults((prevVisibleResults) => {
//                     if (
//                         props.selectedOption === "option1" ||
//                         props.selectedOption === "title"
//                     ) {
//                         return props.jeton.slice(
//                             0,
//                             prevVisibleResults.length + 10
//                         ); // Render 10 more results at a time
//                     } else if (props.selectedOption === "option2") {
//                         return props.volume.slice(
//                             0,
//                             prevVisibleResults.length + 10
//                         );
//                     }
//                 });
//             }
//         }

//         setVisibleResults(
//             props.selectedOption === "option1" ||
//                 props.selectedOption === "title"
//                 ? props.jeton.slice(0, 10)
//                 : props.volume.slice(0, 10)
//         );
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [props.jeton, props.selectedOption, props.volume]);

//     return (
//         <div>
//             {/* Render the select for results per page if you want to keep it */}

//             <table className="w-full ml-10 mt-12">
//                 <thead>
//                     <tr className="text-left">
//                         <th className="text-sm font-light text-text2 w-8 h-5 ">
//                             Nom
//                         </th>
//                         <th className="text-sm  text-text2 font-medium">
//                             Symbole
//                         </th>
//                         <th className="text-sm  text-text2 font-medium">
//                             Dernier prix
//                         </th>
//                         <th className="text-sm  text-text2 font-medium ">
//                             Nombre de détenteurs
//                         </th>
//                         <th className="text-sm  text-text2 font-medium ">
//                             Capitalisation sur Ethereum
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {visibleResults.map((el, key) => {
//                         return (
//                             <tr key={key}>
//                                 <td className=" text-base text-text4 flex my-2 mr-20 font-medium ">
//                                     <img
//                                         className="mr-2 w-5 h-5 name"
//                                         src={el.img}
//                                         alt=""
//                                     />
//                                     {el.name}
//                                 </td>

//                                 <td className="text-sm text-text3 h-6 w-20 symbol font-medium">
//                                     {el.symbol}
//                                 </td>

//                                 <td className="text-sm text-text4 h-6 w-20 price font-medium">
//                                     {el.price} $
//                                 </td>
//                                 <td className="text-sm text-text4 h-6 w-20 holders font-medium">
//                                     {el.holders}
//                                 </td>
//                                 <td className="text-sm text-text3 h-6 w-20 capitalize font-medium">
//                                     {el.onChainMarketCap} $
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Table;

// ------------------0ption 2--------CETTE PARTIE S'AFFICHE PAR SECONDE-------

// import { useState, useEffect } from "react";

// function Table(props) {
//     const [isLoading, setIsLoading] = useState(true);
//     const [visibleResults, setVisibleResults] = useState([]);

//     useEffect(() => {
//         function handleScroll() {
//             const { scrollTop, clientHeight, scrollHeight } =
//                 document.documentElement;
//             if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
//                 setIsLoading(true);
//             }
//         }

//         setVisibleResults(
//             props.selectedOption === "option1" ||
//                 props.selectedOption === "title"
//                 ? props.jeton.slice(0, 10)
//                 : props.volume.slice(0, 10)
//         );
//         setIsLoading(false);
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [props.jeton, props.selectedOption, props.volume, isLoading]);

//     useEffect(() => {
//         if (isLoading) {
//             setTimeout(() => {
//                 setVisibleResults((prevVisibleResults) => {
//                     if (
//                         props.selectedOption === "option1" ||
//                         props.selectedOption === "title"
//                     ) {
//                         return props.jeton.slice(
//                             0,
//                             prevVisibleResults.length + 10
//                         ); // Render 10 more results at a time
//                     } else if (props.selectedOption === "option2") {
//                         return props.volume.slice(
//                             0,
//                             prevVisibleResults.length + 10
//                         );
//                     }
//                 });
//                 setIsLoading(false);
//             }, 1000); // Wait for 0,5 seconds before loading more results
//         }
//     }, [isLoading, props.jeton, props.selectedOption, props.volume]);

//     return (
//         <div>
//             {/* Render the select for results per page if you want to keep it */}

//             <table className="w-full ml-10 mt-12">
//                 <thead>
//                     <tr className="text-left">
//                         <th className="text-sm font-light text-text2 w-8 h-5 ">
//                             Nom
//                         </th>
//                         <th className="text-sm  text-text2 font-medium">
//                             Symbole
//                         </th>
//                         <th className="text-sm  text-text2 font-medium">
//                             Dernier prix
//                         </th>
//                         <th className="text-sm  text-text2 font-medium ">
//                             Nombre de détenteurs
//                         </th>
//                         <th className="text-sm  text-text2 font-medium ">
//                             Capitalisation sur Ethereum
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {visibleResults.map((el, key) => {
//                         return (
//                             <tr key={key}>
//                                 <td className=" text-base text-text4 flex my-2 mr-20 font-medium ">
//                                     <img
//                                         className="mr-2 w-5 h-5 name"
//                                         src={el.img}
//                                         alt=""
//                                     />
//                                     {el.name}
//                                 </td>

//                                 <td className="text-sm text-text3 h-6 w-20 symbol font-medium">
//                                     {el.symbol}
//                                 </td>

//                                 <td className="text-sm text-text4 h-6 w-20 price font-medium">
//                                     {el.price} $
//                                 </td>
//                                 <td className="text-sm text-text4 h-6 w-20 holders font-medium">
//                                     {el.holders}
//                                 </td>
//                                 <td className="text-sm text-text3 h-6 w-20 capitalize font-medium">
//                                     {el.onChainMarketCap} $
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Table;

// Option 3---------------CETTE PARTIE DE CODE S' AFFICHE PAR SECONDE(par portion)

import { useState, useEffect } from "react";

function Table(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [visibleResults, setVisibleResults] = useState([]);

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
                setIsLoading(true);
            }
        }

        setVisibleResults(() => {
            if (
                props.selectedOption === "option1" ||
                props.selectedOption === "title"
            ) {
                return props.jeton.slice(0, 10);
            } else if (props.selectedOption === "option2") {
                return props.volume.slice(0, 10);
            }
            return [];
        });
        setIsLoading(false);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [props.jeton, props.selectedOption, props.volume]);

    useEffect(() => {
        let timer;
        if (isLoading) {
            timer = setTimeout(() => {
                setVisibleResults((prevVisibleResults) => {
                    if (
                        props.selectedOption === "option1" ||
                        props.selectedOption === "title"
                    ) {
                        return props.jeton.slice(
                            0,
                            prevVisibleResults.length + 10
                        );
                    } else if (props.selectedOption === "option2") {
                        return props.volume.slice(
                            0,
                            prevVisibleResults.length + 10
                        );
                    }
                    return prevVisibleResults;
                });
                setIsLoading(false);
            }, 500);
        }
        return () => clearTimeout(timer);
    }, [isLoading, props.jeton, props.selectedOption, props.volume]);

    return (
        <div>
            {/* Render the select for results per page if you want to keep it */}
            <table className="w-full mt-2">
                <thead>
                    <tr className="text-left">
                        <th className="text-sm  text-text2 w-8 h-5 font-sans font-medium ">
                            Nom
                        </th>
                        <th className="text-sm  text-text2 font-medium font-sans">
                            Symbole
                        </th>
                        <th className="text-sm  text-text2 font-medium font-sans">
                            Dernier prix
                        </th>
                        <th className="text-sm  text-text2 font-medium font-sans">
                            Nombre de détenteurs
                        </th>
                        <th className="text-sm  text-text2 font-medium font-sans">
                            Capitalisation sur Ethereum
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {visibleResults.map((el, key) => {
                        return (
                            <tr key={key}>
                                <td className=" text-base text-text4 flex my-2 mr-20 font-medium  font-sans">
                                    <img
                                        className="mr-2 w-5 h-5 name"
                                        src={el.img}
                                        alt=""
                                    />
                                    {el.name}
                                </td>

                                <td className="text-sm text-text3 h-6 w-20 symbol font-medium font-sans">
                                    {el.symbol}
                                </td>

                                <td className="text-sm text-text4 h-6 w-20 price font-medium font-sans">
                                    {el.price} $
                                </td>
                                <td className="text-sm text-text4 h-6 w-20 holders font-medium font-sans">
                                    {el.holders}
                                </td>
                                <td className="text-sm text-text3 h-6 w-20 capitalize font-medium font-sans">
                                    {el.onChainMarketCap} $
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
