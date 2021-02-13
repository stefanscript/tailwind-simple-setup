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
            indigo: colors.indigo,
            red: colors.rose,
            blue: colors.blue,
            yellow: colors.amber,
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
