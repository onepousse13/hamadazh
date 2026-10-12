export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ivory: '#F7F1E5', sand: '#E6D8BC', terracotta: '#A9502F', olive: '#2D3321', gold: '#B08D4F' },
    fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Jost', 'system-ui', 'sans-serif'] },
    keyframes: { zoom: { from: { transform: 'scale(1.12)' }, to: { transform: 'scale(1)' } }, rise: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'none' } } },
    animation: { zoom: 'zoom 18s ease-out forwards', rise: 'rise 1.4s .3s cubic-bezier(.2,.7,.2,1) both' },
  } },
}
