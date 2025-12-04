// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "My research integrates applied mathematics, numerical analysis, and machine learning to study complex problems. I combine analytical and numerical methods to translate theoretical concepts into practical solutions. To support this work, I use Python and MATLAB to approximate solutions, develop models, and analyze complex datasets, allowing me to apply both numerical and data-driven techniques effectively.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications-amp-projects",
          title: "publications &amp; projects",
          description: "This is my research output",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications%20&%20projects/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "This is my course",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
