export const site = {
  name: "JB WEDDINGS",
  fullName: "JB WEDDINGS",
  email: "jbphotography@email.com",
  phone: "+94 7X XXX XXXX",
  whatsapp: "947XXXXXXXX",
  whatsappMessage:
    "Hello JB WEDDINGS, I would like to know more about your wedding photography and videography services.",
  location: "Sri Lanka",

  facebook:
    "https://www.facebook.com/Jagath-Bandara-Photography-102906635559836/",
  weddingFilms:
    "https://www.facebook.com/profile.php?id=100095189754439&mibextid=ZbWKwL",
  instagram:
    "https://www.instagram.com/jagathbandaraphotography?igsh=c3pvamt0ZHRiejdx",
  tiktok: "https://www.tiktok.com/@jagathbandaraphotography",
  youtube:
    "https://youtube.com/@jagathbandaraphotography?si=_4VmLi3lr1Zx--W5",
};

// For images inside public/assets
const asset = (fileName) => `/assets/${encodeURIComponent(fileName)}`;

export const heroImages = [
  asset("img (2).jpeg"),
  asset("img (132).jpeg"),
  asset("img (146).jpeg"),
  asset("img (119).jpeg"),
  asset("img1.jpeg"),
];

/* ---------------- EXPERIENCE SECTION IMAGES ---------------- */
/* Large left slider - 5 images */
export const experienceMainImages = [
  {
    src: asset("img (80).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS",
  },
  {
    src: asset("img (11).jpeg"),
    alt: "Bride and groom wedding portrait",
  },
  {
    src: asset("img (120).jpeg"),
    alt: "Elegant wedding photography moment",
  },
  {
    src: asset("img (42).jpeg"),
    alt: "Elegant bride and groom portrait in natural light",
  },
  {
    src: asset("img (181).jpeg"),
    alt: "Bride and groom silhouetted beside a bright window",
  },
];

/* Small floating slider - 5 separate images */
export const experienceFloatingImages = [
  {
    src: asset("img (19).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS",
  },
  {
    src: asset("img (55).jpeg"),
    alt: "Bride and groom photography session",
  },
  {
    src: asset("img (98).jpeg"),
    alt: "Wedding couple creative portrait",
  },
  {
    src: asset("img (159).jpeg"),
    alt: "Couple dancing during an evening portrait session",
  },
  {
    src: asset("img (94).jpeg"),
    alt: "Intimate wedding portrait by JB WEDDINGS",
  },
];

/* Old experienceImages kept only if another section uses it */
export const experienceImages = [
  {
    src: asset("img (7).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS",
  },
  {
    src: asset("img (3).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS",
  },
  {
    src: asset("img (115).jpeg"),
    alt: "Bride and groom photography session",
  },
  {
    src: asset("img (112).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS",
  },
  {
    src: asset("img (3).jpeg"),
    alt: "Elegant wedding moment captured by JB WEDDINGS",
  },
];

export const portfolio = [
  {
    title: "Window Light",
    tag: "Wedding Portrait",
    image: asset("img (170).jpeg"),
    hoverImage: asset("img (19).jpeg"),
    alt: "Bride and groom silhouetted beside a bright window",
    layout: "portrait",
  },
  {
    title: "Just Us",
    tag: "Pre-wedding Portrait",
    image: asset("img (20).jpeg"),
    hoverImage: asset("img (21).jpeg"),
    alt: "Couple dancing together during an evening portrait session",
    layout: "portrait",
  },
  {
    title: "Garden Promises",
    tag: "Pre-wedding",
    image: asset("img (28).jpeg"),
    hoverImage: asset("img (29).jpeg"),
    alt: "Couple enjoying a romantic garden picnic",
  },
  {
    title: "Something Blue",
    tag: "Wedding Day",
    image: asset("img (165).jpeg"),
    hoverImage: asset("img (107).jpeg"),
    alt: "Traditional wedding couple in an elegant blue room",
  },
  {
    title: "Softly, In Light",
    tag: "Bridal Portrait",
    image: asset("img (104).jpeg"),
    hoverImage: asset("img (105).jpeg"),
    alt: "Bride in traditional dress standing in soft garden light",
    layout: "wide",
  },
  {
    title: "By The Ocean",
    tag: "Love Story",
    image: asset("img (116).jpeg"),
    hoverImage: asset("img (68).jpeg"),
    alt: "Couple laughing together on a quiet beach",
    layout: "wide",
  },
  {
    title: "After Dark",
    tag: "Couple Session",
    image: asset("img (154).jpeg"),
    hoverImage: asset("img (155).jpeg"),
    alt: "Couple dancing together during an evening portrait session",
  },
  {
    title: "Golden Vows",
    tag: "Wedding Portrait",
    image: asset("img (110).jpeg"),
    hoverImage: asset("img (111).jpeg"),
    alt: "Wedding couple photographed in warm golden light",
  },
  {
    title: "Close To You",
    tag: "Wedding Story",
    image: asset("img (146).jpeg"),
    hoverImage: asset("img (97).jpeg"),
    alt: "Bride and groom sharing an intimate wedding-day moment",
  },
  {
    title: "The First Chapter",
    tag: "Pre-wedding",
    image: asset("img (138).jpeg"),
    hoverImage: asset("img (139).jpeg"),
    alt: "Couple posing together during an elegant pre-wedding session",
    layout: "wide",
  },
  {
    title: "Endless Romance",
    tag: "Editorial Portrait",
    image: asset("img (71).jpeg"),
    hoverImage: asset("img (72).jpeg"),
    alt: "Romantic editorial portrait captured by JB WEDDINGS",
    layout: "wide",
  },
];

export const about = {
  title: "Your wedding is more than a day. It is a story worth remembering well.",
  lead:
    "JB WEDDINGS is a Sri Lankan wedding photography and filmmaking studio devoted to honest emotion, refined imagery, and stories that remain meaningful for generations.",
  text:
    "From the first conversation to the final gallery, we guide every couple with patience and care. We notice the meaningful details, the people you love, and the quiet in-between moments that make your celebration entirely your own.",
  secondText:
    "Our style brings documentary honesty together with elegant portraiture. The result is a collection that feels natural today and timeless when you return to it years from now.",
  image: asset("img (1).jpeg"),
  imageAlt: "Wedding couple photographed by JB WEDDINGS",
  studioImage: asset("img (42).jpeg"),
  studioImageAlt: "Romantic couple portrait photographed by JB WEDDINGS",
  founderTitle: "The man behind the lens",
  founderName: "Jagath Bandara",
  founderRole: "Founder & Lead Photographer",
  founderImage: asset("owner.jpg"),
  founderImageAlt: "Jagath Bandara, founder and lead photographer of JB WEDDINGS",
  founderIntro:
    "leads JB WEDDINGS with a passion for honest emotion, elegant imagery, and timeless wedding stories.",
  founderText: [
    "With a calm presence and a careful eye for detail, Jagath approaches every celebration as a story with its own people, traditions, and rhythm. He gives couples gentle direction when it is helpful, then allows the real moments to unfold naturally.",
    "From intimate ceremonies to grand Sri Lankan weddings, his focus remains the same: to preserve the laughter, emotion, and quiet connections that make each day personal. Every finished collection is created to feel beautiful now and deeply meaningful for years to come.",
    "Under his direction, JB WEDDINGS brings photography and cinematic filmmaking together as one thoughtful experience, from the first conversation through to the final delivery.",
  ],
  stats: [
    {
      value: "10+",
      label: "Years experience",
    },
    {
      value: "250+",
      label: "Stories captured",
    },
    {
      value: "4K",
      label: "Film delivery",
    },
  ],
  storytellingTitle: ["Timeless stories", "through the lens"],
  storytellingVideo: asset("video.mp4"),
  storytellingVideoPoster: asset("img (172).jpeg"),
  storytellingText: [
    "At JB WEDDINGS, we believe every photograph carries the heartbeat of a story. What began as a passion for capturing fleeting moments has grown into a craft devoted to preserving emotion, movement, and meaning in every frame.",
    "From quiet glances to joyful celebrations, we create imagery that feels honest, beautiful, and unmistakably yours. Creativity, authenticity, and care guide every story we photograph and film.",
    "Every image we deliver is more than a memory. It is part of your legacy, told through light, emotion, and timeless artistry.",
  ],
  quote:
    "The best wedding photographs do more than show how everything looked. They bring back how it felt.",
};

export const services = [
  {
    title: "Wedding Photography",
    text: "Elegant wedding photography with timeless portraits, candid emotions, family moments, and refined editing.",
    image: asset("img (1).jpeg"),
    alt: "Bride and groom photographed in window light",
    includes: ["Wedding-day coverage", "Professionally edited photographs", "Private online gallery"],
  },
  {
    title: "Wedding Videography",
    text: "Cinematic wedding films created with emotion, movement, music, and storytelling.",
    image: asset("img (170).jpeg"),
    alt: "Elegant bridal portrait captured by JB WEDDINGS",
    includes: ["Cinematic highlight film", "Ceremony and speeches", "4K digital delivery"],
  },
  {
    title: "Pre-shoot Photography",
    text: "Creative couple sessions planned with beautiful locations, natural light, outfits, and mood.",
    image: asset("img (100).jpeg"),
    alt: "Couple enjoying a relaxed outdoor pre-shoot",
    includes: ["Creative planning", "Location and outfit guidance", "Edited portrait gallery"],
  },
  {
    title: "Engagement Shoots",
    text: "Graceful engagement portraits for announcements, invitations, memories, and social media.",
    image: asset("img (42).jpeg"),
    alt: "Romantic engagement portrait photographed through reflections",
    includes: ["Guided couple session", "Natural and editorial portraits", "Online gallery"],
  },
  {
    title: "Homecoming Coverage",
    text: "Complete homecoming coverage with ceremony moments, couple portraits, family photos, and celebrations.",
    image: asset("img (150).jpeg"),
    alt: "Bride and groom during their wedding celebration",
    includes: ["Ceremony and reception coverage", "Couple and family portraits", "Edited image collection"],
  },
  {
    title: "Event Photography",
    text: "Professional coverage for birthdays, private events, corporate functions, and special celebrations.",
    image: asset("img (154).jpeg"),
    alt: "Couple photographed during an evening celebration",
    includes: ["Flexible event coverage", "Key moments and group portraits", "Professional image delivery"],
  },
];

export const films = [
  {
    title: "Manuli & Dulshan | Wedding Highlight Video ",
    label: "Cinematic Wedding",
    youtubeUrl: "https://youtu.be/-7Tfe5jDiIw?si=_yT2Y0PzVrfcMzAa",
  },
  {
    title: "Manuli & Dulshan  | Wedding Highlight Video ",
    label: "Wedding Highlights",
    youtubeUrl: "https://youtu.be/xvfFOdGKlQM?si=_YBwUfx5XY6GEJXW",
  },
  {
    title: "Wedding Film 03 | Love Story Video ",
    label: "Love Story",
    youtubeUrl: "https://youtu.be/D_G-9hgCxNA?si=N95BSWtKK4_jyLul",
  },
  {
    title: "Wedding Film 04 | Cinematic Wedding Preview ",
    label: "Cinematic Preview",
    youtubeUrl: "https://youtu.be/mwVzvIxv-pw?si=nY_zzKJLVyYJgVcl",
  },
  {
    title: "Wedding Film 05 | Wedding Trailer",
    label: "Wedding Trailer",
    youtubeUrl: "https://youtu.be/_0taQStHSQI?si=FMGy401gKMRDoo1Q",
  },
  {
    title: "Wedding Film 06 | Full Wedding Story",
    label: "Full Wedding Story",
    youtubeUrl: "https://youtu.be/3zEiytT21rk?si=ysdB1QMz8XBd20v3",
  },
];

export const reviews = [
  {
    date: "February 25, 2024",
    title: "Just Kiss",
    name: "Isuru & Hiruni",
    image: asset("img (7).jpeg"),
    text: "JB WEDDINGS definitely has an eye for special shots and the final work was amazing. He is patient, creative, and very supportive throughout the day. We would recommend him for any special occasion.",
  },
  {
    date: "March 04, 2025",
    title: "Whispers In The Dusk",
    name: "Janith & Bhagya",
    image: asset("img (112).jpeg"),
    text: "They treated us with care and support throughout the day. We felt comfortable working with them and received a beautiful collection of memories.",
  },
  {
    date: "April 18, 2025",
    title: "Aesthetic Gallery",
    name: "Dhammika & Kaveesha",
    image: asset("img (17).jpeg"),
    text: "Absolutely, highly recommended. Words can hardly describe how incredible the final gallery was. Every photo felt artistic, emotional, and beautifully edited.",
  },
  {
    date: "May 12, 2025",
    title: "Love Story",
    name: "Nethmi & Avishka",
    image: asset("img (70).jpeg"),
    text: "The whole experience felt relaxed and natural. They captured real smiles, little details, and emotional moments without making anything feel forced.",
  },
  {
    date: "June 02, 2025",
    title: "Golden Hour",
    name: "Sachini & Pasindu",
    image: asset("img (67).jpeg"),
    text: "Professional, kind, and very supportive from planning to delivery. Our families loved the photographs and we will treasure them for years.",
  },
  {
    date: "June 24, 2025",
    title: "Forever Begins",
    name: "Tharushi & Kavindu",
    image: asset("img (90).jpeg"),
    text: "From the first conversation to the final album, everything was handled with so much patience. The images were elegant, warm, and timeless.",
  },
  {
    date: "July 12, 2025",
    title: "Timeless Frames",
    name: "Dinithi & Ravindu",
    image: asset("img (108).jpeg"),
    text: "They saw the quiet moments we did not even notice. The final collection told the full story of our wedding day in such a beautiful way.",
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    url: site.facebook,
  },
  {
    name: "Instagram",
    url: site.instagram,
  },
  {
    name: "TikTok",
    url: site.tiktok,
  },
  {
    name: "YouTube",
    url: site.youtube,
  },
];

export const contactIntro = {
  title: "Hey, It's Jagath!",
  subtitle: "Stay Connected & Check Out My Work!",
  text: "Stay updated with our latest wedding stories, films, reels, and photography work. Let’s create magic together.",
  hashtag: "#JBWeddings",
};

export const faqs = [
  { question: "How far in advance should we book?", answer: "Popular wedding dates can fill quickly, so we recommend contacting us 6 to 12 months in advance. For pre-shoots and smaller events, 4 to 8 weeks is often enough." },
  { question: "Do you travel outside Colombo?", answer: "Yes. We photograph weddings and celebrations throughout Sri Lanka, and destination coverage can also be arranged. Travel details will be included clearly in your quotation." },
  { question: "Can we book both photography and wedding films?", answer: "Yes. Combined photography and cinematic-film coverage gives your team one coordinated timeline and a consistent storytelling style throughout the day." },
  { question: "Will our photographs be professionally edited?", answer: "Every delivered photograph is carefully selected and professionally colour-corrected in our signature timeless style. Detailed retouching is applied where appropriate." },
  { question: "How do we confirm our date?", answer: "Your date is confirmed after we agree on the coverage, complete the booking details, and receive the reservation payment. We will then guide you through planning and timelines." },
];
