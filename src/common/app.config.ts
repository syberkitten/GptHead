/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Infinicli\'s GpTHeaD' ,
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'infinicli.com',
  },
  Meta: {
    Description: 'Launch GpT-HeaD to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'infinicli.com | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://infinicli.com',
    // App: 'https://get.infinicli.com.com',
    CardImage: 'https://infinicli.com.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/infinicli.com',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://infinicli.com.com/privacy',
  },
} as const;