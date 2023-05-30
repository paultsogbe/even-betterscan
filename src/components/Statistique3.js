// import React from "react";

// function Statistique(props) {
//     return (
//         <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans ">
//             <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
//                 <div className="box">
//                     <div className="flex  items-baseline justify-between bg-bac">
//                         <p className="text-text1 text-xl mb-2 ml-4 font-medium  ">
//                             {props.text}
//                         </p>
//                         <p className="text-slate-500  font-medium text-base">
//                             {props.time}
//                         </p>
//                     </div>
//                     <div className="flex justify-center items-center mb-2">
//                         <svg
//                             width="58"
//                             height="6"
//                             viewBox="0 0 58 6"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M58 0H3C1.34315 0 0 1.34315 0 3V3C0 4.65685 1.34315 6 3 6H58V0Z"
//                                 fill="url(#paint0_linear_156_1693)"
//                             />
//                             <defs>
//                                 <linearGradient
//                                     id="paint0_linear_156_1693"
//                                     x1="72.7358"
//                                     y1="3"
//                                     x2="70.5458"
//                                     y2="16.6715"
//                                     gradientUnits="userSpaceOnUse"
//                                 >
//                                     <stop stop-color="#F74545" />
//                                     <stop offset="1" stop-color="#D55A5A" />
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                         <svg
//                             width="1"
//                             height="24"
//                             viewBox="0 0 1 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <line x1="0.5" x2="0.5" y2="24" stroke="#839BBB" />
//                         </svg>
//                     </div>

//                     <div className="flex items-center">
//                         <h2 className="number text-4xl mr-8 ml-4 h-10 font-sans font-bold ">
//                             {" "}
//                             {props.number}
//                         </h2>
//                         {/* <p className="text-slate-500 coment ">
//                             {props.comment}

//                             // ------------
//                         </p> */}
//                         {/* <svg
//                             width="10"
//                             height="8"
//                             viewBox="0 0 10 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M9.88846 4.46998C9.88846 4.07998 9.57831 3.76998 9.18811 3.76998C8.79792 3.76998 8.48776 4.07998 8.48776 4.46998V4.64998L5.76641 1.92998C5.61633 1.77998 5.41623 1.70998 5.20613 1.72998C4.99602 1.74998 4.80593 1.85998 4.69587 2.03998L3.67536 3.55998L1.31419 1.17998C1.04405 0.909978 0.603834 0.909978 0.323695 1.17998C0.0535601 1.44998 0.0535601 1.88998 0.323695 2.16998L3.30518 5.14998C3.45526 5.29998 3.65535 5.36998 3.86546 5.34998C4.07556 5.32998 4.26566 5.21998 4.37571 5.03998L5.39622 3.51998L7.50727 5.62998H7.32718C6.93699 5.62998 6.62683 5.93998 6.62683 6.32998C6.62683 6.71998 6.93699 7.02998 7.32718 7.02998H9.18811C9.27816 7.02998 9.3682 7.00998 9.45825 6.97998C9.62833 6.90998 9.7684 6.76998 9.83844 6.59998C9.87846 6.50998 9.88846 6.41998 9.88846 6.32998V4.46998Z"
//                                 fill="#E61919"
//                             />
//                         </svg> */}
//                     </div>
//                 </div>

//                 <div>
//                     <img className="w-10" src={props.image} alt="" />

//                     {/* <img className="w-10" src={icon3} alt="" />
//         <img className="w-10" src={icon4} alt="" /> */}
//                     {/* <img className="w-10" src={icon2} alt="" /> */}
//                 </div>

//                 {/* ------ */}
//                 {/* <div className="  ">
//         <p className="font-bold text-4xl leading-10  ">Prix de l'ETH</p>

//         <img
//           src={logo1}
//           alt="icon"
//           className=" w-10 h-11 ml-72  bg-gradient-to-r from-purple-500 to-pink-500 absolute"
//         />
//         <p className="font-bold text-4xl leading-10 bg-gradient-to-r from-purple-500 to-pink-500 items-center">
//           1600 $
//         </p>
//       </div> */}
//                 {/* ----- */}
//                 {/* </div> */}

