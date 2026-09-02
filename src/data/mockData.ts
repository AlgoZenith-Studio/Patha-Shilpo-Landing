import { Artisan, PressArticle, FaqItem, Testimonial } from '../types';

export const FEATURED_ARTISANS: Artisan[] = [
  {
    id: 'kamala-devi',
    name: 'Kamala Devi',
    nameHi: 'कमला देवी',
    craft: 'Chanderi Silk Weaving',
    craftHi: 'चंदेरी सिल्क बुनाई',
    cluster: 'Chanderi, Madhya Pradesh',
    clusterHi: 'चंदेरी, मध्य प्रदेश',
    story: 'Weaves pure silk sarees on a traditional pit loom. Each 6-yard saree takes up to 14 days of dedicated handcrafting.',
    storyHi: 'पारंपरिक गड्ढा करघे पर शुद्ध रेशम की साड़ियां बुनती हैं। प्रत्येक 6 गज की साड़ी में 14 दिनों का कठिन परिश्रम लगता है।',
    experienceYears: 24,
    image: '/assets/kamala.jpg',
    productsCount: 18,
    sampleProduct: {
      title: 'Handwoven Chanderi Silk Zari Saree',
      titleHi: 'हाथ से बुनी चंदेरी सिल्क ज़री साड़ी',
      price: 2850,
      image: 'saree'
    }
  },
  {
    id: 'ramesh-kashyap',
    name: 'Ramesh Kashyap',
    nameHi: 'रमेश कश्यप',
    craft: 'Dhokra Bell-Metal Casting',
    craftHi: 'ढोकरा धातु शिल्प',
    cluster: 'Bastar, Chhattisgarh',
    clusterHi: 'बस्तर, छत्तीसगढ़',
    story: 'Practices 4,000-year-old lost-wax metal casting. Creates intricate tribal figurines from scrap brass and natural beeswax.',
    storyHi: '4,000 साल पुरानी लॉस्ट-वैक्स पद्धति से कांस्य मूर्तियां बनाते हैं। हर मूर्ति अपने आप में अनोखी होती है।',
    experienceYears: 19,
    image: '/assets/ramesh.jpg',
    productsCount: 12,
    sampleProduct: {
      title: 'Tribal Musician Dhokra Figurine',
      titleHi: 'ढोकरा जनजातीय संगीतकार मूर्ति',
      price: 1650,
      image: 'dhokra'
    }
  },
  {
    id: 'sunita-jha',
    name: 'Sunita Jha',
    nameHi: 'सुनीता झा',
    craft: 'Mithila / Madhubani Painting',
    craftHi: 'मिथिला / मधुबनी चित्रकला',
    cluster: 'Madhubani, Bihar',
    clusterHi: 'मधुबनी, बिहार',
    story: 'Paints using natural pigments extracted from turmeric, indigo, and marigold with fine bamboo nibs on handmade rag paper.',
    storyHi: 'हल्दी, नील और गेंदे के फूलों से बने प्राकृतिक रंगों और बांस की कलम से हस्तनिर्मित कागज़ पर पेंटिंग करती हैं।',
    experienceYears: 15,
    image: '/assets/sunita.jpg',
    productsCount: 25,
    sampleProduct: {
      title: 'Tree of Life Madhubani Artwork',
      titleHi: 'जीवन का वृक्ष (Tree of Life) मधुबनी पेंटिंग',
      price: 1950,
      image: 'madhubani'
    }
  }
];

