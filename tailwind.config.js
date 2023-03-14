module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#01080E',
        'primary-2': '#011627', 
        'primary-3': '#011221',
        'secondary-1': '#607B96',
        'secondary-2': '#3C9D93',
        'secondary-3': '#4D5BCE',
        'accent-1': '#FEA55F',
        'accent-2': '#43D9AD',
        'accent-3': '#E99287',
        'accent-4': '#C98BDF',
        'lines': '#1E2D3D',
        'gradient-1': '#1e645c',
        'gradient-2': '#1d3e67'
      },
      spacing: {
        '120': '30rem',
        '108': '27rem',
        '180': '45rem',
        '200': '50rem',
        '90' : '22.5rem',
        '47' : '47%'
      },
      width: {
        '45%': '45%',
      }
    },
  },
  plugins: [],
}