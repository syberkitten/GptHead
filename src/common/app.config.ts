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
    Base: 'BotNexus Chat',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'BotNexus Chat',
  },
  Meta: {
    Description: 'Launch BotNexus Chat to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'BotNexus Chat | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@syberkitten',
  },
  URIs: {
    Home: 'https://botnexus.chat',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://botnexus.chat/icons/card-dark-1200.png',
    OpenRepo: '',
    OpenProject: '',
    SupportInvite: 'https://discord.gg/PWTgg36x',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://botnexus.chat/privacy',
    TermsOfService: 'https://botnexus.chat/terms',
  },
  Docs: {
    Public: (docPage: string) => `https://app.botnexus.ai/docs/${docPage}`,
  }
} as const;