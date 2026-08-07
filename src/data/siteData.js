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
const albumGallery = (...imageNumbers) =>
  imageNumbers.map((number) => asset(`img (${number}).jpeg`));

export const heroImages = [
  asset("img7.jpg"),
  asset("img6.jpg"),
  asset("img8.jpg"),
];

export const bookingPage = {
  image: asset("img (93).jpeg"),
  imageAlt: "Traditional wedding couple photographed in the Sri Lankan hills",
};

/* ---------------- EXPERIENCE SECTION IMAGES ---------------- */
/* Large left slider - 5 images */
export const experienceMainImages = [
  {
    src: asset("img (80).jpeg"),
    alt: "Wedding couple portrait by JB WEDDINGS",
  },
  {
    src: asset("img (5).jpeg"),
    alt: "Bride and groom wedding portrait",
  },
  {
    src: asset("img (183).jpeg"),
    alt: "Elegant wedding photography moment",
  },
  {
    src: asset("img (42).jpeg"),
    alt: "Elegant bride and groom portrait in natural light",
  },
  {
    src: asset("img11.jpg"),
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
    src: asset("img (112).jpeg"),
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
    coupleName: "Ridmi & Vinod",
    albumTag: "Wedding Shoot",
    image: asset("img (170).jpeg"),
    gallery: albumGallery(170, 1, 2, 3, 4, 5, 6, 7, 8),
    alt: "Bride and groom silhouetted beside a bright window",
    layout: "portrait",
  },
  {
    title: "Just Us",
    tag: "Pre-wedding Portrait",
    coupleName: "Sulani & Dananjaya",
    albumTag: "Wedding Shoot",
    image: asset("img (51).jpeg"),
    gallery: albumGallery(51, 10, 11, 12, 13, 14, 15, 16, 17),
    alt: "Couple dancing together during an evening portrait session",
    layout: "portrait",
  },
  {
    title: "Garden Promises",
    tag: "Pre-wedding",
    coupleName: "Lakshmi & Shaluka",
    albumTag: "Wedding Shoot",
    image: asset("img (76).jpeg"),
    gallery: albumGallery(76, 75, 20, 21, 22, 23, 24, 25, 26),
    alt: "Wedding couple walking together beneath flowering trees",
    layout: "portrait",
  },
  {
    title: "Bridal Glow",
    tag: "Bridal Portrait",
    coupleName: "Ireni & Milan",
    albumTag: "Wedding Shoot",
    image: asset("img (166).jpeg"),
    gallery: albumGallery(166, 165, 30, 31, 32, 33, 34, 35, 36),
    alt: "Bride standing in warm window light",
    layout: "portrait",
  },
  {
    title: "White Elegance",
    tag: "Wedding Portrait",
    coupleName: "Tharanga & Nuwan",
    albumTag: "Wedding Shoot",
    image: asset("img (103).jpeg"),
    gallery: albumGallery(103, 104, 39, 40, 41, 42, 43, 44, 45),
    alt: "Wedding couple sharing a quiet portrait beside their car",
    layout: "portrait",
  },
  {
    title: "Quiet Steps",
    tag: "Wedding Story",
    coupleName: "Maduka & Dinelka",
    albumTag: "Wedding Shoot",
    image: asset("img (117).jpeg"),
    gallery: albumGallery(117, 116, 48, 49, 50, 52, 53, 54, 55),
    alt: "Bride and groom walking together on a curved staircase",
    layout: "portrait",
  },
  {
    title: "After Dark",
    tag: "Couple Session",
    coupleName: "Hiruni & Sajitha",
    albumTag: "Wedding Shoot",
    image: asset("img5.jpg"),
    gallery: albumGallery(174, 58, 59, 60, 61, 62, 63, 64, 65),
    alt: "Couple dancing together during an evening portrait session",
    layout: "landscape",
  },
  {
    title: "Golden Vows",
    tag: "Wedding Portrait",
    coupleName: "Chamudi & Nicco",
    albumTag: "Wedding Shoot",
    image: asset("img10.jpg"),
    gallery: albumGallery(158, 67, 68, 69, 70, 71, 72, 73, 74),
    alt: "Wedding couple photographed in warm golden light",
    layout: "landscape",
  },
  {
    title: "Close To You",
    tag: "Wedding Story",
    coupleName: "Amanda & Tisara",
    albumTag: "Wedding Shoot",
    image: asset("img (146).jpeg"),
    gallery: albumGallery(146, 77, 78, 79, 80, 81, 82, 83, 84),
    alt: "Bride and groom sharing an intimate wedding-day moment",
    layout: "landscape",
  },
  {
    title: "The First Chapter",
    tag: "Pre-wedding",
    coupleName: "Hansini & Shehan",
    albumTag: "Homecoming",
    image: asset("img9.jpg"),
    gallery: albumGallery(138, 86, 87, 88, 89, 90, 91, 92, 93),
    alt: "Couple posing together during an elegant pre-wedding session",
    layout: "landscape",
  },
  {
    title: "Endless Romance",
    tag: "Editorial Portrait",
    image: asset("img13.jpg"),
    alt: "Romantic editorial portrait captured by JB WEDDINGS",
    layout: "landscape-feature",
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
    image: asset("services1.jpg"),
    alt: "Bride and groom photographed in window light",
    page: "portfolio",
    sectionId: "photography",
    href: "/portfolio#photography",
    cta: "View wedding albums",
  },
  {
    title: "Wedding Videography",
    text: "Cinematic wedding films created with emotion, movement, music, and storytelling.",
    image: asset("services2.jpg"),
    alt: "Elegant bridal portrait captured by JB WEDDINGS",
    page: "films",
    href: "/wedding-films",
    cta: "Watch wedding films",
  },
  {
    title: "Preshoots",
    text: "Creative couple sessions planned with beautiful locations, natural light, outfits, and mood.",
    image: asset("services3.jpg"),
    alt: "Couple enjoying a relaxed outdoor pre-shoot",
    page: "preshoots",
    href: "/preshoots",
    cta: "Explore preshoots",
  },
  {
    title: "Event Photography",
    text: "Professional coverage for birthdays, private events, corporate functions, and special celebrations.",
    image: asset("services4.jpg"),
    alt: "Couple photographed during an evening celebration",
    page: "events",
    href: "/events",
    cta: "View event gallery",
  },
];

