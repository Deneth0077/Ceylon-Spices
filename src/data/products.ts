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
  // --- SIGNATURE RANGE GIFT PACKS (Card 1 & Card 2) ---
  {
    id: 101,
    title: "Ceylon Cinnamon Premium Gift Pack ",
    subtitle: "Signature Range • Ceylon Cinnamon Sticks (C5 Grade)",
    description: "Product: True Cinnamon Care – Signature Range Ceylon Cinnamon Sticks (C5 Grade)\n• No Additives | No Preservatives\n• 100% Natural",
    detailedDescription: "Product: True Cinnamon Care – Signature Range Ceylon Cinnamon Sticks (C5 Grade)\n- No Additives | No Preservatives\n- 100% Natural\n\nOrigin: Single-Origin Sri Lanka (GI Certified)\n\nPackaging: Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage\n\nNet Weight: 2 oz (57 g)\n\nPositioning: A premium export-grade Ceylon Cinnamon, beautifully presented for:\n- Gourmet Shops\n- Discerning Quality Seekers\n- Gift Collections\nWhile reflecting Sri Lanka's cultural and natural heritage.",
    image: "/images/cinnamon_gift_canister_bow.jpg",
    thumbs: [
      "/images/cinnamon_gift_canister_bow.jpg",
      "/images/cinnamon_vacuum_pack_real.jpg"
    ],
    category: "Signature Range",
    subCategory: "Gift Packs",
    origin: "Single-Origin Sri Lanka (GI Certified)",
    packaging: "Vacuum-sealed in recyclable paper canisters",
    netWeight: "2 oz (57 g)"
  },
  {
    id: 102,
    title: "Black Pepper Premium Gift Pack",
    subtitle: "Signature Range • Ceylon Black Peppercorn (High Piperine)",
    description: "Product: True Cinnamon Care – Signature Range Ceylon Black peppercorn (High Piperine)\n• No Additives | No Preservatives\n• 100% Natural",
    detailedDescription: "Product: True Cinnamon Care – Signature Range Ceylon Black peppercorn (High Piperine)\n- No Additives | No Preservatives\n- 100% Natural\n\nOrigin: Single-Origin Sri Lanka\n\nPackaging: Vacuum-sealed for lasting freshness, elegantly packed in a recyclable paper canisters inspired by Sri Lanka's heritage\n\nNet Weight: 2 oz (57 g)\n\nPositioning: A premium export-grade Ceylon Black peppercorn, beautifully presented for:\n- Gourmet Shops\n- Discerning Quality Seekers\n- Gift Collections\nWhile reflecting Sri Lanka's cultural and natural heritage.",
    image: "/images/pepper_gift_canister_bow.jpg",
    thumbs: [
      "/images/pepper_gift_canister_bow.jpg",
      "/images/black_pepper_vacuum_pack_real.jpg",
      "/images/black_pepper_detail_leaf.jpg"
    ],
    category: "Signature Range",
    subCategory: "Gift Packs",
    origin: "Single-Origin Sri Lanka",
    packaging: "Vacuum-sealed in recyclable paper canisters",
    netWeight: "2 oz (57 g)"
  },
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
    image: "/images/cinnamon_leaf_oil_real.jpg",
    thumbs: [
      "/images/cinnamon_leaf_oil_real.jpg"
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
    image: "/images/garcinia_inner_detail.jpg",
    thumbs: [
      "/images/garcinia_inner_detail.jpg",
      "/images/garcinia_pot_outer_zoomed.jpg"
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
    image: "/images/cinnamon_alba_real.png",
    thumbs: [
      "/images/cinnamon_alba_real.png"
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
    description: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    detailedDescription: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    image: "/images/cinnamon_c5_leaves_stone_real.jpg",
    thumbs: [
      "/images/cinnamon_c5_leaves_stone_real.jpg"
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
    description: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    detailedDescription: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    image: "/images/cinnamon_c4_quills.jpg",
    thumbs: [
      "/images/cinnamon_c4_quills.jpg"
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
    image: "/images/cinnamon_off_cut_real.png",
    thumbs: [
      "/images/cinnamon_off_cut_real.png"
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
    image: "/images/cinnamon_quillings_real.png",
    thumbs: [
      "/images/cinnamon_quillings_real.png"
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
    image: "/images/cinnamon_other_grades_cutout.png",
    thumbs: [
      "/images/cinnamon_other_grades_cutout.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka",
    packaging: "25kg Bulk Bales / Customized Container Loads"
  }
];

