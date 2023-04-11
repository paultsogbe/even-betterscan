import React, { useState } from "react";
import icon5 from "../assets/images/heart-circle.svg";

function Nft(props) {
    return (
        <>
            {/* <div>{isLaording === true ? <p></p> : <div>{Data.Nft.name}</div>}</div> */}

            <div className="">
                <div className="relative ">
                    <img
                        className="w-full h-64 mb-5 rounded-lg nft1 "
                        src={props.image}
                        alt="nft"
                    />
                    <img
                        className=" absolute top-5 right-3 h-6 mr-4 icon5 rounded-2xl"
                        src={icon5}
                        alt="icon5"
                    />
                </div>

                <h2 className="text-base text-text3 overflow-hidden text-ellipsis">
                    {props.title}
                </h2>
                <p className="text-sm text-text2">{props.description}</p>
            </div>
        </>
    );
}

export default Nft;