export const PRESS_ARTICLES: PressArticle[] = [
  {
    slug: 'rural-india-ai-revolution-pathashilpa',
    title: 'How a 90-Second Voice-First App is Bridging India’s ₹0.2% Handloom Conundrum',
    publication: 'The Economic Chronicle (Sample Feature)',
    date: 'February 2026',
    readTime: '4 min read',
    category: 'Technology & Grassroots',
    summary: 'Despite 95.5% rural smartphone ownership, barely 0.2% of handloom sales happen online. Pathashilpa brings offline cataloging directly to village looms.',
    content: [
      'In the historic weaving cluster of Chanderi, Madhya Pradesh, weavers no longer need to type product descriptions in English or rely on urban intermediaries.',
      'With Pathashilpa, an artisan takes a single photograph and speaks a voice note in Hindi or Bundeli. The application computes a mathematically defensible cost floor and auto-generates bilingual listings without requiring internet connectivity.',
      'By publishing directly into ONDC and GeM, government procurement and retail buyers get verified GI authentic crafts with complete transparency.'
    ]
  },
  {
    slug: 'fair-pricing-formula-explained',
    title: 'Ending the Guesswork: Why Open Algorithmic Cost Floors Protect Indigenous Artisans',
    publication: 'Crafts Council Bulletin (Sample Review)',
    date: 'January 2026',
    readTime: '5 min read',
    category: 'Artisan Economics',
    summary: 'Traditional artisans frequently sell below cost when traders negotiate down. Pathashilpa introduces an open, audible fair-price benchmark.',
    content: [
      'The average handicraft artisan in India earns approximately ₹270 per day, often unaware of how their material costs compound with daily labor.',
      'Pathashilpa locks a mandatory cost floor formula: (Material + Hours × ₹150) × 1.15. The artisan can hear the reason why their craft is worth ₹2,850 before tapping publish.',
      'Evaluators at Smart India Hackathon praised the offline sync engine which guarantees that the artisan price never changes even after cloud re-indexing.'
    ]
  },
  {
    slug: 'ondc-gem-public-infrastructure-linkage',
    title: 'Direct From Loom to Public GeM Storefronts via Open Digital Rails',
    publication: 'Digital India Quarterly (Sample Demo)',
    date: 'February 2026',
    readTime: '3 min read',
    category: 'Public Infrastructure',
    summary: 'How Smart India Hackathon 2026 innovator Pathashilpa leverages Bhashini and ONDC to eliminate platform lock-in for rural co-operatives.',
    content: [
      'Unlike walled-garden marketplaces that charge 25% commissions and control customer data, Pathashilpa operates as a public smart cataloging layer.',
      'The platform generates unified listings that syndicate to GeM for institutional procurement and ONDC for open e-commerce simultaneously.',
      'Artisans own their listings, images, and sales records with complete exportability compliant with the DPDP Act 2023.'
    ]
  }
];

