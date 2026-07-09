const fieldImage =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80';
const communityImage =
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80';
const conferenceImage =
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80';
const healthcareImage =
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80';
const educationImage =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';

export const siteContent = {
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Publication', path: '/news' },
    { label: 'Media', path: '/gallery' }
  ],
  home: {
    hero: {
      quote: 'Human being is a fighter, human being is a creator.',
      attribution: 'Nobel Laureate Professor Muhammad Yunus',
      image: fieldImage
    },
    featuredArticle: {
      title: 'Grameen Kalyan Launches Free Cervical and Breast Cancer Screening Initiative',
      category: 'Miscellaneous',
      date: '23rd April 2026',
      month: 'APR',
      day: '23',
      year: '2026',
      excerpt:
        'DHAKA, April 23, 2026: Grameen Kalyan recently launched a healthcare initiative providing 20,000 completely free cervical and clinical breast cancer screenings to underprivileged women across Bangladesh. The pilot project began on April 19, 2026 and targets married women between the ages of 30 and 60.'
    },
    newsCards: [
      {
        title: 'বিনামূল্যে জরায়ুমুখ ও ব্রেস্ট ক্যান্সার স্ক্রিনিং কার্যক্রম শুরু করল গ্রামীণ কল্যাণ',
        category: 'Miscellaneous',
        image: healthcareImage
      },
      {
        title: 'চক্ষুচিকিৎসা ও নার্সিং কলেজ নিয়ে পরিসর বাড়াচ্ছে গ্রামীণ হেলথ',
        category: 'Miscellaneous',
        image: educationImage
      },
      {
        title: 'Expansion of Grameen Health Care Services continues with eye care and nursing college',
        category: 'Miscellaneous',
        image: communityImage
      },
      {
        title: 'Registration is now open for the 16th Social Business Day in Dhaka, Bangladesh',
        category: 'Social Business Day',
        image: conferenceImage,
        badge: 'Registration is open now'
      }
    ],
    quote: {
      label: 'Quotes From Professor Yunus',
      text:
        'I wanted to do something to help just one human being, hoping it would serve as a seed that could grow into something larger.'
    },
    programs: [
      {
        title: 'Immersion Program',
        text:
          'A compact learning visit for people who want first-hand exposure to social business institutions and Grameen ideas.'
      },
      {
        title: 'Exposure Visit',
        text:
          'A guided program for groups, universities, organizations, and practitioners exploring the social business ecosystem.'
      },
      {
        title: 'Yunus Centre Internship',
        text:
          'A learning opportunity for students and young professionals interested in social business, communication, and research.'
      }
    ],
    aboutTeasers: [
      {
        title: 'Who we are',
        text:
          'Yunus Centre is a global resource hub for social business, building relationships among institutions, researchers, and changemakers.'
      },
      {
        title: 'What we do',
        text:
          'The Centre promotes Professor Yunus\' philosophy through events, publications, social media, and programs across Bangladesh and abroad.'
      }
    ],
    socialBusiness: {
      heading: 'What is social business?',
      text:
        'A social business is a non-loss, non-dividend company created to solve a social problem. Investors may recover their investment, but the company exists for people and purpose rather than personal profit.',
      principles: [
        'Business objective will be to overcome poverty, or one or more problems which threaten people and society.',
        'Financial and economic sustainability.',
        'Investors get back their investment amount only.',
        'When investment amount is paid back, company profit stays with the company for expansion and improvement.',
        'Environmentally conscious.',
        'Workforce gets market wage with better working conditions.',
        'Do it with joy.'
      ]
    },
    worldMedia: [
      {
        title: 'Grameen Kalyan Launches Free Cervical and Breast Cancer Screening Initiative',
        date: '23rd April 2026',
        image: healthcareImage
      },
      {
        title: 'বিনামূল্যে জরায়ুমুখ ও ব্রেস্ট ক্যান্সার স্ক্রিনিং কার্যক্রম শুরু করল গ্রামীণ কল্যাণ',
        date: '23rd April 2026',
        image: healthcareImage
      },
      {
        title: 'চক্ষুচিকিৎসা ও নার্সিং কলেজ নিয়ে পরিসর বাড়াচ্ছে গ্রামীণ হেলথ',
        date: '22nd April 2026',
        image: educationImage
      }
    ],
    publications: [
      { title: 'FAQ ON YSBC', type: 'Guide' },
      { title: 'YC BROCHURE', type: 'Brochure' },
      { title: 'SPOT LIGHT', type: 'Magazine' },
      { title: 'Yunus Centre Interns Magazine #12', type: 'Magazine' }
    ],
    media: [
      {
        title: '"Artificial intelligence: a blessing or a curse?"',
        label: 'Video',
        image: conferenceImage
      },
      {
        title: 'Global Social Business Summit highlights',
        label: 'Gallery',
        image: communityImage
      }
    ],
    social: {
      facebook:
        'Yunus Centre continues to share updates from social business programs, publications, and international events.',
      twitter:
        'Follow the latest social business conversations, event notes, and Professor Yunus updates.'
    }
  },
  about: {
    title: 'Who we are',
    breadcrumb: 'Home / All Pages / Who we are',
    heroImage: fieldImage,
    quickNews: [
      'Grameen Kalyan Launches Free Cervical and Breast Cancer Screening Initiative',
      'বিনামূল্যে জরায়ুমুখ ও ব্রেস্ট ক্যান্সার স্ক্রিনিং কার্যক্রম শুরু করল গ্রামীণ কল্যাণ',
      'চক্ষুচিকিৎসা ও নার্সিং কলেজ নিয়ে পরিসর বাড়াচ্ছে গ্রামীণ হেলথ',
      'Expansion of Grameen Health Care Services continues with eye care and nursing college'
    ],
    article: {
      title: 'Global Hub for Social Business',
      date: 'About 14th December 2019',
      sections: [
        {
          heading: 'Global Hub for Social Business',
          body:
            'Since October 2006, when Professor Yunus and Grameen Bank jointly received the Nobel Peace Prize, local and international interest in Professor Yunus\' work has continuously increased. To address this growing attention, an organization aimed at promoting and disseminating Professor Yunus\' philosophy was created as the Yunus Secretariat. In July 2008, the Yunus Secretariat was renamed the Yunus Centre.'
        },
        {
          heading: 'What is Grameen social business?',
          body:
            'Professor Yunus has long promoted the creation of Grameen social businesses, which are non-loss, non-dividend companies dedicated entirely to achieving a social goal. The investor gets the investment money back over time, but never receives dividends beyond that amount.'
        }
      ]
    },
    related: [
      {
        title: 'চক্ষুচিকিৎসা ও নার্সিং কলেজ নিয়ে পরিসর বাড়াচ্ছে গ্রামীণ হেলথ',
        date: '22nd April 2026',
        excerpt:
          'গ্রামীণ হেলথ কেয়ার সার্ভিসেস সম্প্রতি ভিশন ২০৩০ রোডম্যাপের অধীনে নতুন উদ্যোগ গ্রহণ করেছে।',
        image: educationImage
      },
      {
        title: 'Expansion of Grameen Health Care Services continues with eye care and nursing college',
        date: '22nd April 2026',
        excerpt:
          'Grameen Health Care Services Limited is accelerating its growth under the Vision 2030 roadmap.',
        image: communityImage
      },
      {
        title: 'Registration is now open for the 16th Social Business Day in Dhaka, Bangladesh',
        date: '16th April 2026',
        excerpt:
          'The annual Social Business Day will gather practitioners, researchers, entrepreneurs, and students in Dhaka.',
        image: conferenceImage
      },
      {
        title: 'Professor Yunus emphasizes digital healthcare access during visit to Grameen Health Tech Office',
        date: '11th April 2026',
        excerpt:
          'Professor Yunus highlighted the importance of accessible digital healthcare and people-centered innovation.',
        image: healthcareImage
      }
    ]
  },
  news: [
    {
      title: 'Grameen Kalyan Launches Free Cervical and Breast Cancer Screening Initiative',
      category: 'Miscellaneous',
      date: '23rd April 2026',
      source: 'YC',
      excerpt:
        'DHAKA, April 23, 2026: Grameen Kalyan recently launched a healthcare initiative providing 20,000 completely free cervical and clinical breast cancer screenings to underprivileged women across Bangladesh.',
      image: healthcareImage,
      featured: true,
      order: 1
    },
    {
      title: 'বিনামূল্যে জরায়ুমুখ ও ব্রেস্ট ক্যান্সার স্ক্রিনিং কার্যক্রম শুরু করল গ্রামীণ কল্যাণ',
      category: 'Miscellaneous',
      date: '23rd April 2026',
      source: 'YC',
      excerpt:
        'ঢাকা, ২৩ এপ্রিল ২০২৬: গ্রামীণ কল্যাণ সম্প্রতি সুবিধাবঞ্চিত নারীদের জন্য সম্পূর্ণ বিনামূল্যে স্ক্রিনিং কার্যক্রম শুরু করেছে।',
      language: 'bn',
      order: 2
    },
    {
      title: 'চক্ষুচিকিৎসা ও নার্সিং কলেজ নিয়ে পরিসর বাড়াচ্ছে গ্রামীণ হেলথ',
      category: 'Miscellaneous',
      date: '22nd April 2026',
      source: 'YC',
      excerpt:
        'গ্রামীণ হেলথ কেয়ার সার্ভিসেস লিমিটেড ভিশন ২০৩০ রোডম্যাপের অধীনে স্বাস্থ্যসেবার পরিসর বাড়াচ্ছে।',
      language: 'bn',
      image: educationImage,
      order: 3
    },
    {
      title: 'Expansion of Grameen Health Care Services continues with eye care and nursing college',
      category: 'Miscellaneous',
      date: '22nd April 2026',
      source: 'YC',
      excerpt:
        'Grameen Health Care Services Limited is accelerating its growth under the comprehensive Vision 2030 roadmap, launching women-led Green Vision Centers and expanding medical education.',
      image: educationImage,
      order: 4
    },
    {
      title: 'Registration is now open for the 16th Social Business Day in Dhaka, Bangladesh',
      category: 'Social Business Day',
      date: '16th April 2026',
      source: 'YC',
      excerpt:
        'Registration is now open for the 16th Social Business Day, bringing the global social business community together in Dhaka.',
      image: conferenceImage,
      order: 5
    },
    {
      title: 'Professor Yunus emphasizes digital healthcare access during visit to Grameen Health Tech Office',
      category: 'Healthcare',
      date: '11th April 2026',
      source: 'YC',
      excerpt:
        'Professor Yunus emphasized digital healthcare access and new service models during a recent visit to Grameen Health Tech Office.',
      image: communityImage,
      order: 6
    },
    {
      title: '15th Social Business Day 2025 to be held on June 27-28',
      category: 'Social Business Day',
      date: '4th April 2026',
      source: 'YC',
      excerpt:
        'Social Business Day 2025 will bring together partners, academics, and social business builders for two days of exchange.',
      image: conferenceImage,
      order: 7
    }
  ],
  gallery: [
    {
      title: 'Japanese delegation from the YSBC at Kyushu University',
      image: conferenceImage,
      alt: 'Delegation visit'
    },
    {
      title: 'Home Page Banner',
      image: communityImage,
      alt: 'Community event banner'
    },
    {
      title: 'Summer of Purpose 2020',
      image: educationImage,
      alt: 'Students and participants at a program'
    },
    {
      title: 'Social Business Day in Dhaka',
      image: conferenceImage,
      alt: 'Conference hall'
    },
    {
      title: 'Yunus Centre Internship Session',
      image: educationImage,
      alt: 'Student learning session'
    },
    {
      title: 'Community Health Initiative',
      image: healthcareImage,
      alt: 'Healthcare outreach'
    }
  ],
  footer: {
    description:
      'Yunus Centre is a global hub for social business, research, learning, and initiatives inspired by Nobel Laureate Professor Muhammad Yunus.',
    quickLinks: ['About Us', 'Social Business', 'Visit Program', 'Publication', 'Media'],
    websiteLinks: ['Social Business Pedia', 'Yunus Social Business Centres', 'YSBC Web Lecture Series'],
    contact: {
      address: 'Dhaka, Bangladesh',
      email: 'info@yunuscentre.org',
      phone: '+880 2 913 6058'
    }
  }
};
