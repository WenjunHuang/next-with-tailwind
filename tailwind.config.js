module.exports = {
    theme: {
        extend: {
            padding:{
                "5/6":"83.33333%"
            },
            spacing:{
                "72":'18rem',
                "80":'20rem',
            }
        },
        customForms: theme => ({
            default: {
                select: {
                    borderRadius: theme('borderRadius.lg'),
                    backgroundColor: theme('colors.gray.700'),
                    borderColor: 'transparent',
                    iconColor:'#fff',
                    lineHeight:theme('lineHeight.snug'),
                    '&:focus':{
                        boxShadow:'none',
                        borderColor:'none',
                        backgroundColor:theme('colors.gray.600'),
                    },
                },
                radio:{
                    width:'1.5em',
                    height:'1.5em',
                    borderWidth: 0,
                    '&:focus':{
                        boxShadow:'none'
                    },
                    '&:checked': {
                        backgroundColor: theme('colors.indigo.500')
                    }
                },
                checkbox:{
                    width:'1.5em',
                    height:'1.5em',
                    borderWidth: 0,
                    '&:checked': {
                        backgroundColor: theme('colors.indigo.500')
                    }
                }
            }
        }),
        colors: {
            'transparent':'transparent',
            'black': '#c1e29',
            'grey-dark':'#4e616c',
            'grey-light':'#dfe4e7',
            'grey-lighter':'#f3f7f9',
            'white':'#ffffff',
            'blue-light':'#9ddbff',
            indigo: {
                dark:'#405dcf',
                light:'#6f8bfb',
                default:'#5978f3',
            },
        },
        screens: {
            'ref':'960px',
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
}
