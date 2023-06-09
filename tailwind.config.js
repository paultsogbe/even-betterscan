/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background1: "#fafafb",
                background2: "#f0eaf0",
                background3: "#afbfd3",
                background4:
                    "linear-gradient(170.05deg, rgba(247, 69, 69, 0.1) -65.14%, rgba(51, 132, 245, 0.1) 174.73%)",

                bordercolor: "#e5e7ea",
                // bordercolor2:,
                text1: "#2A3B51",
                text2: "#839BBB",
                text3: "#2A3B51",
                text4: "#2C3131",
            },

            backgroundImage: {
                "hero-pattern": "url('/img/hero-pattern.svg')",
                "footer-texture": "url('/img/footer-texture.png')",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            animation: {
                "spin-slow-30": "spin 30s linear infinite",
                "spin-slow-25": "spin 25s linear infinite",
                "spin-slow-10": "spin 10s linear infinite",
                "marquee-infinite": "marquee 25s linear infinite",
            },

            fontFamily: {
                sans: ["ui-sans-serif", "system-ui", "Satoshi"],
                serif: ["ui-serif", "Georgia"],
                mono: ["ui-monospace", "SFMono-Regular"],
                display: ["Oswald"],
                body: ["Open Sans"],
            },

            fontWeight: {
                thin: "100",
                hairline: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                // semisemibold: "550",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                "extra-bold": "550",
                black: "900",
            },
        },
    },
    plugins: [],
};
