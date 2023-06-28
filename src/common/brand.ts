/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md             all over
 *  - package.json          app-slug and version
 *  - public/manifest.json  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  // Name: 'big-AGI',
  // UpperName: 'BIG-AGI',
  Title: {
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'InfiniCLI',
  },

  Meta: {
    SiteName: 'InfiniCLI',
    Title: 'InfiniCLI: Professional ChatGPT Platform',
    Description: 'InfiniCLI is the ultimate ChatGPT platform designed to elevate your professional experience and provide accurate insights based on real data and reason.',
    Keywords: 'InfiniCLI, ChatGPT, professional platform, real data, accurate insights',
    ThemeColor: '#434356',
    TwitterSite: '@InfiniCLI',
  },
  URIs: {
    Home: 'https://infinicli.com',
    CardImage: 'https://infinicli.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/syberkitten/big-agi',
    SupportInvite: 'https://discord.gg/your-discord-invite',
  },
};