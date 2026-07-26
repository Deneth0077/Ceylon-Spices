export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  image: string;
  thumbs: string[];
  category: "Signature Range" | "Wholesale";
  subCategory?: string;
  origin: string;
  packaging?: string;
  netWeight?: string;
  positioning?: string[];
  specifications?: string[];
}

export const ceylonCinnamonCommonIntro = "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers";

export const productsData: Product[] = [
  // --- SIGNATURE RANGE ---
  {
    id: 101,
    title: "Cinnamon Premium Pack- Giftable",
    subtitle: "True Cinnamon Care – Signature Range Ceylon Cinnamon Quills (Alba Grade)",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/cinnamon_canister_3d.png",
    thumbs: [
      "/images/cinnamon_canister_3d.png",
      "/images/alba_cinnamon_detail.png",
      "/images/legacy_cinnamon_pots.png"
    ],
    category: "Signature Range",
    subCategory: "Signature Gift Pack",
    origin: "Single-Origin Sri Lanka",
    packaging: "Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage",
    netWeight: "3 oz (85 g)",
    specifications: [
      "No Additives | No Preservatives",
      "100% Natural"
    ],
    positioning: [
      "Gourmet Shops",
      "Discerning Quality Seekers",
      "Gift Collections"
    ]
  },
  {
    id: 102,
    title: "Black Peppr Premium Pack- Giftable",
    subtitle: "True Cinnamon Care – Signature Range Ceylon Black peppercorn (High Piperine)",
    description: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency.",
    detailedDescription: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin",
    image: "/images/black_pepper_1781650594175.png",
    thumbs: [
      "/images/black_pepper_1781650594175.png",
      "/images/cinnamon_canister_3d.png"
    ],
    category: "Signature Range",
    subCategory: "Signature Gift Pack",
    origin: "Single-Origin Sri Lanka",
    packaging: "Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage",
    netWeight: "2 oz (57 g)",
    specifications: [
      "No Additives | No Preservatives",
      "100% Natural"
    ],
    positioning: [
      "Gourmet Shops",
      "Discerning Quality Seekers",
      "Gift Collections"
    ]
  },

  // --- WHOLESALE RANGE ---
  {
    id: 1,
    title: "Ceylon Black Pepper",
    subtitle: "Whole Spices • Highest Piperine Content (5–9%)",
    description: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin",
    detailedDescription: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin",
    image: "/images/black_pepper_1781650594175.png",
    thumbs: [
      "/images/black_pepper_1781650594175.png",
      "/images/legacy_cinnamon_pots.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 2,
    title: "Ceylon Cinnamon Leaf Oil",
    subtitle: "Whole Spices • Pure Steam-Distilled Essential Oil",
    description: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%) similar to clove oil. It is widely used in aromatherapy, natural medicine. Export markets for its antimicrobial and uplifting properties",
    detailedDescription: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%) similar to clove oil. It is widely used in aromatherapy, natural medicine. Export markets for its antimicrobial and uplifting properties",
    image: "/images/artisan_vanilla_ravindra.png",
    thumbs: [
      "/images/artisan_vanilla_ravindra.png",
      "/images/spice_jar_plinth.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 3,
    title: "Ceylon Dried Garcinia",
    subtitle: "Whole Spices • Traditional Sun-Dried Goraka",
    description: "Ceylon Garcinia (locally called Goraka, internationally as brindleberry) is a sour tropical fruit native to Sri Lanka. Widely use in traditional cooking, Ayurveda and increasingly in global wellness markets. It is valued for its tangy flavour, digestive benefits and the presence of hydroxycitric acid (HCA) believe to weight-loss and boost metabolism.",
    detailedDescription: "Ceylon Garcinia (locally called Goraka, internationally as brindleberry) is a sour tropical fruit native to Sri Lanka. Widely use in traditional cooking, Ayurveda and increasingly in global wellness markets. It is valued for its tangy flavour, digestive benefits and the presence of hydroxycitric acid (HCA) believe to weight-loss and boost metabolism.",
    image: "/images/card_garcinia.png",
    thumbs: [
      "/images/card_garcinia.png",
      "/images/turmeric_spoon.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 4,
    title: "Ceylon Cinnamon Alba",
    subtitle: "Cinnamon • Supreme Fine Grade Quills",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/alba_cinnamon_detail.png",
    thumbs: [
      "/images/alba_cinnamon_detail.png",
      "/images/legacy_cinnamon_pots.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 5,
    title: "Ceylon Cinnamon C5",
    subtitle: "Cinnamon • Premium C5 Grade Quills",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/card_cinnamon.png",
    thumbs: [
      "/images/card_cinnamon.png",
      "/images/alba_cinnamon_detail.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 6,
    title: "Ceylon Cinnamon C4",
    subtitle: "Cinnamon • Standard C4 Grade Quills",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/legacy_cinnamon_pots.png",
    thumbs: [
      "/images/legacy_cinnamon_pots.png",
      "/images/card_cinnamon.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 7,
    title: "Ceylon Cinnamon Off Cut",
    subtitle: "Cinnamon • Pure Quill Trimmings",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/cinnamon_harvest.png",
    thumbs: [
      "/images/cinnamon_harvest.png",
      "/images/hero_organic_grain.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 8,
    title: "Ceylon Cinnamon Quillings",
    subtitle: "Cinnamon • Pure Cinnamon Bark Chips",
    description: ceylonCinnamonCommonIntro,
    detailedDescription: ceylonCinnamonCommonIntro,
    image: "/images/hero_organic_grain.png",
    thumbs: [
      "/images/hero_organic_grain.png",
      "/images/cinnamon_harvest.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 9,
    title: "Ceylon Cinnamon Other Grades",
    subtitle: "Cinnamon • Alba, Continental (C), Mexican (M), Hamburg (H)",
    description: "Ceylon Cinnamon (Cinnamomum Verum aka Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka. We supply all grades of Ceylon Cinnamon, carefully processed to meet international standards:\n\n• Alba Grade - The finest, pencil-thin quills - Premium\n• Continental (C) Grade – Little large & balanced. Famous in USA/EU\n• Mexican (M) Grade - Medium-thick quills, bold. Famous in Latin America\n• Hamburg (H) Grade - Thicker quills, widely used for grinding & extracts",
    detailedDescription: "Ceylon Cinnamon (Cinnamomum Verum aka Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka. We supply all grades of Ceylon Cinnamon, carefully processed to meet international standards:\n\n• Alba Grade - The finest, pencil-thin quills - Premium\n• Continental (C) Grade – Little large & balanced. Famous in USA/EU\n• Mexican (M) Grade - Medium-thick quills, bold. Famous in Latin America\n• Hamburg (H) Grade - Thicker quills, widely used for grinding & extracts",
    image: "/images/cinnamon_tree.png",
    thumbs: [
      "/images/cinnamon_tree.png",
      "/images/ceylon_cinnamon_estate_about.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  }
];