/**
 * Illustrative pilot feedback for the SIH 2026 demonstration build.
 * Labelled as sample content wherever it is rendered — see PRD §15.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    role: 'artisan',
    quoteEn: 'I have never typed a single word. I speak about my saree, and the listing writes itself.',
    quoteHi: 'मैंने एक शब्द भी टाइप नहीं किया। मैं अपनी साड़ी के बारे में बोलती हूँ और लिस्टिंग खुद बन जाती है।',
    name: 'Kamala Devi',
    nameHi: 'कमला देवी',
    titleEn: 'Silk Weaver · Chanderi, Madhya Pradesh',
    titleHi: 'रेशम बुनकर · चंदेरी, मध्य प्रदेश',
  },
  {
    id: 2,
    role: 'artisan',
    quoteEn: 'There is no signal at my furnace. The listing was ready anyway, and went live when I reached town.',
    quoteHi: 'मेरी भट्ठी पर नेटवर्क नहीं आता। फिर भी लिस्टिंग बन गई और बाज़ार पहुँचते ही लाइव हो गई।',
    name: 'Ramesh Kashyap',
    nameHi: 'रमेश कश्यप',
    titleEn: 'Dhokra Metal Caster · Bastar, Chhattisgarh',
    titleHi: 'ढोकरा धातु शिल्पी · बस्तर, छत्तीसगढ़',
  },
  {
    id: 3,
    role: 'buyer',
    quoteEn: "Every piece arrives with the weaver's name and cluster attached. My customers ask for it now.",
    quoteHi: 'हर उत्पाद पर बुनकर का नाम और क्लस्टर लिखा आता है। अब ग्राहक खुद यही माँगते हैं।',
    name: 'Meera Raghavan',
    nameHi: 'मीरा राघवन',
    titleEn: 'Boutique Owner · Bengaluru',
    titleHi: 'बुटीक संचालक · बेंगलुरु',
  },
  {
    id: 4,
    role: 'artisan',
    quoteEn: 'For the first time, a buyer knew my name before they knew the price.',
    quoteHi: 'पहली बार किसी खरीदार ने दाम से पहले मेरा नाम जाना।',
    name: 'Sunita Jha',
    nameHi: 'सुनीता झा',
    titleEn: 'Madhubani Painter · Madhubani, Bihar',
    titleHi: 'मधुबनी चित्रकार · मधुबनी, बिहार',
  },
  {
    id: 5,
    role: 'buyer',
    quoteEn: 'I can raise one RFQ and reach four clusters. Sampling used to take a month.',
    quoteHi: 'एक ही कोटेशन से चार क्लस्टर तक पहुँच जाता हूँ। पहले सैंपलिंग में महीना लगता था।',
    name: 'Arjun Sethi',
    nameHi: 'अर्जुन सेठी',
    titleEn: 'Export House · Noida',
    titleHi: 'निर्यात गृह · नोएडा',
  },
  {
    id: 6,
    role: 'artisan',
    quoteEn: 'The app told me why my price was ₹2,850. I had never heard a reason before.',
    quoteHi: 'ऐप ने बताया कि मेरा दाम ₹2,850 क्यों है। इससे पहले कभी कोई कारण नहीं सुना था।',
    name: 'Bhanu Prasad',
    nameHi: 'भानु प्रसाद',
    titleEn: 'Ikat Weaver · Pochampally, Telangana',
    titleHi: 'इकत बुनकर · पोचमपल्ली, तेलंगाना',
  },
  {
    id: 7,
    role: 'buyer',
    quoteEn: 'Verified GI provenance sits in the listing itself. That clears our compliance in one step.',
    quoteHi: 'लिस्टिंग में ही प्रमाणित जीआई विवरण मिल जाता है। अनुपालन एक ही चरण में पूरा।',
    name: 'Dr. Neelam Joshi',
    nameHi: 'डॉ. नीलम जोशी',
    titleEn: 'District Procurement · GeM Portal',
    titleHi: 'ज़िला खरीद अधिकारी · GeM पोर्टल',
  },
  {
    id: 8,
    role: 'artisan',
    quoteEn: 'The trader offered ₹900. The cost floor said ₹2,400. I did not sell that day.',
    quoteHi: 'व्यापारी ₹900 दे रहा था। लागत आधार ₹2,400 बता रहा था। उस दिन मैंने नहीं बेचा।',
    name: 'Zarina Bi',
    nameHi: 'ज़रीना बी',
    titleEn: 'Ajrakh Block Printer · Bhuj, Gujarat',
    titleHi: 'अजरख छपाई कारीगर · भुज, गुजरात',
  },
  {
    id: 9,
    role: 'buyer',
    quoteEn: 'I onboarded 40 weavers in a week. Not one of them needed to read English.',
    quoteHi: 'एक हफ़्ते में 40 बुनकर जोड़े। किसी को अंग्रेज़ी पढ़नी नहीं पड़ी।',
    name: 'Farid Ansari',
    nameHi: 'फ़रीद अंसारी',
    titleEn: 'Cluster Coordinator · Weavers NGO',
    titleHi: 'क्लस्टर समन्वयक · बुनकर संस्था',
  },
  {
    id: 10,
    role: 'buyer',
    quoteEn: 'I know who made it, where, and what they earned. No other catalogue tells me that.',
    quoteHi: 'मुझे पता होता है किसने बनाया, कहाँ बनाया और उसे कितना मिला। कोई और कैटलॉग यह नहीं बताता।',
    name: 'Lena Fischer',
    nameHi: 'लीना फ़िशर',
    titleEn: 'Retail Importer · Berlin',
    titleHi: 'खुदरा आयातक · बर्लिन',
  },
];

export const ARTISAN_FAQS: FaqItem[] = [
  {
    qEn: 'Do I need internet at my loom to create a product listing?',
    qHi: 'क्या मुझे उत्पाद जोड़ने के लिए करघे पर इंटरनेट की आवश्यकता है?',
    aEn: 'No! All 4 steps (photo, voice description, cost entry, and fair price calculation) work 100% offline. The draft is saved on your phone and uploads silently whenever you get a signal.',
    aHi: 'नहीं! सभी 4 चरण (फोटो, आवाज़, लागत और मूल्य गणना) बिना इंटरनेट के पूरी तरह काम करते हैं। नेटवर्क मिलते ही यह अपने आप सिंक हो जाता है।'
  },
  {
    qEn: 'Does Pathashilpa charge any commission from the artisan?',
    qHi: 'क्या पाथाशिल्पा कारीगर से कोई कमीशन या शुल्क लेता है?',
    aEn: 'Never. The artisan pays ₹0 forever. You receive 100% of your declared craft price.',
    aHi: 'कभी नहीं। कारीगर के लिए यह हमेशा पूरी तरह निःशुल्क है। आपको अपने उत्पाद का पूरा 100% मूल्य मिलता है।'
  },
  {
    qEn: 'I do not know English and cannot type. Can I use this app?',
    qHi: 'मुझे अंग्रेज़ी नहीं आती और टाइप करना नहीं आता। क्या मैं इसका उपयोग कर सकता हूँ?',
    aEn: 'Yes! The entire app is voice-guided in Hindi and regional languages. You only have to tap the microphone and speak naturally about your piece.',
    aHi: 'हाँ! पूरा ऐप आपकी अपनी भाषा में आवाज़ से चलता है। आपको केवल माइक दबाकर अपनी साड़ी या कला के बारे में बोलना है।'
  },
  {
    qEn: 'Can I change or override the price suggested by the AI?',
    qHi: 'क्या मैं AI द्वारा सुझाए गए मूल्य को बदल सकता हूँ?',
    aEn: 'Yes, always. The AI suggests a fair price floor so you never run a loss, but you have 100% freedom to increase or modify your price.',
    aHi: 'हाँ, हमेशा। AI आपको एक सुरक्षित न्यूनतम मूल्य सुझाता है ताकि आपको घाटा न हो, पर अंतिम फैसला हमेशा आपका होता है।'
  }
];
