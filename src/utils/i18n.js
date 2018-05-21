// This will house all of our translation

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'Navigation 1':
          'White Paper',
        'Navigation 2':
          'Developers',
        'Navigation 3':
          'Core Tech',
        'Navigation 4':
          'Team',
        'Navigation 5':
          'Contact',
        'Hero Title':
          'Smart Ethernet Protocol',
        'Hero Description':
          'A new blockchain protocol using programmable packets to enhance security, privacy and net neutrality',
        'CTA Prompt':
          'Get early access to the SDK',
        'CTA 1':
          'Join Community',
        'CTA 2':
          'View Sample Code',
        'M1 Title':
          'Core Technology',
        'M1 Description':
          'The Marconi Protocol is designed down to the ethernet level and powers a decentralized networking stack that enhances privacy, security, net neutrality and upgradability.',
        'M1 Sub1 Title':
          'Ethernet-Level Encryption',
        'M1 Sub1 Description':
          'Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption that’s more secure than just using SSL and TLS',
        'M1 Sub2 Title':
          'Programmable Packets',
        'M1 Sub2 Description':
          'Decentralized apps with direct access to network packets provide network administration and security functionality without expensive custom hardware',
        'M1 Sub3 Title':
          'Branch Chains',
        'M1 Sub3 Description':
          'Branchable blockchains enable the creation of new decentralized networks without traditional infrastructure that’s controlled by just a few entities in any given region',
        'Learn More Prompt':
          'Learn more about the Marconi Platform',
        'Learn More CTA':
          'Read White Paper',
        'M2 Title':
          'Use Cases',
        'M2 Sub1 Title':
          'Token to Blockchain Migration',
        'M2 Sub1 Description':
          'Migrate token projects (i.e. ERC20) to their own chain where the tokens now provide utility by powering the blockchain',
        'M2 Sub2 Title':
          'Virtualized Blockchain',
        'M2 Sub2 Description':
          'Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence',
        'M2 Sub3 Title':
          'Dynamic Networks',
        'M2 Sub3 Description':
          'Rapidly deploy dynamic networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews',
        'M2 Sub4 Title':
          'Security Apps',
        'M2 Sub4 Description':
          'Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs',
        'M2 Sub5 Title':
          'Network Admin Apps',
        'M2 Sub5 Description':
          'Create administrative applications for network load balancing, changing network topology and IOT device management',
        'M2 Sub6 Title':
          'IOT Device Management',
        'M2 Sub6 Description':
          'Develop apps that address security, privacy and connectivity issues for IOT device management',
        'M3 Title':
          'Developers',
        'M3 Header 1':
          'Marconi Applications',
        'M3 Description 1':
          'Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets.',
        'M3 Description 2':
          'Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.',
        'M3 Header 2':
          'Marconi Library',
        'M3 Description 3':
          'APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.',
        'M3 CTA Prompt':
          'Get early access to the SDK',
        'M3 CTA 1':
          'Join Community',
        'M3 CTA 2':
          'Request Git Access',
        'M3 Tab1 Title':
          'Network Creation',
        'M3 Header 3':
          'sample code',
        'M3 Tab1 Description':
          'Spin up a new blockchain in just a few lines of code',
        'M3 Tab2 Title':
          'Network Admin',
        'M3 Tab2 Description':
          'Establish policies to determine what type of traffic is permitted on the network',
        'M3 Tab3 Title':
          'Anti-Phishing',
        'M3 Tab3 Description':
          'Analyze network traffic for phishing attacks such as masquerading URLs with unicode characters',
        'Team Bio Title':
          'Core Team',
        'Jong Title':
          'Blockchain',
        'Jong Description':
          'Bitcoin miner, blockchain developer & investor since 2011. Founder of HashLayer (2014-15) - one of the first multi-blockchain explorers. Led teams at Google that built networking technologies. CS from USC.',
        'Darryl Title':
          'Networking',
        'Darryl Description':
          'Led engineering teams that optimize networking and search systems at Google. Also developed software defined radios and network drivers at Qualcomm. CS from USC.',
        'Albert Title':
          'Security',
        'Albert Description':
          'Developed security systems and cryptographic services to secure consumer and internal data at CreditKarma. Software Engineering - UWaterloo.',
        'Di Title':
          'Platform',
        'Di Description':
          'Led engineering teams that created big data platforms at Credit Karma and Service Now. Previously, software engineer at tech giants like Microsoft and Intel. Software Engineering - UWaterloo.',
        'Kyle Title':
          'Infrastructure',
        'Kyle Description':
          'Built data center infrastructure at Google for scaling high density and wireless networks. CS at Gavilan, BA from UC Berkeley.',
        'Peter Title':
          'Operations',
        'Peter Description':
          'Blockchain investor since 2014. Executive and management roles at startups and corporations like Zynga and Microsoft. Computer Engineering from UWaterloo, MBA from Wharton.',
        'Chris Title':
          'Product & SDK',
        'Chris Description':
          'Developed APIs and SDKs at Apple for Mac OS X and Objective-C. Led product teams and launched apps at startups like Dropbox. CS from UCSD, MBA from Wharton.',
        'Advisors Title':
          'Advisors',
        'George Title':
          'CEO of WeTrust',
        'George Description':
          'Co-Founder of WeTrust - blockchain insurance platform backed by Vitalik Buterin, Bo Shen and Fenbushi Capital. Previously at Google and McKinsey. MS from Stanford.',
        'Matt Title':
          'Co-Founder of Origin',
        'Matt Description':
          'Co-Founder of Origin - protocol for creating sharing economy marketplaces using Ethereum and IPFS. Backed by Pantera Capital. Previously at Google. EE and MS from Stanford.',
        'Jay Title':
          'CEO of Spoke',
        'Jay Description':
          'Co-founded Appurify - mobile platform (acquired by Google) and Spoke - workplace AI (backed by Greylock and Accel). Accomplished researcher in microprocessor reliability. EE from IIT, PhD from UI Urbana Champaign.',
        'Joyce Title':
          'ML & IOT Researcher',
        'Joyce Description':
          'Pioneering researcher and author in machine learning comfort prediction using IOT. Previously, researcher in smart grids at Berkeley Labs. Engineering from UWaterloo, PhD from UCBerkeley.',
        'Glenn Title':
          'Serial Entrepreneur',
        'Glenn Description':
          'Co-Founded PDI (producer of Shrek and Madagascar series) and VanEdge Capital. CEO of DreamWorks Interactive. Advisor for corporations including Snapchat, Zynga & Citigroup.',
        'Stefan Title':
          'Finance',
        'Stefan Description':
          'Senior VP at Plenty ($226M raised – Softbank), ProsperWorks  ($86M raised – DHVC) and Harvest Power ($224M raised – Kleiner Perkins). Econ at UCBerkeley, MBA from Wharton',
        'Join Modal Title':
          'Get early access to the Marconi SDK and the latest product updates',
        'Join Modal Name':
          'Full name',
        'Join Modal Organization':
          'Organization',
        'Join Modal Description':
          'Why are you interested?',
        'Thanks Modal title':
          'Thank You!',
        'Thanks Modal welcome':
          'Welcome to the Marconi community'
      }
    },
    cn: {
      translations: {
        'Navigation 1':
          '白皮书',
        'Navigation 2':
          '开发人员',
        'Navigation 3':
          '核心技术',
        'Navigation 4':
          '团队',
        'Navigation 5':
          '联系方式',
        'Hero Title':
          '智能以太网协议',
        'Hero Description':
          '新的区块链协议，使用可编程的数据包提高安全性、私密性和网络中立性',
        'CTA Prompt':
          '抢先试用此 SDK',
        'CTA 1':
          '加入社区',
        'CTA 2':
          '查看示例代码',
        'M1 Title':
          '核心技术',
        'M1 Description':
          'Marconi 协议采用向下延伸覆盖至以太网的设计，并且支持去中心化网络堆栈，从而提高私密性、安全性、网络中立性和升级能力。',
        'M1 Sub1 Title':
          '以太网级加密',
        'M1 Sub1 Description':
          '在 OSI 模型第 2 层建立的安全通信管道提供数据包级加密，与仅使用 SSL 和 TLS 相比，提高了安全性',
        'M1 Sub2 Title':
          '可编程的数据包',
        'M1 Sub2 Description':
          '借助可以直接访问网络数据包的去中心化应用，无需昂贵的定制硬件，也可使用网络管理和安全功能',
        'M1 Sub3 Title':
          '分支链',
        'M1 Sub3 Description':
          '借助分支区块链，可以创建无需传统基础设施的全新去中心化网络，这些网络仅受指定区域的少数几个实体控制',
        'Learn More Prompt':
          '详细了解 Marconi 平台',
        'Learn More CTA':
          '阅读白皮书',
        'M2 Title':
          '用例',
        'M2 Sub1 Title':
          '区块链迁移通证',
        'M2 Sub1 Description':
          '将通证项目（即 ERC20）迁移至它们自己的链，现在在该链中，通证可以通过为区块链提供支持发挥效用',
        'M2 Sub2 Title':
          '虚拟化区块链',
        'M2 Sub2 Description':
          '启动利用 Marconi 网络的全新区块链，创建安全持久的区块',
        'M2 Sub3 Title':
          '动态网络',
        'M2 Sub3 Description':
          '在战场和救灾环境中快速部署动态网络。在总账中记录网络活动，以便事后分析',
        'M2 Sub4 Title':
          '安全应用',
        'M2 Sub4 Description':
          '创建去中心化安全应用，例如反网络钓鱼、反恶意软件、入侵预防系统和动态 VPN',
        'M2 Sub5 Title':
          '网络管理应用',
        'M2 Sub5 Description':
          '创建管理应用，以便平衡网络负载、更改网络拓扑结构和管理物联网设备',
        'M2 Sub6 Title':
          '物联网设备管理',
        'M2 Sub6 Description':
          '开发应用，解决物联网设备管理过程中存在的安全、隐私和连接问题',
        'M3 Title':
          '开发人员',
        'M3 Header 1':
          'Marconi 应用',
        'M3 Description 1':
          '使用 Marconi 脚本编写去中心化应用，该脚本是一种可以访问网络数据包的图灵完备的语言。',
        'M3 Description 2':
          '去中心化应用可以提交至公共和私有网络的全局链或分支链。',
        'M3 Header 2':
          'Marconi 库',
        'M3 Description 3':
          'API 可帮助路由流量、分析数据包、识别模式、创建分支链和迁移通证。',
        'M3 CTA Prompt':
          '抢先试用此 SDK',
        'M3 CTA 1':
          '加入社区',
        'M3 CTA 2':
          '请求 Git 访问权限',
        'M3 Tab1 Title':
          '网络创建',
        'M3 Header 3':
          '示例代码',
        'M3 Tab1 Description':
          '只需几行代码，即可注册新的区块链',
        'M3 Tab2 Title':
          '网络管理',
        'M3 Tab2 Description':
          '制定政策，确定网络允许的流量类型',
        'M3 Tab3 Title':
          '反网络钓鱼',
        'M3 Tab3 Description':
          '分析网络流量，识别网络钓鱼攻击，例如使用 Unicode 字符的伪装 URL',
        'Team Bio Title':
          '核心团队',
        'Jong Title':
          '区块链',
        'Jong Description':
          '自 2011 年开始比特币挖矿，投资和研发区块链。HashLayer（2014-2015 年）创始人 - 首位多区块链探索系统。曾在 Google 负责领导研发网络技术的团队。毕业于南加州大学计算机科学专业。',
        'Darryl Title':
          '网络',
        'Darryl Description':
          '曾在 Google 负责领导优化网络和搜索系统的工程团队。还为 Qualcomm 开发了软件定义的无线电和网络驱动程序。毕业于南加州大学计算机科学专业。',
        'Albert Title':
          '安全',
        'Albert Description':
          '开发了安全系统和加密服务，为 CreditKarma 的消费者和内部数据提供安全保护。毕业于滑铁卢大学软件工程专业。',
        'Di Title':
          '平台',
        'Di Description':
          '曾在 Credit Karma 和 Service Now 负责领导创建大数据平台的工程团队。之前曾就职于 Microsoft 和 Intel 等技术巨头，担任软件工程师。毕业于滑铁卢大学软件工程专业。',
        'Kyle Title':
          '基础设施',
        'Kyle Description':
          '为 Google 构建了用于扩展高密度无线网络的数据中心基础设施。曾就读于 Gavilan 的计算机科学专业，并获得了伯克利大学学士学位。',
        'Peter Title':
          '运营',
        'Peter Description':
          '自 2014 年开始投资区块链。曾在创业公司以及 Zynga 和 Microsoft 等大型公司担任执行和管理职务。曾就读于滑铁卢大学计算机工程专业，并获得了宾夕法尼亚大学沃顿商学院工商管理硕士学位。',
        'Chris Title':
          '产品和 SDK',
        'Chris Description':
          '为 Apple 开发了适用于 Mac OS X 和 Objective-C 的 API 及 SDK。在 Dropbox 等创业公司领导产品团队并发布应用。曾就读于圣地亚哥大学计算机科学专业，并获得了沃顿商学院工商管理硕士学位。',
        'Advisors Title':
          '顾问',
        'George Title':
          'WeTrust 首席执行官',
        'George Description':
          'WeTrust 联合创办人 - 区块链保障平台由 Vitalik Buterin、Bo Shen 和 Fenbushi Capital 提供支持。之前曾就职于 Google 和 McKinsey。获得了斯坦福大学理学硕士学位。',
        'Matt Title':
          'Origin 联合创办人',
        'Matt Description':
          'Origin 联合创办人 - 适用于创建使用以太坊和 IPFS 的共享经济市场的协议。由 Pantera Capital 主导。之前曾就职于 Google。曾就读于斯坦福大学的电子工程专业，并获得了理学硕士学位。',
        'Jay Title':
          'Spoke 首席执行官',
        'Jay Description':
          '共同创办了 Appurify - 移动平台（已被 Google 收购）和 Spoke - 工作场所人工智能（由 Greylock 和 Accel 提供支持）。在微处理器可靠性方面取得了突出的研究成果。曾就读于伊利诺伊理工学院电子工程专业，并获得了厄巴纳-尚佩恩大学博士学位。',
        'Joyce Title':
          '机器学习和物联网研究员',
        'Joyce Description':
          '具有开创精神的研究员，同时还编著了使用物联网进行机器学习舒适度预测。之前曾在伯克利实验室担任智能网格研究员。曾就读于滑铁卢大学工程专业，并获得了加利福尼亚大学伯克利分校博士学位。',
        'Glenn Title':
          '连续创业者',
        'Glenn Description':
          '联合创办了 PDI（此工作室制作发行过 <em>Shrek</em> 和 <em>Madagascar</em> 等动画系列）和 VanEdge Capital。DreamWorks Interactive 首席执行官。在 Zynga 和 Citigroup 等公司担任顾问。',
        'Stefan Title':
          '财务',
        'Stefan Description':
          'Plenty（筹集了 2.26 亿美元 – Softbank）、ProsperWorks（筹集了 8600 万美元 – DHVC）和 Harvest Power（筹集了 2.24 亿美元 – Kleiner Perkins）高级副总裁。曾就读于伯克利大学经济学专业，并获得了沃顿商学院工商管理硕士学位',
        'Join Modal Title':
          '提前获得Marconi SDK 和产品更新',
        'Join Modal Name':
          '名字',
        'Join Modal Organization':
          '组织',
        'Join Modal Description':
          '为什么感兴趣？',
        'Thanks Modal title':
          '谢谢！',
        'Thanks Modal welcome':
          '欢迎来到 Marconi 社团'
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
