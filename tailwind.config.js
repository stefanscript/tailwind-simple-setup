const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        content: [
            "./public/index.html"
        ], options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            purple: colors.indigo,
            red: colors.rose,
            blue: colors.blue,
            green: colors.emerald,
            yellow: colors.amber,
        },
        container: {
            center: true
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        float: false
    }
};
