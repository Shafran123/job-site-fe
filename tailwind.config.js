module.exports = {
    mode: 'jit',
    prefix: '',
    purge: {
        enabled: true,
        content: [

            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            xxs: "300px",
            xs: "400px",
            sm: "640px",
            // md: "768px",
            md: "800px",
            xmd: "900px",
            lg: "1024px",
            xl: "1280px",
            mainAdjImg: "1350px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
};