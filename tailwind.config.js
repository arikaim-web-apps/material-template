const withMT = require("@material-tailwind/html/utils/withMT");


module.exports = withMT({
    content: [
        './**/*.html',
        './**/styles.json',
        './themes/default.json'      
    ], 
    theme: {  
        screens: {
            "sm": "340px",
        },  
        extend: {
           
        },
        ripple: theme => ({
            colors: theme('colors')
        })
    },
    variants: {       
    },
    darkMode: 'class',
    plugins: [ 
        require("@tailwindcss/typography")
    ],
    corePlugins: {    
        preflight: false  
    }
});