//                 {/* <div className="contents">
//         <div className="flex-1 text-gray-700 text-center bg-green-400 px-4 py-2 m-2 h-56 rounded-3xl">
//           <p>Frais de transation</p>
//           <p>0,50 $</p>
//           <p>( 15gwei)</p>
//         </div>

//         <div className="flex-1 text-gray-700 text-center bg-blue-400 px-4 py-2 m-2 rounded-3xl">
//           <p>Dernier bloc il y a 2 min</p>
//           <p>1650 500</p>
//         </div>
//       </div>

//       <div className="flex-1 text-gray-700 text-center bg-yellow-400 px-4 py-2 m-2 rounded-3xl">
//         <p>Émission</p>
//         <p>Déflation (mensuel)</p>
//         <p>------</p>
//         <p>-1.13 ETH /min</p>
//       </div> */}
//             </div>
//         </div>
//     );
// }

// export default Statistique;

// -------------option 2-------------------------------

// import React from "react";

// function Statistique(props) {
//     const isPositive = props.number >= 0;
//     const sign = isPositive ? "+" : "-";
//     const color = isPositive ? "#3CB371" : "#FF4500";
//     const gradientColor1 = isPositive ? "#3CB371" : "#F74545";
//     const gradientColor2 = isPositive ? "#D3D3D3" : "#D55A5A";
//     const barDirection = isPositive ? "rtl" : "ltr";
//     return (
//         <div className="statisique1 h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans ">
//             <div className="box1 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi">
//                 <div className="box">
//                     <div className="flex  items-baseline justify-between bg-bac">
//                         <p className="text-text1 text-xl mb-2 ml-4 font-medium  ">
//                             {props.text}
//                         </p>
//                         <p className="text-slate-500  font-medium text-base">
//                             {props.time}
//                         </p>
//                     </div>
//                     <div className="flex justify-center items-center mb-2">
//                         <svg
//                             width="58"
//                             height="6"
//                             viewBox="0 0 58 6"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M58 0H3C1.34315 0 0 1.34315 0 3V3C0 4.65685 1.34315 6 3 6H58V0Z"
//                                 fill="url(#paint0_linear_156_1693)" // ${sign}---
//                             />
//                             <defs>
//                                 <linearGradient
//                                     id="paint0_linear_156_1693" //{'${sign}'} ---
//                                     x1="72.7358"
//                                     y1="3"
//                                     x2="70.5458"
//                                     y2="16.6715"
//                                     gradientUnits="userSpaceOnUse"
//                                 >
//                                     <stop stop-color="#F74545" /> {/* ce qui manque ici---{gradientColor1} */}

//                                     <stop offset="1" stop-color="#D55A5A" />{/* ---{gradientColor2} */}
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                         <svg
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
//                     </div>

//                     <div className="flex items-center">
//                         <h2 className="number text-4xl mr-8 ml-4 h-10 font-sans font-bold ">
//                             {" "}
//                             {sign} {Math.abs(props.number)}
//                             {/* {props.number} */}
//                         </h2>
//                     </div>
//                 </div>

//                 <div>
//                     <img className="w-10" src={props.image} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Statistique;

// ----------3em option-------

import React from "react";

function Statistique(props) {
    const isPositive = props.number >= 0;
    const sign = isPositive ? "+" : "-";
    const color = isPositive ? "#3CB371" : "#FF4500";
    const gradientColor1 = isPositive ? "#F74545" : "#D55A5A";
    const gradientColor2 = isPositive ? "#D3D3D3" : "#D55A5A";
    const barDirection = isPositive ? "rtl" : "ltr";

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
                        <svg
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
                        <svg
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
                    </div>

                    <div className="flex items-center">
                        <h2 className="number text-4xl mr-8 ml-4 h-10 font-sans font-bold">
                            {sign} {Math.abs(props.number)}
                            {" ETH/min"}
                            {/* {props.number} */}
                        </h2>
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
