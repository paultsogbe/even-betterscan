import React from "react";

function Header() {
    return (
        <div className="flex justify-center h-12 items-center header font-sans">
            <p className="mr-12">
                Vous voulez faire de BetterScan votre explorateur par défaut ?🕵️
            </p>
            <button className="bg-white rounded h-10 px-4 font-sans">
                Ajouter l'extension
            </button>
        </div>
    );
}

export default Header;
