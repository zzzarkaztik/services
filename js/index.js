tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Karla", "serif"],
      },
      fontSize: {
        body: "16px",
        h1: "70px",
        h2: "43px",
        h3: "30px",
        h4: "21px",
        h5: "17px",
        h6: "16px",
      },
      padding: {
        body: "0px",
        section: "96px",
      },
      margin: {
        body: "0px",
      },
      backgroundColor: {
        global: "#ffffff",
      },
    },
  },
  plugins: [],
};
$(document).ready(function () {
  // Open sidebar
  $("#openSidebarButton").on("click", function () {
    $("#global-sidemenu").animate({ left: "0" }, 300);
  });

  // Close sidebar
  $("#closeSidebarButton").on("click", function () {
    $("#global-sidemenu").animate({ left: "-300px" }, 300);
  });
});
