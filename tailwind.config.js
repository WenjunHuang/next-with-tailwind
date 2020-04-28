module.exports = {
    theme: {
        extend: {
            padding:{
                "5/6":"83.33333%"
            },
            spacing:{
                "80":'20rem'
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
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ],
}
