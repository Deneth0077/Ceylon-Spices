export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  image: string;
  thumbs: string[];
  category: "Wholesale" | "Signature Range";
  subCategory?: "Whole Spices" | "Cinnamon" | "Gift Packs" | "Value Added";
  origin: string;
  packaging?: string;
  netWeight?: string;
}

export const productsData: Product[] = [
  // --- WHOLESALE PRODUCTS (Matching client screenshots) ---
  {
    id: 1,
    title: "Ceylon Black Pepper",
    subtitle: "Whole Spices • Highest Piperine Content (5–9%)",
    description: "Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin.",
    detailedDescription: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin.",
    image: "/images/black_pepper_detail_leaf.jpg",
    thumbs: [
      "/images/black_pepper_detail_leaf.jpg",
      "/images/3d_black_pepper.png",
      "/images/black_pepper_1781650594175.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg / 50kg PP Bags or Custom Bulk Container Packaging"
  },
  {
    id: 2,
    title: "Ceylon Cinnamon Leaf Oil",
    subtitle: "Whole Spices • Pure Steam-Distilled Essential Oil",
    description: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%). Widely used in aromatherapy and natural medicine.",
    detailedDescription: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%) similar to clove oil. It is widely used in aromatherapy, natural medicine, and export markets for its antimicrobial and uplifting properties.",
    image: "/images/3d_cinnamon_oil.png",
    thumbs: [
      "/images/3d_cinnamon_oil.png",
      "/images/artisan_vanilla_ravindra.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka",
    packaging: "20kg / 200kg Aluminum Drums or Glass Bottles"
  },
  {
    id: 3,
    title: "Ceylon Dried Garcinia",
    subtitle: "Whole Spices • Traditional Sun-Dried Goraka",
    description: "Ceylon Garcinia (Goraka / Brindleberry) is a sour tropical fruit native to Sri Lanka. Valued for its tangy flavour, digestive benefits and hydroxycitric acid (HCA).",
    detailedDescription: "Ceylon Garcinia (locally called Goraka, internationally as brindleberry) is a sour tropical fruit native to Sri Lanka. Widely used in traditional cooking, Ayurveda and global wellness markets. Valued for its tangy flavour, digestive benefits and the presence of hydroxycitric acid (HCA).",
    image: "/images/garcinia_pot_outer_zoomed.jpg",
    thumbs: [
      "/images/garcinia_pot_outer_zoomed.jpg",
      "/images/garcinia_inner_detail.jpg",
      "/images/3d_dried_garcinia.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka",
    packaging: "10kg / 25kg Bulk Bales or Vacuum Sealed Bags"
  },
  {
    id: 4,
    title: "Ceylon Cinnamon Alba",
    subtitle: "Cinnamon • Supreme Pencil-Thin Quills",
    description: "Alba is the supreme, finest grade of Ceylon Cinnamon available. Pencil-thin quills crafted by master peelers with intense sweet floral aroma and minimal coumarin.",
    detailedDescription: "Alba Grade is the highest quality grade of True Ceylon Cinnamon (Cinnamomum Verum). Made of paper-thin layers rolled into smooth, slender quills. Offers unmatched aroma, delicate sweetness, and ultra-low coumarin levels safe for daily consumption.",
    image: "/images/alba_cinnamon_detail.png",
    thumbs: [
      "/images/alba_cinnamon_detail.png",
      "/images/3d_ceylon_cinnamon.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "10kg / 25kg Standard Cartons or Custom Bundles"
  },
  {
    id: 5,
    title: "Ceylon Cinnamon C5",
    subtitle: "Cinnamon • Continental C5 Grade",
    description: "Continental C5 is a highly sought-after premium grade with smooth, tight quills, subtle sweet taste, and rich tan color. Famous across European & gourmet markets.",
    detailedDescription: "Ceylon Cinnamon C5 Special is an elite Continental grade featuring tight, slender quills with rich warm aroma and sweet taste. Sourced directly from southern Sri Lankan estates.",
    image: "/images/3d_ceylon_cinnamon.png",
    thumbs: [
      "/images/3d_ceylon_cinnamon.png",
      "/images/card_cinnamon.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg Export Cartons"
  },
  {
    id: 6,
    title: "Ceylon Cinnamon C4",
    subtitle: "Cinnamon • Continental C4 Grade",
    description: "Continental C4 grade quills offer robust aroma, balanced thickness, and signature sweetness. Versatile for culinary, retail, and grinding applications.",
    detailedDescription: "Ceylon Cinnamon C4 provides an excellent combination of flavor, aroma, and commercial viability. Hand-harvested and sun-cured according to ancient Sri Lankan tradition.",
    image: "/images/card_cinnamon.png",
    thumbs: [
      "/images/card_cinnamon.png",
      "/images/3d_ceylon_cinnamon.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg Export Bales / Cartons"
  },
  {
    id: 7,
    title: "Ceylon Cinnamon Off Cut",
    subtitle: "Cinnamon • Pure Quill Off-Cuts",
    description: "Pure Ceylon cinnamon off-cuts and quill fragments generated during precision trimming. Retains full oil content and authentic sweet aroma for grinding & extracts.",
    detailedDescription: "Ceylon Cinnamon Off-Cuts consist of clean broken pieces of authentic Cinnamomum Verum quills. Excellent for spice millers, flavor extractors, and tea blending.",
    image: "/images/cinnamon_harvest.png",
    thumbs: [
      "/images/cinnamon_harvest.png",
      "/images/product_ceylon_cinnamon.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg / 50kg Bulk Bags"
  },
  {
    id: 8,
    title: "Ceylon Cinnamon Quillings",
    subtitle: "Cinnamon • Clean Cinnamon Quill Cuts",
    description: "Clean broken cinnamon quills produced during hand-peeling and grading. Highly aromatic and perfect for essential oil distillation and tea infusions.",
    detailedDescription: "Ceylon Cinnamon Quillings are small, broken fragments of true cinnamon quills. They retain the exact chemical profile, eugenol aroma, and sweetness of whole quills.",
    image: "/images/product_ceylon_cinnamon.png",
    thumbs: [
      "/images/product_ceylon_cinnamon.png",
      "/images/3d_cinnamon_grades.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg / 50kg Bulk Bags"
  },
  {
    id: 9,
    title: "Ceylon Cinnamon Other Grades",
    subtitle: "Cinnamon • Mexican (M), Hamburg (H) & Custom Bulk Grades",
    description: "We supply all commercial export grades of Ceylon Cinnamon including Mexican (M), Hamburg (H), and custom bulk cuts to meet global buyer requirements.",
    detailedDescription: "Comprehensive supply of all Ceylon Cinnamon commercial grades:\n\n• Mexican (M) Grade - Bold medium-thick quills popular in Latin America\n• Hamburg (H) Grade - Thicker quills widely used for grinding and extracts\n• Custom Wholesale Blends - Tailored cut lengths and bulk specifications",
    image: "/images/3d_cinnamon_grades.png",
    thumbs: [
      "/images/3d_cinnamon_grades.png",
      "/images/cinnamon_tree.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg Bulk Bales / Customized Container Loads"
  },

  // --- SIGNATURE RANGE PRODUCTS ---
  {
    id: 101,
    title: "Cinnamon Premium Pack- Giftable",
    subtitle: "Signature Range • Ceylon Cinnamon Sticks (C5 Grade)",
    description: "Product: True Cinnamon Care – Signature Range Ceylon Cinnamon Sticks (C5 Grade)\n• No Additives | No Preservatives\n• 100% Natural",
    detailedDescription: "Product: True Cinnamon Care – Signature Range Ceylon Cinnamon Sticks (C5 Grade)\n- No Additives | No Preservatives\n- 100% Natural\n\nOrigin: Single-Origin Sri Lanka (GI Certified)\n\nPackaging: Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage\n\nNet Weight: 2 oz (57 g)\n\nPositioning: A premium export-grade Ceylon Cinnamon, beautifully presented for:\n- Gourmet Shops\n- Discerning Quality Seekers\n- Gift Collections\nWhile reflecting Sri Lanka's cultural and natural heritage.",
    image: "/images/cinnamon_canister_3d.png",
    thumbs: [
      "/images/cinnamon_canister_3d.png",
      "/images/3d_ceylon_cinnamon.png",
      "/images/alba_cinnamon_detail.png"
    ],
    category: "Signature Range",
    subCategory: "Gift Packs",
    origin: "Single-Origin Sri Lanka (GI Certified)",
    packaging: "Vacuum-sealed in recyclable paper canisters",
    netWeight: "2 oz (57 g)"
  },
  {
    id: 102,
    title: "Black Pepper Premium Pack- Giftable",
    subtitle: "Signature Range • Ceylon Black Peppercorn (High Piperine)",
    description: "Product: True Cinnamon Care – Signature Range Ceylon Black peppercorn (High Piperine)\n• No Additives | No Preservatives\n• 100% Natural",
    detailedDescription: "Product: True Cinnamon Care – Signature Range Ceylon Black peppercorn (High Piperine)\n- No Additives | No Preservatives\n- 100% Natural\n\nOrigin: Single-Origin Sri Lanka\n\nPackaging: Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage\n\nNet Weight: 2 oz (57 g)\n\nPositioning: A premium export-grade Ceylon Black peppercorn, beautifully presented for:\n- Gourmet Shops\n- Discerning Quality Seekers\n- Gift Collections\nWhile reflecting Sri Lanka's cultural and natural heritage.",
    image: "/images/cinnamon_canister_3d.png",
    thumbs: [
      "/images/cinnamon_canister_3d.png",
      "/images/black_pepper_detail_leaf.jpg",
      "/images/3d_black_pepper.png",
      "/images/black_pepper_1781650594175.png"
    ],
    category: "Signature Range",
    subCategory: "Gift Packs",
    origin: "Single-Origin Sri Lanka",
    packaging: "Vacuum-sealed in recyclable paper canisters",
    netWeight: "2 oz (57 g)"
  }
];

