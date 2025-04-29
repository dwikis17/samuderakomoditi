module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                // Color palette from the image
                white: '#ffffff',
                slate: '#6769da', // Corrected the hex code
                indigo: '#424769',
                navy: '#2d3250',
                peach: '#f6b17a',
                // Add more color variables as needed
            },
        },
    },
    plugins: [],
}