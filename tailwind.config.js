const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
    content: [
        './**/*.html',
        './**/styles.json',
        './themes/default.json',
        '../../components/tailwind/**/*.html',
        '../../components/tailwind/**/*.json'
    ], 
    theme: {    
        ripple: theme => ({
            colors: theme('colors')
        }),   
        extend: {},
    },
    variants: {       
    },
    darkMode: 'class',
    plugins: [             
    ],
    corePlugins: {    
        preflight: false  
    }
});
