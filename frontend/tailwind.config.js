import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'main': '#ffffff',
      'details': {DEFAULT: '#8928A4', 
                  light: 'rgba(143, 78, 161, 0.09)'},
      'text': '#19191A',
    },
    extend: {
      fontFamily: {
        normal: ["montserrat-regular"],
        subtitles: ["montserrat-semibold"],
        titles: ["montserrat-bold"],
      },
    },
  },
  plugins: [],
});
