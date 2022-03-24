module.exports = {
    author: "Zackery Bellerose",
    siteTitle: "Zackery Bellerose - Portfolio",
    siteDescription: "I'm Zackery Bellerose, highly motivated Computer Science student eager to learn.",
    //--NAVBAR SETTINGS--//
    navLinks: {
        menu: [
          {
            name: "About Me",
            url: "/#about",
          }
        ],
        button: {
          useFileName: false,
          name: "Resume",
          fileName: "", // the file has to be placed inside the static folder at the root level
          url: "/#contact", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
        },
      },
}