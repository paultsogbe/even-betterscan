import React from "react";

function Statistique(props) {
    return (
        <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans ">
            <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
                <div className="box">
                    <div className="flex  items-baseline justify-between bg-bac">
                        <p className="text-text1 text-xl mb-4 ml-4 font-medium  ">
                            {props.text}
                        </p>
                        <p className="text-slate-500 ml-6 font-medium text-base">
                            {props.time}
                        </p>
                    </div>
                    <div>{props.svg}</div>

                    <div className="flex items-baseline">
                        <h2 className="number text-3xl mr-8 ml-4 h-10 font-sans font-bold ">
                            {" "}
                            {props.number}
                        </h2>
                        <p className="text-slate-500 font-sans coment ">
                            {props.comment}
                        </p>
                    </div>
                </div>

                <div>
                    <img className="w-10" src={props.image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Statistique;
