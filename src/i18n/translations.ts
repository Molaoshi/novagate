export type Language = 'en' | 'zh' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      brand: 'NOVA GATE',
    },
    // Language switcher
    lang: {
      en: 'EN',
      zh: '中文',
      ar: 'العربية',
    },
    // Hero
    hero: {
      label1: 'Your Gateway to China',
      label2: 'NOVA GATE',
      label3: 'Sourcing · Consulting · Export',
      label4: 'Two Decades of Experience',
      label5: 'Scroll to Explore ↓',
    },
    // About section
    about: {
      overline: 'ABOUT US',
      heading: 'Your Trusted Partner for Import & Export from China',
      body: 'Nova Gate is a premier sourcing agent and China-based import & export consultant. With 20 years of hands-on experience, we help businesses worldwide navigate the complexities of Chinese manufacturing, negotiate the best deals, and ensure quality at every step. From market research to final delivery, we are your eyes and ears on the ground in China.',
      cta: 'Learn More',
    },
    // Services section
    services: {
      overline: 'WHAT WE DO',
      heading: 'Our Services',
      items: [
        {
          title: 'Market Research',
          titleZh: '市场调查',
          description: 'Deep-dive market analysis to identify the best products, suppliers, and pricing strategies for your business goals.',
          icon: 'Search',
        },
        {
          title: 'Supplier Verification',
          titleZh: '供应商验证',
          description: 'We thoroughly audit and verify suppliers to ensure reliability, compliance, and production capacity.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Negotiation & Contracting',
          titleZh: '谈判与签约',
          description: 'Expert negotiation to secure the best pricing, terms, and contract protections for your orders.',
          icon: 'FileSignature',
        },
        {
          title: 'Quality Control & Shipping',
          titleZh: '质量控制与运输',
          description: 'End-to-end quality inspections, logistics coordination, and shipping management to your doorstep.',
          icon: 'PackageCheck',
        },
        {
          title: 'Factory Visits',
          titleZh: '工厂参观',
          description: 'On-site factory inspections and audits to verify manufacturing capabilities, working conditions, and quality systems.',
          icon: 'Factory',
        },
        {
          title: 'Fair & Expo Exploration',
          titleZh: '展会参观与探索',
          description: 'Guided visits to trade shows and expos across China to discover new products, trends, and business opportunities.',
          icon: 'Globe',
        },
      ],
      cta: 'Learn More',
    },
    // Founder section
    founder: {
      overline: 'FOUNDER',
      heading: 'Moataz Farghaly',
      body: 'A serial entrepreneur with two decades of experience in international trade between China and the Middle East. Moataz has built a reputation as a trusted bridge connecting Chinese manufacturers with global markets. His deep understanding of both business cultures ensures smooth, successful partnerships. He has signed agreements with Al-Watania Company, registered export brands in KSA, maintains direct communication with the Zayed Higher Organization, and has strong political connections with appointments at the Guangzhou Consulate.',
      cta: 'Get in Touch →',
    },
    // Gallery section
    gallery: {
      overline: 'GALLERY',
      heading: 'Events & Factory Visits',
      body: 'A glimpse into our work — trade shows, factory audits, client meetings, and team moments across China.',
    },
    // Testimonials
    testimonials: {
      overline: 'CLIENT VOICES',
      heading: 'What Our Clients Say',
      items: [
        {
          quote: 'Nova Gate made our sourcing process incredibly smooth. They found us a supplier that exceeded our quality expectations at 20% below our budget.',
          author: 'Ahmed H.',
          location: 'Dubai',
        },
        {
          quote: "The team's knowledge of Chinese manufacturing is unmatched. They handled everything from negotiation to shipping with professionalism.",
          author: 'Li Wei',
          location: 'Shanghai',
        },
        {
          quote: 'Working with Moataz and his team felt like having our own office in China. Professional, responsive, and always one step ahead.',
          author: 'Sarah K.',
          location: 'Riyadh',
        },
      ],
    },
    // CTA section
    cta: {
      heading: 'Ready to Start Your China Sourcing Journey?',
      body: "Let's discuss how Nova Gate can help you find the right suppliers, negotiate better deals, and grow your business.",
      button: 'Contact Us',
    },
    // Footer
    footer: {
      brand: 'NOVA GATE',
      tagline: 'Your Gateway to China',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      email: 'info@novagate.com',
      phone: '+86 189 0286 1875',
      address: 'Room 1706-3, 17th Floor, No. 123 Jiefang South Road, Yuexiu District, Guangzhou',
      copyright: '© 2025 Nova Gate. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Contact page
    contact: {
      overline: 'GET IN TOUCH',
      heading: 'Contact Us',
      body: 'Ready to start your China sourcing journey? Reach out to us via any of the channels below.',
      addressLabel: 'Address',
      address: 'Room 1706-3, 17th Floor, No. 123 Jiefang South Road, Yuexiu District, Guangzhou',
      addressZh: '广州市越秀区解放南路123号17层1706-3',
      phoneLabel: 'Phone / WhatsApp',
      phone: '+86 189 0286 1875',
      emailLabel: 'Email',
      wechatLabel: 'WeChat',
      wechatId: 'FairsChina',
      scanTitle: 'Scan to Connect',
      scanBody: 'Scan the QR codes below to add us on WeChat or start a WhatsApp chat.',
      wechatQrLabel: 'WeChat',
      wechatQrCaption: 'Scan to add on WeChat',
      whatsappQrLabel: 'WhatsApp',
      whatsappQrCaption: 'Scan to chat on WhatsApp',
      socialsTitle: 'Follow Us',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! We will get back to you soon.',
      },
    },
    // About page
    aboutPage: {
      overline: 'ABOUT US',
      heading: 'Building Bridges Between China & The World',
      body1: 'Nova Gate is a leading sourcing agent and import/export consulting firm based in Guangzhou, China. With offices in Zhuhai and Shenzhen, we provide comprehensive trade services that help businesses worldwide access the vast opportunities of Chinese manufacturing.',
      body2: 'Founded by Moataz Farghaly, a serial entrepreneur with over 20 years of experience in international trade, Nova Gate has established itself as a trusted partner for companies across the Middle East, Africa, Europe, and the Americas.',
      mission: {
        overline: 'OUR MISSION',
        heading: 'To Simplify Global Trade',
        body: 'We believe that sourcing from China should be straightforward, transparent, and profitable. Our mission is to remove the barriers, language gaps, and uncertainties that businesses face when dealing with Chinese manufacturers.',
      },
      values: {
        overline: 'OUR VALUES',
        heading: 'What Drives Us',
        items: [
          { title: 'Integrity', description: 'We operate with complete transparency in all our dealings.' },
          { title: 'Excellence', description: 'We strive for the highest standards in service delivery.' },
          { title: 'Partnership', description: 'We view every client relationship as a long-term partnership.' },
          { title: 'Innovation', description: 'We continuously seek better ways to serve our clients.' },
        ],
      },
      team: {
        overline: 'OUR TEAM',
        heading: 'Meet the People Behind Nova Gate',
        body: 'Our diverse team combines local Chinese expertise with international business acumen. From sourcing specialists to quality control experts, we have the right people to handle every aspect of your China sourcing needs.',
      },
      achievements: {
        overline: 'ACHIEVEMENTS',
        heading: 'Key Milestones',
        items: [
          'Signed exclusive agreements with Al-Watania Company',
          'Registered multiple export brands in KSA',
          'Direct communication channel with Zayed Higher Organization',
          'Official appointments at Guangzhou Consulate',
          '20+ years of international trade experience',
          'Offices in Guangzhou, Zhuhai & Shenzhen',
        ],
      },
    },
    // Services page
    servicesPage: {
      overline: 'OUR SERVICES',
      heading: 'Comprehensive Sourcing Solutions',
      body: 'From initial market research to final delivery, Nova Gate provides end-to-end sourcing and import/export services tailored to your business needs.',
      cta: 'Get a Free Consultation',
    },
    // Hero section on home
    heroHome: {
      overline: 'NOVA GATE',
      heading: 'Your Gateway to China',
      subheading: 'Premium Sourcing Agent & Import/Export Consultant',
      body: 'With two decades of experience, we help businesses worldwide navigate Chinese manufacturing, find the best suppliers, and ensure quality at every step.',
      ctaPrimary: 'Explore Services',
      ctaSecondary: 'Contact Us',
    },
  },

  zh: {
    // Navigation
    nav: {
      home: '首页',
      services: '服务',
      about: '关于',
      contact: '联系',
      brand: 'NOVA GATE',
    },
    // Language switcher
    lang: {
      en: 'EN',
      zh: '中文',
      ar: 'العربية',
    },
    // Hero
    hero: {
      label1: '您通往中国的大门',
      label2: 'NOVA GATE',
      label3: '采购 · 咨询 · 出口',
      label4: '二十年经验',
      label5: '向下滚动探索 ↓',
    },
    // About section
    about: {
      overline: '关于我们',
      heading: '您值得信赖的中国进出口合作伙伴',
      body: 'Nova Gate是一家优质采购代理商和中国本土进出口咨询公司。凭借20年的实践经验，我们帮助全球企业应对中国制造业的复杂性，谈判最佳交易，并在每一步确保质量。从市场调研到最终交付，我们是您在中国的耳目。',
      cta: '了解更多',
    },
    // Services section
    services: {
      overline: '我们的服务',
      heading: '服务项目',
      items: [
        {
          title: '市场调查',
          titleZh: '市场调查',
          description: '深入市场分析，识别最适合您业务目标的产品、供应商和定价策略。',
          icon: 'Search',
        },
        {
          title: '供应商验证',
          titleZh: '供应商验证',
          description: '我们彻底审核和验证供应商，确保可靠性、合规性和生产能力。',
          icon: 'ShieldCheck',
        },
        {
          title: '谈判与签约',
          titleZh: '谈判与签约',
          description: '专业谈判，为您的订单争取最优惠的价格、条款和合同保护。',
          icon: 'FileSignature',
        },
        {
          title: '质量控制与运输',
          titleZh: '质量控制与运输',
          description: '端到端质量检验、物流协调和运输管理，直送您的门口。',
          icon: 'PackageCheck',
        },
        {
          title: '工厂参观',
          titleZh: '工厂参观',
          description: '现场工厂检查和审核，验证制造能力、工作条件和质量体系。',
          icon: 'Factory',
        },
        {
          title: '展会参观与探索',
          titleZh: '展会参观与探索',
          description: '陪同参观中国各地的贸易展览和博览会，发现新产品、趋势和商业机会。',
          icon: 'Globe',
        },
      ],
      cta: '了解更多',
    },
    // Founder section
    founder: {
      overline: '创始人',
      heading: '穆阿塔兹·法尔加利',
      body: '一位拥有二十年中东与中国国际贸易经验的连续创业者。穆阿塔兹建立了连接中国制造商与全球市场的可信赖桥梁的声誉。他对两种商业文化的深刻理解确保了顺畅、成功的合作伙伴关系。他与Al-Watania公司签署了协议，在沙特注册了出口品牌，与扎耶德高级组织保持直接沟通，并在广州领事馆担任职务。',
      cta: '联系我们 →',
    },
    // Gallery section
    gallery: {
      overline: '图库',
      heading: '活动与工厂参观',
      body: '我们工作的缩影——贸易展览、工厂审核、客户会议和中国各地的团队时刻。',
    },
    // Testimonials
    testimonials: {
      overline: '客户评价',
      heading: '客户怎么说',
      items: [
        {
          quote: 'Nova Gate让我们的采购过程变得非常顺利。他们为我们找到的供应商超出了我们的质量预期，价格还比预算低了20%。',
          author: '艾哈迈德·H',
          location: '迪拜',
        },
        {
          quote: '团队对中国制造业的了解是无与伦比的。他们以专业的态度处理了从谈判到运输的一切事务。',
          author: '李伟',
          location: '上海',
        },
        {
          quote: '与穆阿塔兹和他的团队合作，感觉就像在中国有了自己的办公室。专业、反应迅速，总是领先一步。',
          author: '莎拉·K',
          location: '利雅得',
        },
      ],
    },
    // CTA section
    cta: {
      heading: '准备好开始您的中国采购之旅了吗？',
      body: '让我们讨论Nova Gate如何帮助您找到合适的供应商，谈判更好的交易，并发展您的业务。',
      button: '联系我们',
    },
    // Footer
    footer: {
      brand: 'NOVA GATE',
      tagline: '您通往中国的大门',
      quickLinks: '快速链接',
      contact: '联系方式',
      email: 'info@novagate.com',
      phone: '+86 189 0286 1875',
      address: '广州市越秀区解放南路123号17层1706-3',
      copyright: '© 2025 Nova Gate。保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款',
    },
    // Contact page
    contact: {
      overline: '联系我们',
      heading: '联系我们',
      body: '准备好开始您的中国采购之旅了吗？通过以下任何渠道与我们联系。',
      addressLabel: '地址',
      address: 'Room 1706-3, 17th Floor, No. 123 Jiefang South Road, Yuexiu District, Guangzhou',
      addressZh: '广州市越秀区解放南路123号17层1706-3',
      phoneLabel: '电话 / WhatsApp',
      phone: '+86 189 0286 1875',
      emailLabel: '电子邮件',
      wechatLabel: '微信',
      wechatId: 'FairsChina',
      scanTitle: '扫码联系',
      scanBody: '扫描下方的二维码，添加我们的微信或开始WhatsApp聊天。',
      wechatQrLabel: '微信',
      wechatQrCaption: '扫码添加微信',
      whatsappQrLabel: 'WhatsApp',
      whatsappQrCaption: '扫码开始WhatsApp聊天',
      socialsTitle: '关注我们',
      form: {
        name: '您的姓名',
        email: '您的邮箱',
        message: '您的留言',
        submit: '发送消息',
        success: '谢谢您！我们会尽快回复您。',
      },
    },
    // About page
    aboutPage: {
      overline: '关于我们',
      heading: '搭建中国与世界之间的桥梁',
      body1: 'Nova Gate是一家总部位于中国广州的领先采购代理商和进出口咨询公司。我们在珠海和深圳设有办事处，提供全面的贸易服务，帮助全球企业获取中国制造业的巨大机遇。',
      body2: '公司由拥有20多年国际贸易经验的连续创业者穆阿塔兹·法尔加利创立，Nova Gate已成为中东、非洲、欧洲和美洲企业值得信赖的合作伙伴。',
      mission: {
        overline: '我们的使命',
        heading: '简化全球贸易',
        body: '我们相信，从中国采购应该是简单、透明和有利可图的。我们的使命是消除企业在与中国制造商打交道时面临的障碍、语言差距和不确定性。',
      },
      values: {
        overline: '我们的价值观',
        heading: '驱动我们的力量',
        items: [
          { title: '诚信', description: '我们在所有交易中保持完全透明。' },
          { title: '卓越', description: '我们努力达到服务交付的最高标准。' },
          { title: '合作', description: '我们将每个客户关系视为长期合作伙伴关系。' },
          { title: '创新', description: '我们不断寻求更好的方式来服务客户。' },
        ],
      },
      team: {
        overline: '我们的团队',
        heading: '认识Nova Gate背后的人',
        body: '我们多元化的团队将中国本土专业知识与国际商业敏锐度相结合。从采购专家到质量控制专家，我们拥有合适的人员来处理您中国采购需求的各个方面。',
      },
      achievements: {
        overline: '成就',
        heading: '重要里程碑',
        items: [
          '与Al-Watania公司签署独家协议',
          '在沙特注册多个出口品牌',
          '与扎耶德高级组织建立直接沟通渠道',
          '在广州领事馆担任官方职务',
          '20多年国际贸易经验',
          '在广州、珠海和深圳设有办事处',
        ],
      },
    },
    // Services page
    servicesPage: {
      overline: '我们的服务',
      heading: '全面的采购解决方案',
      body: '从最初的市场调研到最终交付，Nova Gate提供量身定制的端到端采购和进出口服务，满足您的业务需求。',
      cta: '获取免费咨询',
    },
    // Hero section on home
    heroHome: {
      overline: 'NOVA GATE',
      heading: '您通往中国的大门',
      subheading: '优质采购代理商与进出口顾问',
      body: '凭借二十年的经验，我们帮助全球企业驾驭中国制造业，找到最佳供应商，并在每一步确保质量。',
      ctaPrimary: '探索服务',
      ctaSecondary: '联系我们',
    },
  },

  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      brand: 'NOVA GATE',
    },
    // Language switcher
    lang: {
      en: 'EN',
      zh: '中文',
      ar: 'العربية',
    },
    // Hero
    hero: {
      label1: 'بوابتك إلى الصين',
      label2: 'NOVA GATE',
      label3: 'التوريد · الاستشارات · التصدير',
      label4: 'عقدان من الخبرة',
      label5: 'scroll لاستكشاف ↓',
    },
    // About section
    about: {
      overline: 'من نحن',
      heading: 'شريكك الموثوق للاستيراد والتصدير من الصين',
      body: 'Nova Gate هي وكيل sourcing متميز وشركة استشارات استيراد وتصدير مقرها الصين. مع 20 عاماً من الخبرة العملية، نساعد الشركات في جميع أنحاء العالم على التنقل في تعقيدات التصنيع الصيني، والتفاوض على أفضل الصفقات، وضمان الجودة في كل خطوة.',
      cta: 'اعرف المزيد',
    },
    // Services section
    services: {
      overline: 'ما نقدمه',
      heading: 'خدماتنا',
      items: [
        {
          title: 'دراسة السوق',
          titleZh: '市场调查',
          description: 'تحليل سوقي معمق لتحديد أفضل المنتجات والموردين واستراتيجيات التسعير لأهداف عملك.',
          icon: 'Search',
        },
        {
          title: 'التحقق من الموردين',
          titleZh: '供应商验证',
          description: 'نقوم بالتدقيق الشامل والتحقق من الموردين لضمان الموثوقية والامتثال والقدرة الإنتاجية.',
          icon: 'ShieldCheck',
        },
        {
          title: 'التفاوض والتعاقد',
          titleZh: '谈判与签约',
          description: 'تفاوض خبير للحصول على أفضل الأسعار والشروط وحماية العقود لطلباتك.',
          icon: 'FileSignature',
        },
        {
          title: 'مراقبة الجودة والشحن',
          titleZh: '质量控制与运输',
          description: 'فحص جودة شامل، وتنسيق لوجستي، وإدارة الشحن إلى باب منزلك.',
          icon: 'PackageCheck',
        },
        {
          title: 'زيارات المصانع',
          titleZh: '工厂参观',
          description: 'تفتيش ومراجعة ميدانية للمصانع للتحقق من قدرات التصنيع وظروف العمل وأنظمة الجودة.',
          icon: 'Factory',
        },
        {
          title: 'استكشاف المعارض',
          titleZh: '展会参观与探索',
          description: 'زيارات مصحوبة لمعارض التجارة والمعارض في جميع أنحاء الصين لاكتشاف منتجات واتجاهات وفرص عمل جديدة.',
          icon: 'Globe',
        },
      ],
      cta: 'اعرف المزيد',
    },
    // Founder section
    founder: {
      overline: 'المؤسس',
      heading: 'معتز فرغلي',
      body: 'رائد أعمال متسلسل يتمتع بعقدين من الخبرة في التجارة الدولية بين الصين والشرق الأوسط. بنى معتز سمعة كجسر موثوق يربط المصنعين الصينيين بالأسواق العالمية. فهمه العميق لكلا الثقافتين التجاريتين يضمن شراكات سلسة وناجحة. وقع اتفاقيات مع شركة الوطنية وسجل علامات تصدير في المملكة العربية السعودية ويحافظ على تواصل مباشر مع مؤسسة زايد العليا وله علاقات سياسية قوية مع تعيينات في قنصلية جوانزو.',
      cta: 'تواصل معنا →',
    },
    // Gallery section
    gallery: {
      overline: 'معرض الصور',
      heading: 'الفعاليات وزيارات المصانع',
      body: 'لمحة عن عملنا — المعارض التجارية، وتدقيق المصانع، واجتماعات العملاء، ولحظات الفريق في جميع أنحاء الصين.',
    },
    // Testimonials
    testimonials: {
      overline: 'آراء العملاء',
      heading: 'ماذا يقول عملاؤنا',
      items: [
        {
          quote: 'جعلت Nova Gate عملية التوريد لدينا سلسة بشكل لا يصدق. وجدوا لنا مورداً تجاوز توقعاتنا الجودية بـ 20٪ أقل من ميزانيتنا.',
          author: 'أحمد ح.',
          location: 'دبي',
        },
        {
          quote: 'معرفة الفريق بالتصنيع الصيني لا مثيل لها. تعاملوا مع كل شيء من التفاوض إلى الشحن باحترافية.',
          author: 'لي وي',
          location: 'شنغهاي',
        },
        {
          quote: 'العمل مع معتز وفريقه كان يشعر وكأن لدينا مكتبنا الخاص في الصين. محترفون ومتجاوبون ودائماً خطوة إلى الأمام.',
          author: 'سارة ك.',
          location: 'الرياض',
        },
      ],
    },
    // CTA section
    cta: {
      heading: 'هل أنت مستعد لبدء رحلة التوريد من الصين؟',
      body: 'دعنا نناقش كيف يمكن لـ Nova Gate مساعدتك في العثور على الموردين المناسبين، والتفاوض على صفقات أفضل، وتنمية عملك.',
      button: 'اتصل بنا',
    },
    // Footer
    footer: {
      brand: 'NOVA GATE',
      tagline: 'بوابتك إلى الصين',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      email: 'info@novagate.com',
      phone: '+86 189 0286 1875',
      address: 'Room 1706-3, 17th Floor, No. 123 Jiefang South Road, Yuexiu District, Guangzhou',
      copyright: '© 2025 Nova Gate. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
    // Contact page
    contact: {
      overline: 'تواصل معنا',
      heading: 'اتصل بنا',
      body: 'مستعد لبدء رحلة التوريد من الصين؟ تواصل معنا عبر أي من القنوات أدناه.',
      addressLabel: 'العنوان',
      address: 'Room 1706-3, 17th Floor, No. 123 Jiefang South Road, Yuexiu District, Guangzhou',
      addressZh: '广州市越秀区解放南路123号17层1706-3',
      phoneLabel: 'الهاتف / واتساب',
      phone: '+86 189 0286 1875',
      emailLabel: 'البريد الإلكتروني',
      wechatLabel: 'WeChat',
      wechatId: 'FairsChina',
      scanTitle: 'امسح للتواصل',
      scanBody: 'امسح رموز QR أدناه لإضافتنا على WeChat أو بدء محادثة WhatsApp.',
      wechatQrLabel: 'WeChat',
      wechatQrCaption: 'امسح للإضافة على WeChat',
      whatsappQrLabel: 'WhatsApp',
      whatsappQrCaption: 'امسح للدردشة على WhatsApp',
      socialsTitle: 'تابعنا',
      form: {
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        success: 'شكراً لك! سنعود إليك قريباً.',
      },
    },
    // About page
    aboutPage: {
      overline: 'من نحن',
      heading: 'بناء جسور بين الصين والعالم',
      body1: 'Nova Gate هي شركة رائدة في مجال وكالة التوريد واستشارات الاستيراد والتصدير مقرها في جوانزو، الصين. مع مكاتب في Zhuhai وShenzhen، نقدم خدمات تجارية شاملة تساعد الشركات في جميع أنحاء العالم على الوصول إلى الفرص الهائلة للتصنيع الصيني.',
      body2: 'تأسست الشركة على يد معتز فرغلي، رائد أعمال متسلسل يتمتع بأكثر من 20 عاماً من الخبرة في التجارة الدولية، وقد أصبحت Nova Gate شريكاً موثوقاً للشركات في جميع أنحاء الشرق الأوسط وأفريقيا وأوروبا والأمريكتين.',
      mission: {
        overline: 'مهمتنا',
        heading: 'تبسيط التجارة العالمية',
        body: 'نؤمن أن التوريد من الصين يجب أن يكون مباشراً وشفافاً ومربحاً. مهمتنا هي إزالة الحواجز وفجوات اللغة وعدم اليقين التي تواجهها الشركات عند التعامل مع المصنعين الصينيين.',
      },
      values: {
        overline: 'قيمنا',
        heading: 'ما الذي يدفعنا',
        items: [
          { title: 'النزاهة', description: 'نعمل بشفافية كاملة في جميع تعاملاتنا.' },
          { title: 'التميز', description: 'نسعى لأعلى المعايير في تقديم الخدمات.' },
          { title: 'الشراكة', description: 'ننظر إلى كل علاقة عميل كشراكة طويلة الأمد.' },
          { title: 'الابتكار', description: 'نسعى باستمرار لطرق أفضل لخدمة عملائنا.' },
        ],
      },
      team: {
        overline: 'فريقنا',
        heading: 'تعرف على الأشخاص خلف Nova Gate',
        body: 'يجمع فريقنا المتنوع بين الخبرة الصينية المحلية والحس التجاري الدولي. من متخصصي التوريد إلى خبراء مراقبة الجودة، لدينا الأشخاص المناسبين للتعامل مع كل جانب من جوانب احتياجات التوريد الصينية الخاصة بك.',
      },
      achievements: {
        overline: 'الإنجازات',
        heading: 'معالم رئيسية',
        items: [
          'توقيع اتفاقيات حصرية مع شركة الوطنية',
          'تسجيل علامات تصدير متعددة في المملكة العربية السعودية',
          'قناة تواصل مباشر مع مؤسسة زايد العليا',
          'تعيينات رسمية في قنصلية جوانزو',
          'أكثر من 20 عاماً من الخبرة في التجارة الدولية',
          'مكاتب في جوانزو وزوهاي وشنزن',
        ],
      },
    },
    // Services page
    servicesPage: {
      overline: 'خدماتنا',
      heading: 'حلول شاملة للتوريد',
      body: 'من البحث الأولي في السوق إلى التسليم النهائي، توفر Nova Gate خدمات التوريد والاستيراد والتصدير الشاملة المصممة خصيصاً لاحتياجات عملك.',
      cta: 'احصل على استشارة مجانية',
    },
    // Hero section on home
    heroHome: {
      overline: 'NOVA GATE',
      heading: 'بوابتك إلى الصين',
      subheading: 'وكيل التوريد المتميز ومستشار الاستيراد والتصدير',
      body: 'مع عقدين من الخبرة، نساعد الشركات في جميع أنحاء العالم على التنقل في التصنيع الصيني، وإيجاد أفضل الموردين، وضمان الجودة في كل خطوة.',
      ctaPrimary: 'استكشف الخدمات',
      ctaSecondary: 'اتصل بنا',
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.zh | typeof translations.ar;
