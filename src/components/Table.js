import { useState } from "react";

function Table(props) {
    const resultsPerPageOptions = [5, 10, 20, 50];
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(
        resultsPerPageOptions[0]
    );
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = props.jeton.slice(
        indexOfFirstResult,
        indexOfLastResult
    );

    const lastPage = props.jeton.length / resultsPerPage; // ici je calcule la longueur des jetons et diviser par resultat par pages

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
    }

    function handleResultsPerPageChange(event) {
        setResultsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    }

    return (
        <div>
            {/* cette partie de code permet de choisir combien de resultat par page tu veux et de les affichées */}
            <div>
                <label htmlFor="resultsPerPage">Résultat par page :</label>
                <select
                    id="resultsPerPage"
                    onChange={handleResultsPerPageChange}
                    value={resultsPerPage}
                    className=""
                >
                    {resultsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <table className="w-full ml-10 mt-12">
                <tr className="text-left">
                    <th className="text-sm font-light text-text2 w-8 h-5">
                        Nom
                    </th>
                    <th className="text-sm font-light text-text2">Symbole</th>
                    <th className="text-sm font-light text-text2">
                        Dernier prix
                    </th>
                    <th className="text-sm font-light text-text2 ">
                        Nombre de détenteurs
                    </th>
                    <th className="text-sm font-light text-text2 ">
                        Capitalisation sur Ethereum
                    </th>
                </tr>
                {/* ici je map sur une partie de  silice (exemple 10 jetons) */}
                {currentResults.map((el, key) => {
                    return (
                        <tr key={key}>
                            <td className=" text-base text-text4 flex my-2 mr-20">
                                <img
                                    className="mr-2 w-5 h-5 name"
                                    src={el.img}
                                    alt=""
                                />
                                {el.name}
                            </td>

                            <td className="text-sm text-text3 h-6 w-20 symbol">
                                {el.symbol}
                            </td>

                            <td className="text-sm text-text4 h-6 w-20 price">
                                {el.price} $
                            </td>
                            <td className="text-sm text-text4 h-6 w-20 holders">
                                {el.holders}
                            </td>
                            <td className="text-sm text-text3 h-6 w-20 capitalize">
                                {el.onChainMarketCap} $
                            </td>
                        </tr>
                    );
                })}
            </table>
            {/* buttons */}

            {/* ------btn1 adroite */}
            <div className="mt-5 flex justify-end">
                {/* cet boutton permet d'aller à prémière page */}
                <button
                    onClick={() => setCurrentPage(1)}
                    className="mr-5 bg-background2 py-2 px-2 rounded hover:bg-pink-500 hover:text-white"
                >
                    Première Page
                </button>
                {/* cet permet d'aller à page précédante */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mr-5 bg-background2 py-2 px-2 rounded hover:bg-indigo-600 hover:text-white text-lg"
                >
                    ◀︎
                </button>
                {/* ------------- */}

                {/* ce Parragraphe permet de montrer sur quelle page tu te trouve */}
                <p className="mr-5 bg-background1 py-2 px-2 rounded">
                    Page {currentPage} de {lastPage}
                </p>

                {/* --------btn2  de droite*/}
                {/* ce boutton permet d'aller  en avant */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={indexOfLastResult >= props.jeton.length}
                    className="mr-5 bg-background2 py-2 px-2 rounded hover:bg-indigo-600 hover:text-white text-lg"
                >
                    ▶︎
                </button>
                {/* ce boutton permet d'aller sur la dernière page */}
                <button
                    onClick={() => setCurrentPage(lastPage)}
                    className="mr-5 bg-background2 py-2 px-2 rounded hover:bg-pink-500 hover:text-white"
                >
                    Dèrnière Page
                </button>
            </div>
        </div>
    );
}

export default Table;
