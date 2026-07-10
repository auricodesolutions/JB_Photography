export const site = {
  name: "JB Photography",
  fullName: "Jagath Bandara Photography & Wedding Films",
  email: "jbphotography@email.com",
  phone: "+94 7X XXX XXXX",
  whatsapp: "947XXXXXXXX",
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
  asset("img (158).jpeg"),
  asset("img (2).jpeg"),
  asset("img (162).jpeg"),
];

/* ---------------- EXPERIENCE SECTION IMAGES ---------------- */
/* Large left slider - 3 images */
export const experienceMainImages = [
  {
    src: asset("img (80).jpeg"),
    alt: "Wedding couple portrait by Jagath Bandara Photography",
  },
  {
    src: asset("img (11).jpeg"),
    alt: "Bride and groom wedding portrait",
  },
  {
    src: asset("img (120).jpeg"),
    alt: "Elegant wedding photography moment",
  },
];

/* Small floating slider - 3 separate images */
export const experienceFloatingImages = [
  {
    src: asset("img (19).jpeg"),
    alt: "Elegant wedding moment captured by JB Photography",
  },
  {
    src: asset("img (55).jpeg"),
    alt: "Bride and groom photography session",
  },
  {
    src: asset("img (98).jpeg"),
    alt: "Wedding couple creative portrait",
  },
];

/* Old experienceImages kept only if another section uses it */
export const experienceImages = [
  {
    src: asset("img (7).jpeg"),
    alt: "Wedding couple portrait by Jagath Bandara Photography",
  },
  {
    src: asset("img (3).jpeg"),
    alt: "Elegant wedding moment captured by JB Photography",
  },
  {
    src: asset("img (115).jpeg"),
    alt: "Bride and groom photography session",
  },
  {
    src: asset("img (112).jpeg"),
    alt: "Wedding couple portrait by Jagath Bandara Photography",
  },
  {
    src: asset("img (46).jpeg"),
    alt: "Elegant wedding moment captured by JB Photography",
  },
];

export const portfolio = [
  {
    title: "A Quiet Forever",
    tag: "Wedding Story",
    image: asset("img (132).jpeg"),
    alt: "Bride and groom sharing a quiet moment in a garden",
  },
  {
    title: "Garden Promises",
    tag: "Pre-wedding",
    image: asset("img (28).jpeg"),
    alt: "Couple enjoying a romantic garden picnic",
  },
  {
    title: "Something Blue",
    tag: "Wedding Day",
    image: asset("img (32).jpeg"),
    alt: "Traditional wedding couple in an elegant blue room",
  },
  {
    title: "Softly, In Light",
    tag: "Bridal Portrait",
    image: asset("img (104).jpeg"),
    alt: "Bride in traditional dress standing in soft garden light",
  },
  {
    title: "By The Ocean",
    tag: "Love Story",
    image: asset("img (116).jpeg"),
    alt: "Couple laughing together on a quiet beach",
  },
  {
    title: "After Dark",
    tag: "Couple Session",
    image: asset("img (154).jpeg"),
    alt: "Couple dancing together during an evening portrait session",
  },
  {
    title: "Golden Vows",
    tag: "Wedding Portrait",
    image: asset("img (172).jpeg"),
    alt: "Wedding couple photographed in warm golden light",
  },
  {
    title: "Close To You",
    tag: "Wedding Story",
    image: asset("img (146).jpeg"),
    alt: "Bride and groom sharing an intimate wedding-day moment",
  },
  {
    title: "The First Chapter",
    tag: "Pre-wedding",
    image: asset("img (138).jpeg"),
    alt: "Couple posing together during an elegant pre-wedding session",
  },
  {
    title: "Endless Romance",
    tag: "Editorial Portrait",
    image: asset("img (71).jpeg"),
    alt: "Romantic editorial portrait captured by JB Photography",
  },
];

export const about = {
  title: "A calm eye for honest wedding stories.",
  lead:
    "Jagath Bandara Photography creates elegant wedding photographs and films with a quiet, emotional, and timeless feeling.",
  text:
    "From the first conversation to the final gallery, we guide couples with patience and care. Our focus is on natural portraits, meaningful details, family moments, and the small in-between emotions that make every celebration personal.",
  image: asset("img (1).jpeg"),
  imageAlt: "Wedding couple photographed by Jagath Bandara Photography",
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
};

export const services = [
  {
    title: "Wedding Photography",
    text: "Elegant wedding photography with timeless portraits, candid emotions, family moments, and refined editing.",
  },
  {
    title: "Wedding Videography",
    text: "Cinematic wedding films created with emotion, movement, music, and storytelling.",
  },
  {
    title: "Pre-shoot Photography",
    text: "Creative couple sessions planned with beautiful locations, natural light, outfits, and mood.",
  },
  {
    title: "Engagement Shoots",
    text: "Graceful engagement portraits for announcements, invitations, memories, and social media.",
  },
  {
    title: "Homecoming Coverage",
    text: "Complete homecoming coverage with ceremony moments, couple portraits, family photos, and celebrations.",
  },
  {
    title: "Event Photography",
    text: "Professional coverage for birthdays, private events, corporate functions, and special celebrations.",
  },
];

export const films = [
  {
    title: "Manuli & Dulshan | Wedding Highlight Video ",
    label: "Cinematic Wedding",
    youtubeUrl: "https://youtu.be/CxI9kQmdmd8?si=3Nl17pXY9DmPM2RG",
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
    text: "Jagath Bandara Photography definitely has an eye for special shots and the final work was amazing. He is patient, creative, and very supportive throughout the day. We would recommend him for any special occasion.",
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
    name: "Wedding Films",
    url: site.weddingFilms,
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
  title: "Hey, It's Jagath Bandara!",
  subtitle: "Stay Connected & Check Out My Work!",
  text: "Stay updated with our latest wedding stories, films, reels, and photography work. Let’s create magic together.",
  hashtag: "#JB",
};
