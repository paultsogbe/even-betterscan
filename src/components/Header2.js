// import React from "react";
// import logo from "../assets/images/BetterScan.png";
// import logo1 from "../assets/images/ether.png";
// import icon from "../assets/images/icon.png";

// function Header2(props) {
//     return (
//         <>
//             <div className="border-b flex justify-between items-center ">
//                 <div className="flex h-20 items-center ">
//                     <img className="  h-6 mr-4" src={icon} alt="icon" />
//                     <img className=" logo h-6 mr-4" src={logo} alt="logo" />

//                     <img className=" logo1 h-6" src={logo1} alt="logo1" />
//                 </div>
//                 <div className="flex items-end flex-col">
//                     <p className="drop">Besoin d'aide</p>
//                     {/* Drop down menu */}

//                     <div className="relative">
//                         <select
//                             // className="appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//                             className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//                             id="grid-state"
//                             onChange={(e) =>
//                                 props.handleOptionLanguageonChange(
//                                     e.target.value
//                                 )
//                             }
//                             value={props.selectedOptionLanguage}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-5 h-5 ml-2 -mr-1"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 strokeWidth={2}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M19 9l-7 7-7-7"
//                                 />
//                             </svg>
//                             <option
//                                 value="title"
//                                 className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                             >
//                                 {props.languageName}
//                             </option>
//                             <option value="option1">{props.option1}</option>
//                             <option value="option2">{props.option2}</option>
//                             <option value="option3">{props.option3}</option>
//                             <option value="option4">{props.option4}</option>
//                             <option value="option5">{props.option5}</option>
//                             <option value="option6">{props.option6}</option>
//                             <option value="option7">{props.option7}</option>
//                             <option value="option8">{props.option8}</option>
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header2;

// -----------option3---------
import React from "react";
import logo from "../assets/images/BetterScan.png";
import logo1 from "../assets/images/ether.png";
import icon from "../assets/images/icon.png";

function Header2(props) {
    return (
        <>
            <div className="border-b flex justify-between items-center">
                <div className="flex h-20 items-center">
                    <img className="h-6 mr-4" src={icon} alt="icon" />
                    <img className="logo h-6 mr-4" src={logo} alt="logo" />
                    <img className="logo1 h-6" src={logo1} alt="logo1" />
                </div>
                <div className="flex items-start flex-col">
                    <p className="drop ml-5 font-sans ">Besoin d'aide</p>
                    {/* Drop down menu */}
                    <div className="relative w-full">
                        <select
                            className="inline-flex justify-center w-full px-4  text-sm font-medium text-text2 bg-gray-50 rounded-md  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-50 "
                            id="grid-state"
                            onChange={(e) =>
                                props.handleOptionLanguageonChange(
                                    e.target.value
                                )
                            }
                            value={props.selectedOptionLanguage}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            {/* <option
                                value="title"
                                className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                {props.languageName}
                            </option> */}
                            <option value="option1">{props.option1}</option>
                            <option value="option2">{props.option2}</option>
                            <option value="option3">{props.option3}</option>
                            <option value="option4">{props.option4}</option>
                            <option value="option5">{props.option5}</option>
                            <option value="option6">{props.option6}</option>
                            <option value="option7">{props.option7}</option>
                            <option value="option8">{props.option8}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header2;

// ----------option1-----------

//             import React from "react";
// import logo from "../assets/images/BetterScan.png";
// import logo1 from "../assets/images/ether.png";
// import icon from "../assets/images/icon.png";

// function Header2(props) {
//     return (
//         <>
//             <div className="border-b flex justify-between items-center ">
//                 <div className="flex h-20 items-center ">
//                     <img className="  h-6 mr-4" src={icon} alt="icon" />
//                     <img className=" logo h-6 mr-4" src={logo} alt="logo" />

//                     <img className=" logo1 h-6" src={logo1} alt="logo1" />
//                 </div>
//                 <div className="flex items-end flex-col">
//                     <p className="drop">Besoin d'aide</p>
//                     {/* Drop down menu */}
//                        {/* ----------------- */}
//                     <div className="justify-between">
//                         <p
//                             id="dropdownDefaultButton"
//                             data-dropdown-toggle="dropdown"
//                             className="text-text-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  text-center inline-flex items-center french "
//                             type="button"
//                         >
//                             Français{" "}
//                             <svg
//                                 className="w-4 h-4 ml-2"
//                                 aria-hidden="true"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M19 9l-7 7-7-7"
//                                 ></path>
//                             </svg>
//                         </p>
//                     </div>
//                     {/* ------------------------ */}

//                     </div>
//             </div>
//             {/* --------------------------------------------------------- */}
//             {/* <div className="flex my-52 items-center ml-96 space-x-5 "> */}
//             {/* <img src={Text} alt="text" /> */}
//             {/* <img src={logo1} alt="logo" className="mb-1.5" /> */}
//             {/* </div> */}
//         </>
//     );
// }

// export default Header2;
