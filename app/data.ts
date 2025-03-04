export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/about",
    subUrls: [
      {
        name: "Our story",
        url: "/ourStory",
      },
      {
        name: "Our Pastors",
        url: "/ourPastors",
      },
      {
        name: "Service",
        url: "/service",
      },
      {
        name: "Our Mission",
        url: "/ourMission",
      },
      {
        name: "Our Beliefs",
        url: "/ourBeliefs",
      },
      {
        name: "RCCG Worldwide",
        url: "/rccgWorldwide",
      },
    ],
  },
  {
    name: "I'm New",
    url: "/new",
  },
  // {
  //   name: "Service",
  //   url: "/service",
  // },
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Give",
    url: "/give",
  },
  {
    name: "Our Ministries",
    url: "/ourMinistries",
    subUrls: [
      {
        name: "Ministries",
        url: "/Ministry",
      },
      {
        name: "Departments",
        url: "/Department",
      },
    ],
  },
  {
    name: "Connect",
    url: "/connect",
    subUrls: [
      {
        name: "Get In Touch",
        url: "/getInTouch",
      },
      {
        name: "Prayer Requests",
        url: "/prayerRequests",
      },
      {
        name: "Need A Ride?",
        url: "/needARide",
      },
    ],
  },
];

export const mobileNavLinks = [
  {
    name: "Home",
    url: "/",
  },
  ...navLinks.filter((link) => link.url !== "/"),
];