module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-img":
          "linear-gradient(to bottom, rgba(4, 21, 45, 0.5) 0%, rgba(4, 21, 45, 0.8) 80%), url('https://image.tmdb.org/t/p/original/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg')",
      },
      
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};
