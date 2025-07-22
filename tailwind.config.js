/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'fjalla': ['"Fjalla One"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'rotation 12s linear infinite',
            },
            keyframes: {
                rotation: {
                    to: { transform: 'rotate(1turn)' },
                },
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}; 