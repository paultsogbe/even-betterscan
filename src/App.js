// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import icon from "./assets/images/icon2.svg";
import "./Fonts/WEB/css/satoshi.css";

// Fonts
import "./Fonts/WEB/fonts/Satoshi-Black.ttf";

// Images
import svg from "./assets/images/Rectangle99.png";

import "./App.css";
import DropDown from "./components/DropDown";
import Languages from "./components/Languages";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import SearchBar from "./components/SearchBar";
import Statistique from "./components/Statistique";
import Statistique2 from "./components/Statistique2";
import Statistique3 from "./components/Statistique3";
import Nft from "./components/Nft";
import ScrollCarousel from "./components/ScrollCarousel";
import { getHomeData } from "./components/getHomeData";
import Table from "./components/Table";
import Footer from "./components/Footer";

// Fonttawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faEnvelope,
    faKey,
    faChevronCircleLeft,
    faChevronCircleRight,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faEnvelope,
    faKey,
    faChevronRight,
    faChevronLeft,
    faChevronCircleRight,
    faChevronCircleLeft
);

function App() {
    const [data, setData] = useState([]);
    const [stat, setStat] = useState();
    const [jeton, setJeton] = useState([]);
    const [volume, setVolume] = useState([]);
    const [language, setLanguage] = useState([]);

    // const [name, setName] = useState("Capitalization");
    const [selectedOption, setSelectedOption] = useState("title"); // default selected option is title
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const [languageName] = useState("Choissisez votre langue");
    const [selectedOptionLanguage, setSelectedOptionLanguage] =
        useState("title"); // default selected oprion is title
    const handleOptionLanguageonChange = (option) => {
        setSelectedOptionLanguage(option);
    };

    async function getResult() {
        let result = await getHomeData();
        return result;
    }
    let newData;
    async function doTask() {
        let data = await getResult();
        setData(data.collectionsFirstChunk.byTrend);
        setStat(data.stats);
        setJeton(data.tokensFirstChunk.byMarketCap);
        setVolume(data.tokensFirstChunk.byVolume);
        setLanguage(data.topBar.language);
        // console.log(newData);
        return newData;
    }

    useEffect(() => {
        console.log(newData);
        doTask();
        console.log(data);
        console.log(jeton);
    }, []);

    return (
        <>
            <Header />
            {/* ---------------------------------------------------- */}
            {/* <Languages /> */}

            <div className=" mx-auto  bg-background1 mycontainer ">
                <Header2
                    languageName={languageName}
                    option1="English"
                    option2="Polski"
                    option3="中文"
                    option4="日本語"
                    option5="Deutsch"
                    option6="Français"
                    option7="Español"
                    option8="Português"
                    selectedOptionLanguage={selectedOptionLanguage}
                    handleOptionLanguageonChange={handleOptionLanguageonChange}
                />
                {/* <Languages /> */}

                {language ? (
                    <Languages
                        language={language}
                        selectedOptionLanguage={selectedOptionLanguage}
                    />
                ) : (
                    <div>Loading</div>
                )}

                <SearchBar />
                {/* ------------------ */}

                <div className="flex justify-around statisiques">
                    {stat && (
                        <Statistique2
                            text="Prix de l'ETH"
                            number={stat.ethPrice}
                            image={icon}
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique
                            text="Frais de transaction"
                            comment="(15gwei)"
                            number={stat.averageTransactionFee}
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique
                            text="Dernier bloc"
                            number={stat.lastBlock}
                            time="il y a 2 min"
                        />
                    )}
                    {!stat && <div>Loading</div>}

                    {stat && (
                        <Statistique3
                            text="Émission"
                            number={stat.emission}
                            time="Déflation(mensuel)"
                            // svg={svg}
                        />
                    )}
                    {!stat && <div>Loading</div>}
                </div>

                <div className=" collection flex justify-between items-center content-center border-b pb-4 mb-4  ">
                    <p className="font-bold font-sans text-xl mb-0">
                        Collection NFT
                    </p>
                    <div className=" font-sans tandance">
                        <DropDown
                            // name="Tendances"
                            option1="Tendances"
                            option2="Tendance2"
                        />
                    </div>
                </div>

                {/* <div className="flex justify-between mt-5"></div> */}
                <ScrollCarousel data={data} />

                <div className="flex justify-between items-center content-center border-b pb-4 mb-4 jetons">
                    <p className="font-bold text-xl font-sans ">Jetons</p>

                    <DropDown
                        // name={name}
                        option1="By Market Cap"
                        option2="By Volume"
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        handleOptionChange={handleOptionChange}
                    />
                    {/* {jeton ? (
                        <DropDown
                            // name={name}
                            option1="By Market Cap"
                            option2="By Volume"
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            handleOptionChange={handleOptionChange}
                        />
                    ) : (
                        <div>Loading</div>
                    )} */}
                </div>

                {jeton ? (
                    <Table
                        jeton={jeton}
                        volume={volume}
                        selectedOption={selectedOption}
                    />
                ) : (
                    <div>Loading</div>
                )}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default App;
