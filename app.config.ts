export default defineAppConfig({
  digital: {
    title: "Digital Web Garden",
    description: "The garden where you can find all the digital beauty.",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {
      position: "left", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "digital web garden", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: "https://www.github.com/nuxt-themes/alpine", // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "nuxtlabs",
      instagram: "atinuxt",
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nuxtlabs",
      },
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
