import { useState, useEffect } from "react";

function Placeholder() {
    return (
        <tr>
            <td className="placeholder" colSpan={5}></td>
        </tr>
    );
}

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

    const placeholders = Array(visibleResults.length)
        .fill()
        .map((_, index) => <Placeholder key={index} />);

    return (
        <div>
            {/* Render the select for results per page if you want to keep it */}
            <table className="w-full mt-2">
                <thead>
                    <tr className="text-left">
                        <th className="text-sm text-text2 w-8 h-5 font-sans font-bold">
                            Nom
                        </th>
                        <th className="text-sm text-text2 font-bold font-sans">
                            Symbole
                        </th>
                        <th className="text-sm text-text2 font-bold font-sans">
                            Dernier prix
                        </th>
                        <th className="text-sm text-text2 font-bold font-sans">
                            Nombre de détenteurs
                        </th>
                        <th className="text-sm text-text2 font-bold font-sans">
                            Capitalisation sur Ethereum
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? placeholders : null}
                    {visibleResults.map((el, key) => {
                        return (
                            <tr key={key}>
                                <td className="text-base text-text4 flex my-2 mr-20 font-medium font-sans">
                                    <img
                                        className="mr-2 w-5 h-5 name"
                                        src={el.img}
                                        alt=""
                                    />
                                    {el.name}
                                </td>
                                <td className="text-base text-text3 h-6 w-20 symbol font-medium font-sans">
                                    {el.symbol}
                                </td>
                                <td className="text-base text-text4 h-6 w-20 price font-medium font-sans">
                                    {el.price} $
                                </td>
                                <td className="text-base text-text4 h-6 w-20 holders font-medium font-sans">
                                    {el.holders}
                                </td>
                                <td className="text-base text-text3 h-6 w-20 capitalize font-medium font-sans">
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
