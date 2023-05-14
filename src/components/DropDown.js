// -----
function DropDown(props) {
    return (
        <div className="relative">
            <select
                // className="appearance-none rounded-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-background1 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="grid-state"
                onChange={(e) => props.handleOptionChange(e.target.value)}
                value={props.selectedOption}
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
                  
                </option> */}
                <option value="option1">{props.option1}</option>
                <option value="option2">{props.option2}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
        </div>
    );
}

export default DropDown;
