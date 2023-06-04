import React from "react";

function Statistique(props) {
    const isPositive = props.number >= 0;
    const sign = isPositive ? "" : "-";
    const color = isPositive ? "#3CB371" : "#FF4500";
    const gradientColor1 = isPositive ? "#3CB371" : "#D55A5A";
    const gradientColor2 = isPositive ? "#3CB371" : "#F74545";
    const barDirection = isPositive ? "ltr" : "rtl";

    return (
        <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans">
            <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
                <div className="box">
                    <div className="flex items-baseline justify-between bg-bac">
                        <p className="text-text1 text-xl mb-2 ml-4 font-medium">
                            {props.text}
                        </p>
                        <p className="text-slate-500 font-medium text-base">
                            {props.time}
                        </p>
                    </div>
                    <div className="flex justify-center items-center mb-2">
                        {/* Bar 1 */}
                        {props.number < 0 && (
                            <svg
                                className="negative"
                                width="58"
                                height="6"
                                viewBox="0 0 58 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M58 0H3C1.34315 0 0 1.34315 0 3V3C0 4.65685 1.34315 6 3 6H58V0Z"
                                    fill={`url(#paint0_linear_156_1693_${sign})`}
                                />
                                <defs>
                                    <linearGradient
                                        id={`paint0_linear_156_1693_${sign}`}
                                        x1="72.7358"
                                        y1="3"
                                        x2="70.5458"
                                        y2="16.6715"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor={gradientColor1} />
                                        <stop
                                            offset="1"
                                            stopColor={gradientColor2}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        )}

                        {/* Ligne */}
                        <svg
                            className="positive"
                            width="1"
                            height="24"
                            viewBox="0 0 1 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="0.5"
                                x2="0.5"
                                y2="24"
                                stroke={color}
                                style={{ direction: barDirection }}
                            />
                        </svg>

                        {/* Bar 2 */}
                        {props.number >= 0 && (
                            <svg
                                width="58"
                                height="6"
                                viewBox="0 0 58 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 0H55C56.6569 0 58 1.34315 58 3V3C58 4.65685 56.6569 6 55 6H0V0Z"
                                    fill={`url(#paint0_linear_156_1693_${sign})`}
                                />
                                <defs>
                                    <linearGradient
                                        id={`paint0_linear_156_1693_${sign}`}
                                        x1="72.7358"
                                        y1="3"
                                        x2="70.5458"
                                        y2="16.6715"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor={gradientColor1} />
                                        <stop
                                            offset="2"
                                            stopColor={gradientColor2}
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        )}
                    </div>
                    <div className="flex items-center">
                        <h2 className="number text-4xl ml-4 h-10 font-sans font-bold">
                            {sign} {Math.abs(props.number)}
                            {" ETH/min"} {/* {props.number} */}
                        </h2>
                    </div>{" "}
                </div>

                <div>
                    <img className="w-10" src={props.image} alt="" />{" "}
                </div>
            </div>
        </div>
    );
}

export default Statistique;

// ----------3em option-------

// import React from "react";

// function Statistique(props) {
//     const isPositive = props.number >= 0;
//     const isNegative = props.number < 0;
//     const sign = isPositive ? "" : "-";
//     const sign1 = isNegative ? "-" : "";
//     const color = isPositive ? "#3CB371" : "#FF4500";
//     const gradientColor1 = isPositive ? "#3CB371" : "#D55A5A";
//     const gradientColor2 = isPositive ? "#3CB371" : "#F74545";
//     const gradientColor3 = isNegative ? "#F74545" : "#D3D3D3";
//     const gradientColor4 = isNegative ? "#F74545" : "#D3D3D3";
//     const barDirection = isPositive ? "ltr" : "rtl";
//     // const gradientColor2 = isPositive ? "#D3D3D3" : "#F74545";

//     return (
//         <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans">
//             <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
//                 <div className="box">
//                     <div className="flex items-baseline justify-between bg-bac">
//                         <p className="text-text1 text-xl mb-2 ml-4 font-medium">
//                             {props.text}
//                         </p>
//                         <p className="text-slate-500 font-medium text-base">
//                             {props.time}
//                         </p>
//                     </div>
//                     <div className="flex justify-center items-center mb-2">
//                         {/* Bar 1 */}
//                         <svg
//                             className="negative"
//                             width="58"
//                             height="6"
//                             viewBox="0 0 58 6"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M58 0H3C1.34315 0 0 1.34315 0 3V3C0 4.65685 1.34315 6 3 6H58V0Z"
//                                 fill={`url(#paint0_linear_156_1693_${sign})`}
//                             />
//                             <defs>
//                                 <linearGradient
//                                     id={`paint0_linear_156_1693_${sign}`}
//                                     x1="72.7358"
//                                     y1="3"
//                                     x2="70.5458"
//                                     y2="16.6715"
//                                     gradientUnits="userSpaceOnUse"
//                                 >
//                                     <stop stopColor={gradientColor1} />
//                                     <stop
//                                         offset="1"
//                                         stopColor={gradientColor2}
//                                     />
//                                 </linearGradient>
//                             </defs>
//                         </svg>

//                         {/* Ligne */}
//                         <svg
//                             className="positive"
//                             width="1"
//                             height="24"
//                             viewBox="0 0 1 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <line
//                                 x1="0.5"
//                                 x2="0.5"
//                                 y2="24"
//                                 stroke={color}
//                                 style={{ direction: barDirection }}
//                             />
//                         </svg>

//                         {/* Bar 2 */}
//                         <svg
//                             width="58"
//                             height="6"
//                             viewBox="0 0 58 6"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M0 0H55C56.6569 0 58 1.34315 58 3V3C58 4.65685 56.6569 6 55 6H0V0Z"
//                                 fill={`url(#paint0_linear_156_1693_${sign1})`}
//                             />
//                             <defs>
//                                 <linearGradient
//                                     id={`paint0_linear_156_1693_${sign1}`}
//                                     x1="72.7358"
//                                     y1="3"
//                                     x2="70.5458"
//                                     y2="16.6715"
//                                     gradientUnits="userSpaceOnUse"
//                                 >
//                                     <stop stopColor={gradientColor3} />
//                                     <stop
//                                         offset="2"
//                                         stopColor={gradientColor4}
//                                     />
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                     </div>
//                     <div className="flex items-center">
//                         <h2 className="number text-4xl ml-4 h-10 font-sans font-bold">
//                             {sign} {Math.abs(props.number)}
//                             {" ETH/min"} {/* {props.number} */}
//                         </h2>
//                     </div>{" "}
//                 </div>

//                 <div>
//                     <img className="w-10" src={props.image} alt="" />{" "}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Statistique;
