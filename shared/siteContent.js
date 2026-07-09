const asset = (file) => `/assets/doc/${file}`;

const images = {
  awardStage: asset('image7.jpg'),
  awardRoom: asset('image2.jpg'),
  reading: asset('image3.jpg'),
  education: asset('image4.png'),
  meeting: asset('image5.jpg'),
  community: asset('image6.jpg'),
  scholarship: asset('image1.jpg')
};

const shortBio =
  'I am Emran Hossain, a social entrepreneur, author, and changemaker dedicated to innovation, education, and community empowerment. My work spans technology, environment, literacy, agriculture, and community upliftment.';

const fullBio =
  'Through ventures and community-led initiatives, Emran Hossain works across technology, environmental action, literacy, agriculture, and social development. Recognized as Best Youth Organizer in 2021 and Top Scout in 2018, he believes in turning vision into action through practical institutions, books, learning programs, and opportunities for young people.';

export const siteContent = {
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Updates', path: '/news' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Books', path: '/news' },
    { label: 'Contact', path: '/about' }
  ],
  home: {
    hero: {
      quote: 'Turning vision into action for people, learning, and community.',
      attribution: 'Md. Emran Hossain',
      image: images.awardStage
    },
    featuredArticle: {
      title: 'Md. Emran Hossain: founder, chairman, CEO, author, and changemaker',
      category: 'Short Bio',
      date: '2026',
      month: 'BIO',
      day: '01',
      year: '2026',
      excerpt: shortBio
    },
    newsCards: [
      {
        title: 'Best Youth Organizer Award',
        category: 'Awards',
        image: images.awardRoom
      },
      {
        title: 'Community education and literacy initiatives',
        category: 'Education',
        image: images.education
      },
      {
        title: 'Grassroots community engagement',
        category: 'Community',
        image: images.community
      },
      {
        title: 'Companies and organizations established since 2020',
        category: 'Ventures',
        image: images.meeting,
        badge: 'Founder & Chairman'
      }
    ],
    quote: {
      label: 'Philosophy',
      text:
        'Innovation becomes meaningful when it educates, empowers, and creates practical opportunity for communities.'
    },
    programs: [
      {
        title: 'Initiative for Education',
        text:
          'Learning programs, public library work, science clubs, and school initiatives designed to expand access to knowledge.'
      },
      {
        title: 'Initiative for Environment',
        text:
          'Community awareness and action focused on greener habits, local responsibility, and sustainable development.'
      },
      {
        title: 'Initiative for Disabilities',
        text:
          'Inclusive community support that keeps dignity, participation, and practical help at the center.'
      }
    ],
    aboutTeasers: [
      {
        title: 'Founder, Chairman and Chief Executive Officer',
        text:
          'Emran has established and led companies and organizations across technology, agriculture, publishing, education, and social impact.'
      },
      {
        title: 'Author and cultural contributor',
        text:
          'His books include অঙ্কুর, সপ্তসংঘ, and ঝিনাইদহের মরমী কবি বলরাম শর্মা ও তাঁর কালজয়ী সাধন সংগীত.'
      }
    ],
    socialBusiness: {
      heading: 'Companies, nonprofits, and initiatives',
      text:
        'Since 2020, Emran has built a portfolio that combines enterprise with public-minded work, including Suborno IT, Emran Industries Limited, Emran Dairy Farm, libraries, clubs, publications, and education initiatives.',
      principles: [
        'Emran Industries Limited',
        'Emran Dairy Farm',
        'Suborno IT',
        'Md. Emran Hossain Public Library',
        'Udvabon Science & Technology Club',
        'Soptosongho Jubo Poribar',
        "Jhenaidah Writers' Club and Jhenaidah Publications"
      ]
    },
    worldMedia: [
      {
        title: 'শ্রেষ্ঠ যুব সংগঠক সম্মাননা - ২০২১',
        date: '2021',
        image: images.awardRoom
      },
      {
        title: 'শ্রেষ্ঠ স্কাউট - ২০১৮',
        date: '2018',
        image: images.awardStage
      },
      {
        title: 'সেরা পাঠক - ২০২১',
        date: '2021',
        image: images.reading
      }
    ],
    publications: [
      { title: 'অঙ্কুর', type: 'Book' },
      { title: 'সপ্তসংঘ', type: 'Book' },
      { title: 'ঝিনাইদহের মরমী কবি বলরাম শর্মা ও তাঁর কালজয়ী সাধন সংগীত', type: 'Book' },
      { title: 'Suborno IT and community initiatives', type: 'Profile' }
    ],
    media: [
      {
        title: 'Awards and recognition moments',
        label: 'Gallery',
        image: images.awardStage
      },
      {
        title: 'Education, community, and field initiatives',
        label: 'Gallery',
        image: images.community
      }
    ],
    social: {
      facebook:
        "Follow updates about Emran Hossain's initiatives, books, education work, and community programs.",
      twitter:
        'Track announcements, opportunities, and project notes from the Emran platform.'
    }
  },
  about: {
    title: 'About',
    breadcrumb: 'Home / About',
    heroImage: images.awardStage,
    quickNews: [
      'Scholarship Apply',
      'Career Form',
      'Invest Or Donate',
      'Survey'
    ],
    article: {
      title: 'Md. Emran Hossain',
      date: 'Founder, Chairman and Chief Executive Officer',
      sections: [
        {
          heading: 'Short Bio',
          body: shortBio
        },
        {
          heading: 'Full Descriptive Bio',
          body: fullBio
        },
        {
          heading: 'Philosophy',
          body:
            'The work is guided by a simple belief: ideas should become institutions, and institutions should create learning, dignity, opportunity, and measurable community value.'
        },
        {
          heading: 'Companies',
          body:
            'Established since 2020: Emran Industries Limited, Emran Dairy Farm, and Suborno IT.'
        },
        {
          heading: 'Non-profit and community organizations',
          body:
            "Md. Emran Hossain Public Library, Udvabon Science & Technology Club, Next Wave, Soptosongho Jubo Poribar, Jhenaidah Writers' Club, and Jhenaidah Publications."
        },
        {
          heading: 'Initiatives',
          body:
            'Current focus areas include disability inclusion, environmental action, education, Green Life International School, Kids Wave, and Suborno IT.'
        }
      ]
    },
    related: [
      {
        title: 'শ্রেষ্ঠ যুব সংগঠক সম্মাননা - ২০২১',
        date: '2021',
        excerpt:
          'Recognition from the Department of Youth Development, Jhenaidah, under the Ministry of Youth and Sports.',
        image: images.awardRoom
      },
      {
        title: 'শ্রেষ্ঠ স্কাউট - ২০১৮',
        date: '2018',
        excerpt:
          'Recognition for scouting leadership and discipline.',
        image: images.awardStage
      },
      {
        title: 'শ্রেষ্ঠ শিক্ষার্থী - ২০১৮',
        date: '2018',
        excerpt:
          'Student recognition connected to learning, leadership, and academic engagement.',
        image: images.reading
      },
      {
        title: 'সেরা পাঠক - ২০২১',
        date: '2021',
        excerpt:
          'A reading award reflecting a continuing commitment to books, literacy, and public learning.',
        image: images.reading
      }
    ]
  },
  news: [
    {
      title: 'Scholarship Apply',
      category: 'Opportunity',
      date: '2026',
      source: 'YC',
      excerpt:
        'A scholarship application pathway will be available for students and young people connected to education and community development programs.',
      image: images.scholarship,
      featured: true,
      order: 1
    },
    {
      title: 'Career Form',
      category: 'Career',
      date: '2026',
      source: 'YC',
      excerpt:
        'The career form will collect interest from people who want to contribute to technology, education, environment, publications, and community initiatives.',
      image: images.meeting,
      order: 2
    },
    {
      title: 'Invest Or Donate',
      category: 'Support',
      date: '2026',
      source: 'YC',
      excerpt:
        'Support pathways will be prepared for people and organizations who want to invest in or donate to education, inclusion, environment, and literacy initiatives.',
      image: images.community,
      order: 3
    },
    {
      title: 'Survey',
      category: 'Feedback',
      date: '2026',
      source: 'YC',
      excerpt:
        'A public survey is available to collect feedback, needs, and community insight for future programs.',
      image: images.education,
      order: 4
    },
    {
      title: 'Books by Emran Hossain',
      category: 'Books',
      date: '2026',
      source: 'YC',
      excerpt:
        'Featured books include অঙ্কুর, সপ্তসংঘ, and ঝিনাইদহের মরমী কবি বলরাম শর্মা ও তাঁর কালজয়ী সাধন সংগীত.',
      image: images.reading,
      order: 5
    }
  ],
  gallery: [
    {
      title: 'Award recognition ceremony',
      image: images.awardStage,
      alt: 'Emran Hossain receiving recognition on stage'
    },
    {
      title: 'Science and technology award program',
      image: images.awardRoom,
      alt: 'Award handover at a science and technology program'
    },
    {
      title: 'Reading and authorship',
      image: images.reading,
      alt: 'Emran Hossain reading beside a stack of books'
    },
    {
      title: 'Education support session',
      image: images.education,
      alt: 'Emran Hossain helping a child write'
    },
    {
      title: 'Community planning meeting',
      image: images.meeting,
      alt: 'Community meeting with local participants'
    },
    {
      title: 'Grassroots community visit',
      image: images.community,
      alt: 'Community visit with families and children'
    },
    {
      title: 'Scholarship and public support',
      image: images.scholarship,
      alt: 'Scholarship support handover'
    }
  ],
  footer: {
    description:
      "Emran is the platform for Emran Hossain's ventures, books, initiatives, opportunities, and community work.",
    quickLinks: ['About', 'Books', 'Companies', 'Initiatives', 'Contact'],
    websiteLinks: ['Suborno IT', 'Scholarship Apply', 'Career Form', 'Invest Or Donate', 'Survey'],
    contact: {
      address: 'Jhenaidah, Bangladesh',
      email: 'info@emran.bd',
      phone: 'Phone available on request'
    }
  }
};
