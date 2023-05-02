import React from "react";

function Statistique(props) {
    return (
        <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-satoshi ">
            <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
                <div className="box">
                    <div className="flex  items-baseline justify-around bg-bac">
                        <p className="text-text1 text-xl mb-4 ml-4 font-medium  ">
                            {props.text}
                        </p>
                        <p className="text-slate-500 ml-6 font-medium text-base">
                            {props.time}
                        </p>
                    </div>

                    <div className="flex items-baseline">
                        <h2 className="number text-4xl mr-8 ml-4 h-10 font-satoshi font-bold ">
                            {" "}
                            {props.number}
                        </h2>
                        <p className="text-slate-500 coment">{props.comment}</p>
                    </div>
                </div>

                <div>
                    <img className="w-10" src={props.image} alt="" />

                    {/* <img className="w-10" src={icon3} alt="" />
        <img className="w-10" src={icon4} alt="" /> */}
                    {/* <img className="w-10" src={icon2} alt="" /> */}
                </div>

                {/* ------ */}
                {/* <div className="  ">
        <p className="font-bold text-4xl leading-10  ">Prix de l'ETH</p>

        <img
          src={logo1}
          alt="icon"
          className=" w-10 h-11 ml-72  bg-gradient-to-r from-purple-500 to-pink-500 absolute"
        />
        <p className="font-bold text-4xl leading-10 bg-gradient-to-r from-purple-500 to-pink-500 items-center">
          1600 $
        </p>
      </div> */}
                {/* ----- */}
                {/* </div> */}

                {/* <div className="contents">
        <div className="flex-1 text-gray-700 text-center bg-green-400 px-4 py-2 m-2 h-56 rounded-3xl">
          <p>Frais de transation</p>
          <p>0,50 $</p>
          <p>( 15gwei)</p>
        </div>

        <div className="flex-1 text-gray-700 text-center bg-blue-400 px-4 py-2 m-2 rounded-3xl">
          <p>Dernier bloc il y a 2 min</p>
          <p>1650 500</p>
        </div>
      </div>

      <div className="flex-1 text-gray-700 text-center bg-yellow-400 px-4 py-2 m-2 rounded-3xl">
        <p>Émission</p>
        <p>Déflation (mensuel)</p>
        <p>------</p>
        <p>-1.13 ETH /min</p>
      </div> */}
            </div>
        </div>
    );
}

export default Statistique;

// --------------------------------------------
