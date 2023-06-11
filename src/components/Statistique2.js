import React from "react";

function Statistique2(props) {
    return (
        <div className="h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-sans statisique2">
            <div className="box2 content-center grow-0 flex justify-center items-center rounded-md body-font font-sans">
                <div className="box">
                    <div className="flex  items-baseline justify-between bg-bac">
                        <p className="text-text1 text-xl mb-4 ml-4 mr-20  font-medium ">
                            {props.text}
                        </p>
                        <p className="text-slate-500 ml-6 font-medium">
                            {props.time}
                        </p>
                    </div>

                    <div className="flex items-baseline">
                        <h2 className=" number text-3xl mr-8 ml-4 h-10 font-sans font-bold">
                            {" "}
                            {props.number}
                        </h2>
                        <p className="text-slate-500 coment">{props.comment}</p>
                    </div>
                </div>

                <div>
                    <img className="w-10" src={props.image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Statistique2;

// --------------------------------------------

// import React from "react";

// function Statistique2(props) {
//     return (
//         <div className="h-36 content-center grow-0 mb-20 ml-2.5 flex justify-center items-center rounded-md body-font font-satoshi statisique2">
//             <div
//                 className="box2 content-center grow-0 flex justify-center items-center rounded-md body-font font-satoshi"
//                 style={{
//                     border: "2px solid",
//                     background:
//                         "linear-gradient(to right, rgba(246, 69, 69, 0.2), rgba(51, 132, 245, 0.2))",
//                 }}
//             >
//                 <div className="box">
//                     <div className="flex  items-baseline justify-between bg-bac">
//                         <p className="text-text1 text-xl mb-4 ml-4  font-bold ">
//                             {props.text}
//                         </p>
//                         <p className="text-slate-500 ml-6 font-bold">
//                             {props.time}
//                         </p>
//                     </div>

//                     <div className="flex items-baseline">
//                         <h2 className=" font-bold text-3xl number  mr-8 ml-4 h-10 font-satoshi">
//                             {" "}
//                             {props.number}
//                         </h2>
//                         <p className="text-slate-500 coment">{props.comment}</p>
//                     </div>
//                 </div>

//                 <div>
//                     <img className="w-10" src={props.image} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Statistique2;
