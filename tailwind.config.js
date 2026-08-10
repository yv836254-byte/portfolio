export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'aurora-gradient': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.2), transparent 25%), radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.14), transparent 18%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.18), transparent 22%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob1: {
          '0%, 100%': { transform: 'translate(-20%, -10%) scale(1)' },
          '50%': { transform: 'translate(-15%, -20%) scale(1.05)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(20%, 10%) scale(1)' },
          '50%': { transform: 'translate(25%, 5%) scale(1.08)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(-10%, 20%) scale(1)' },
          '50%': { transform: 'translate(-5%, 25%) scale(1.1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob1: 'blob1 18s ease-in-out infinite',
        blob2: 'blob2 22s ease-in-out infinite',
        blob3: 'blob3 20s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
