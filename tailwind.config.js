const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'pics': "1080px",
            ...defaultTheme.screens
        },
        colors: {
            light: "#eeeeee",
            medium: "#344246",
            medium50: "#34424679",
            dark: "#1E292A",
            primary: "#FFB900",
            secondary: "#00C2EF",
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
};
