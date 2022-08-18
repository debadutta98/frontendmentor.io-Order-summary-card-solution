/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "redhat": ["Red Hat Display"]
      },
      backgroundColor: {
        backblue: {
          "100": "hsl(225, 100%, 94%)",
          "200": "hsl(245, 75%, 52%)",
          "300": "hsl(225, 100%, 98%)",
          "400": "hsl(224, 23%, 55%)",
          "500": "hsl(223, 47%, 23%)"
        }
      },
      colors: {
        backblue: {
          "100": "hsl(225, 100%, 94%)",
          "200": "hsl(245, 75%, 52%)",
          "300": "hsl(225, 100%, 98%)",
          "400": "hsl(224, 23%, 55%)",
          "500": "hsl(223, 47%, 23%)"
        }
      }
    },
  },
  plugins: [],
}
