/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "The Dakshiini Cafe",
    suffix: ".",
    tagline: "Authentic South Indian Cuisine & Filter Coffee",
    description: "The Dakshiini Cafe offers authentic South Indian delicacies, crispy dosais, fluffy idlis, and traditional filter coffee in Noida.",
    keywords: "south indian cafe, dosai, rava dosa, uttapam, filter coffee, noida sector 18 cafe, authentic south indian food",
    themeColor: "#2A1810",
    domain: "https://thedakshiinicafe.com/",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMYmcNI4opkigH5IcEBOSRIg-FLKAoPlkmJ2X4ehSAJqfsDtJqwqg2Htv4q7-3Cf3MZDVOZUBNBwzGRc3kWMRx3rP8gaeT-haT12Zb5kON7q5H4xSdvPabP_MtmmOrADo3fu9vuu-saXm-U=w289-h312-n-k-no",
    faviconEmoji: "☕",
    whatsappNumber: "919103211881"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#1C120C",         // Deep rich dark warm brown background matching South Indian heritage aesthetic
      bgCard: "#2A1B14",     // Slightly lighter warm card background
      bgLight: "#38251B",    // Light brown accent overlay background
      primary: "#E09F3E",    // Warm golden turmeric/amber accent
      primaryHover: "#FFF3B0", // Soft cream hover highlight
      text: "#F4EAE1",       // Soft off-white ivory text for strong legibility
      textMuted: "#C4A482",  // Warm muted bronze/sand body text
      accent: "#4A2818"      // Deep terracotta accent container
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Authentic South Indian Flavors",
    title: "Taste the Rich Heritage of Southern India",
    description: "Indulge in thin, crispy dosais, flavorful rava varieties, fluffy idlis, and aromatic degree filter coffee brewed to perfection.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmMYmcNI4opkigH5IcEBOSRIg-FLKAoPlkmJ2X4ehSAJqfsDtJqwqg2Htv4q7-3Cf3MZDVOZUBNBwzGRc3kWMRx3rP8gaeT-haT12Zb5kON7q5H4xSdvPabP_MtmmOrADo3fu9vuu-saXm-U=w289-h312-n-k-no",
    stats: [
      { value: "100%", label: "Authentic Recipes" },
      { value: "7 AM - 12:30 AM", label: "Open Daily" },
      { value: "4.8 ★", label: "Customer Rating" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Serving Traditional South Indian Staples",
    paragraphs: [
      "Located in the bustling heart of Sector 18, Noida, The Dakshiini Cafe is your go-to destination for authentic South Indian comfort food. From golden crispy dosas to spiced bhajjis and steaming filter coffee, we bring genuine southern traditions right to your plate.",
      "Well-managed with a warm, relaxed atmosphere, we take pride in prompt service and consistent culinary quality for early morning breakfasts, late-night cravings, and everything in between."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmOuvmeT_KAs3o33OWktoEG9hp63CeAVJOC6BASP4crKbeh-eQyXZZQQHVA6sOlNdydPYiAhHLMaAOXCkj-8M3PwDUK1kG_K5J4MV1gmz-sCPxiMcMRqLfQ9VAmetuqTQIq4gUdONyq9TWk=w145-h156-n-k-no",
    imageAlt: "Interior view of The Dakshiini Cafe",
    experienceValue: "100%",
    experienceLabel: "Authentic Taste"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Must Try Specials",
    title: "Chef's Recommended Favorites",
    badge: "Must Try",
    description: "Handpicked South Indian specialties highly recommended by our regulars.",
    items: [
      {
        badge: "Must Try",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        alt: "Lemon Button Idli",
        diet: "veg",
        title: "Lemon Button Idli",
        price: "₹180",
        desc: "Bite-sized mini button idlis tossed in a tangy lemon, mustard seed, curry leaf, and green chili tempering."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        alt: "Classic Mysore Masala Dosai",
        diet: "veg",
        title: "Classic Mysore Masala Dosai",
        price: "₹220",
        desc: "Traditional thin crispy Tamil Nadu style dosai smeared with spicy red chutney and stuffed with signature potato masala."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
        alt: "South Indian Filter Coffee",
        diet: "veg",
        title: "Traditional Filter Coffee",
        price: "₹90",
        desc: "Aromatic South Indian chicory-infused coffee brewed with hot frothy milk in a classic brass dabarah and tumbler."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Deals",
    title: "Special Offers",
    items: [
      {
        tag: "DELIVERY OFFER",
        tagline: "Order Online",
        title: "Order on Swiggy & Zomato",
        desc: "Enjoy your favorite crispy dosais and degree filter coffee delivered hot right to your doorstep.",
        code: "DAKSHIINI10",
        highlight: false
      },
      {
        tag: "MORNING SPECIAL",
        title: "Breakfast Combo",
        desc: "Pair any Classic Dosai or Uttapam with our signature Filter Coffee at a special combo price.",
        code: "SOUTHBREW",
        highlight: true
      },
      {
        tag: "LATE NIGHT",
        title: "Late Night Cravings",
        desc: "We stay open till 12:30 AM! Satisfy your late night South Indian cravings daily.",
        code: "NIGHT12",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Authentic South Indian Menu",
    pdfUrl: "assets/dakshiini-menu.pdf",
    pdfFilename: "The_Dakshiini_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "classic-dosai", label: "Classic Dosai", active: false },
      { id: "rava-dosai", label: "Rava Dosai", active: false },
      { id: "uttapam", label: "Uttapam", active: false }
    ],
    items: [
      // --- CLASSIC DOSAI ---
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Cheese Masala Dosai",
        price: "₹260",
        diet: "veg",
        desc: "Thin crispy dosai filled with melted cheese and signature potato masala, served with sambar and chutneys.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Set Dosai (3pcs)",
        price: "₹220",
        diet: "veg",
        desc: "Set of three soft, spongy, and fluffy mini dosais served with traditional sambar and coconut chutneys.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Mysore Masala Dosai",
        price: "₹220",
        diet: "veg",
        desc: "Signature crispy dosai lined with authentic fiery garlic-chutney paste and layered with spiced potato mash.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Mysore Paneer Dosai",
        price: "₹260",
        diet: "veg",
        desc: "Spiced Mysore dosai filled with seasoned paneer crumbles, cooked on a flat griddle to golden perfection.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Butter Plain Dosai",
        price: "₹220",
        diet: "veg",
        desc: "Crispy paper-thin plain dosai roasted with generous amounts of fresh creamery butter.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Butter Masala Dosai",
        price: "₹250",
        diet: "veg",
        desc: "Golden crispy butter dosai stuffed with signature seasoned aloo masala, served piping hot.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Ghee Roast Dosai",
        price: "₹230",
        diet: "veg",
        desc: "Thin Tamil Nadu style crepe roasted generously with fragrant aromatic pure desi ghee.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "classic-dosai",
        img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=600",
        title: "Classic Ghee Roast Masala Dosai",
        price: "₹240",
        diet: "veg",
        desc: "Rich, aromatic ghee-roasted crepe stuffed with traditional spiced potato filling.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },

      // --- RAVA DOSAI ---
      {
        category: "rava-dosai",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Rava Plain Dosai",
        price: "₹190",
        diet: "veg",
        desc: "Thin, lacy, crisp dosai crafted from semolina, rice flour, spices, cumin, and chopped green chilies.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "rava-dosai",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Rava Masala Dosai",
        price: "₹210",
        diet: "veg",
        desc: "Crispy semolina net dosai filled with signature spiced potato mash.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "rava-dosai",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Rava Onion Masala Dosai",
        price: "₹220",
        diet: "veg",
        desc: "Super crispy semolina crepe studded with finely chopped onions and stuffed with potato masala.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "rava-dosai",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600",
        title: "Rava Paneer Dosai",
        price: "₹250",
        diet: "veg",
        desc: "Lacy semolina crisp crepe filled with savory paneer masala.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },

      // --- UTTAPAM ---
      {
        category: "uttapam",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Onion Uttapam",
        price: "₹200",
        diet: "veg",
        desc: "Thick South Indian savory pancake topped with caramelized onions and green chilies.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "uttapam",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Tomato Uttapam",
        price: "₹200",
        diet: "veg",
        desc: "Soft thick rice pancake loaded with juicy chopped tomatoes and herbs.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "uttapam",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Onion & Tomato Uttapam",
        price: "₹200",
        diet: "veg",
        desc: "Classic thick rice crepe topped with a delicious combination of onions and ripe tomatoes.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "uttapam",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Mix Veg Uttapam",
        price: "₹240",
        diet: "veg",
        desc: "Thick savory pancake topped with a colorful medley of diced vegetables and spices.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      },
      {
        category: "uttapam",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Coconut Uttapam",
        price: "₹240",
        diet: "veg",
        desc: "Fluffy fermented rice pancake studded with fresh grated coconut for a fragrant subtle sweetness.",
        swiggyUrl: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863",
        zomatoUrl: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Loved The Dakshiini Cafe for its authentic South Indian flavors and reasonable prices! Tried multiple dishes — everything was delicious except the Dahi Vada, which was just okay. Must try: Lemon Button Idli, Mysore/Mirchi Bhajji, Ghee Pudi Idli, Medu Vada, Filter Coffee ☕ Definitely worth a visit!\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Umang Bhandari",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"A small restaurant serving until late in the evening south indian food dishes. We ordered their dosa and this was very enjoyable and tasted very good. We recommend this place.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Ewald Van Der Helm",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"Breakfast at The Dakshiini Cafe is usually a pleasant and reliable experience, especially for simple South Indian staples like rice idlis, dosa, and filter coffee. The place is well run by Arjun Singh, service is generally prompt, and the atmosphere in the mornings is relaxed with a decent crowd without feeling too packed. Strangely, unlike other South Indian places, the serving size of accompaniments like chutneys (considering its a South Indian cafe after all) feel somewhat insufficient. It's a good breakfast spot if you want a straightforward satisfying South Indian meal anytime of the day.\"",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
        name: "Adhish Rajvanshi",
        role: "Local Guide"
      }
    ],
    googleCta: {
      title: "Enjoyed your meal at The Dakshiini Cafe?",
      desc: "Help others discover authentic South Indian food by leaving us a review on Google Maps!",
      url: "https://maps.google.com/?q=The+Dakshiini+Cafe+Sector+18+Noida"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside The Dakshiini Cafe",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkd-WlZV9F4eygWr_vqX4bwEmgWzqi8WmNHZ7xDD5mtycr-mzE-_AsXtk-WIj9A0d8vxOOFnRbQJQ5X-pd9O1ZEUvQqy9VS16OpeJ550KhC2T9Xme_0SQKQed5xoJdSQa9IKxEh975olfUA=w243-h406-n-k-no-nu", alt: "South Indian Food spread at The Dakshiini Cafe" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2E1b36ieR4ARmg8DFr70MHeiKKKanpBnhBL6W3Sz2tngxr_-_uBN6u13QXuevFyc3N81llYJKyAP4zqTcwJ6fuCFpDSWKZUdR7w_T6qrr8fS_R4-7ndsvk5fCJTFakRJOMVmRPFw6_wns=w243-h174-n-k-no-nu", alt: "South Indian Special Dish" },
      { src: "https://lh6.googleusercontent.com/proxy/fU-Q-s325bG7T-hUb4TilniuUwvILlwrdsbC0wr_uojJxyaSNIX6rfEJAh4FQaIWolt-KzJRAi4Xixmlnek5EBp8RFvm8A9Vhi8l6F_guRw0WfeBDDzfyzGK8aVWtppVKsN9KFsfvDDj8nE80wYXQnj5hwyGHD4=w160-h240-k-no", alt: "Authentic Dosa platter" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn5SoylrAvbGqHXNwX7tSyl84lNIQHQm7GfYZkIx2M2WR7OrLgi7tFj2m_CdiqGGcP41djod2MEXE2FI7r01G45nMyefbUwHQ0dt42Vf4S3D92YcUgnBFVICz652opyqZ6-zja-3IosnIJL=w243-h174-n-k-no-nu", alt: "South Indian delicacy serving" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Us in Noida",
    description: "Conveniently located in Sector 18 Main Market, opposite the wine shop. Stop by for your morning filter coffee or late-night South Indian meal.",
    address: "F, 24, Main Market Rd, opposite wine shop, F Block, Pocket F, Sector 18, Noida, Uttar Pradesh 201301",
    hours: [
      "Monday - Sunday: 7:00 AM - 12:30 AM"
    ],
    email: "info@thedakshiinicafe.com",
    phone: "+91 91032 11881",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.093412586749!2d77.3235!3d28.5702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44321012345%3A0x123456789abcdef!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Serving rich, traditional South Indian heritage recipes, crispy dosas, and filter coffee in Noida Sector 18.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/thedakshiinicafe?stkn=MThlM2YyYWNxdDNocQ==", iconClass: "ph-instagram-logo" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/noida-1/the-dakshiini-cafe-sector-18-rest811863", iconClass: "ph-shopping-bag" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/the-dakshiini-cafe-sector-18-noida?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 The Dakshiini Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Dakshiini_Guest_WiFi",
    password: "dakshiinicafe"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