export const serviceGalleries = {
  preshoots: {
    eyebrow: "Couple sessions",
    title: "Preshoot stories",
    intro:
      "Ten relaxed, editorial frames shaped by place, personality, and the anticipation before the wedding day.",
    images: albumGallery(75, 76, 77, 78, 79, 80, 81, 82, 83, 84),
  },
  events: {
    eyebrow: "Celebrations",
    title: "Event photography",
    intro:
      "Ten moments from celebrations, gatherings, and beautifully considered events captured with energy and care.",
    images: albumGallery(148, 149, 150, 151, 152, 153, 154, 155, 156, 157),
  },
};

export const films = [
  {
    title: "Manuli & Dulshan",
    label: "Cinematic Wedding",
    youtubeUrl: "https://youtu.be/-7Tfe5jDiIw?si=_yT2Y0PzVrfcMzAa",
  },
  {
    title: "Manuli & Dulshan ",
    label: "Wedding Highlights",
    youtubeUrl: "https://youtu.be/xvfFOdGKlQM?si=_YBwUfx5XY6GEJXW",
  },
  {
    title: "Love Story Video",
    label: "Love Story",
    youtubeUrl: "https://youtu.be/D_G-9hgCxNA?si=N95BSWtKK4_jyLul",
  },
  {
    title: "Cinematic Wedding",
    label: "Cinematic Preview",
    youtubeUrl: "https://youtu.be/mwVzvIxv-pw?si=nY_zzKJLVyYJgVcl",
  },
  {
    title: "Wedding Trailer",
    label: "Wedding Trailer",
    youtubeUrl: "https://youtu.be/_0taQStHSQI?si=FMGy401gKMRDoo1Q",
  },
  {
    title: "Full Wedding Story",
    label: "Full Wedding Story",
    youtubeUrl: "https://youtu.be/3zEiytT21rk?si=ysdB1QMz8XBd20v3",
  },
];

export const weddingTrailers = [
  {
    title: "Wedding Trailer 01",
    youtubeUrl: "https://youtu.be/hOOuWKJh348?si=PjC1VbrX0C2koazg",
  },
  {
    title: "Wedding Trailer 02",
    youtubeUrl: "https://youtu.be/D_G-9hgCxNA?si=VUyYNFDhtqaCpUSO",
  },
  {
    title: "Wedding Trailer 03",
    youtubeUrl: "https://youtu.be/REOgOPAAQgs?si=I1drqAFH1ebSvlHw",
  },
  {
    title: "Wedding Trailer 04",
    youtubeUrl: "https://youtu.be/rGHtzBF7-Hw?si=LJU7geHjXDDGqDN0",
  },
  {
    title: "Wedding Trailer 05",
    youtubeUrl: "https://youtu.be/2lStBoKBsGM?si=znu-N9OIpNGNy7zY",
  },
  {
    title: "Wedding Trailer 06",
    youtubeUrl: "https://youtu.be/KTB4S-WlGOI?si=z0AjN7a7PApWVYYt",
  },
  {
    title: "Wedding Trailer 07",
    youtubeUrl: "https://youtu.be/1oDXkQZwGvw?si=_FD6EuXBrKy-FFZZ",
  },
  {
    title: "Wedding Trailer 08",
    youtubeUrl: "https://youtu.be/xvfFOdGKlQM?si=OFHLqGR9D5dAmZLT",
  },
  {
    title: "Wedding Trailer 09",
    youtubeUrl: "https://youtu.be/EVSCrge5Vkc?si=E5Tu8l8lGdrmkoGp",
  },
  {
    title: "Wedding Trailer 10",
    youtubeUrl: "https://youtu.be/jPaSH30HO8s?si=Oz0GCddOepFtPH5k",
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
    name: "Lahirui & Kaveesha",
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

export const reviewSection = {
  backgroundImage: asset("img (148).jpg"),
  ctaImage: asset("img14.jpg"),
  ctaTitle: "Love stories, shared by our couples.",
  ctaText:
    "Discover the experiences and kind words shared by couples who trusted JB WEDDINGS to preserve their most meaningful moments.",
  ctaButton: "Read Our Reviews",
};

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
