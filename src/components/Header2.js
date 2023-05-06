import React from "react";
import logo from "../assets/images/BetterScan.png";
import logo1 from "../assets/images/ether.png";
import icon from "../assets/images/icon.png";

function Header2() {
    return (
        <>
            <div className="border-b flex justify-between items-center ">
                <div className="flex h-20 items-center ">
                    <img className="  h-6 mr-4" src={icon} alt="icon" />
                    <img className=" logo h-6 mr-4" src={logo} alt="logo" />

                    <img className=" logo1 h-6" src={logo1} alt="logo1" />
                </div>
                <div className="flex items-end flex-col">
                    <p className="drop">Besoin d'aide</p>
                    {/* Drop down menu */}
                    <div className="justify-between">
                        <p
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="text-text-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4  text-center inline-flex items-center french "
                            type="button"
                        >
                            Français{" "}
                            <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="flex my-52 items-center ml-96 space-x-5 "> */}
            {/* <img src={Text} alt="text" /> */}
            {/* <img src={logo1} alt="logo" className="mb-1.5" /> */}
            {/* </div> */}
        </>
    );
}

export default Header2;
