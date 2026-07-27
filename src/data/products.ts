export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  detailedDescription?: string;
  image: string;
  thumbs: string[];
  category: string;
  subCategory?: string;
  origin: string;
  packaging?: string;
  netWeight?: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "Black pepper",
    subtitle: "Whole Spices • Highest Piperine Content (5–9%)",
    description: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin",
    detailedDescription: "Ceylon pepper has been traded since ancient times and even found in Egyptian mummies. Ceylon black pepper is prized worldwide for its highest piperine content (5–9%), complex citrus-floral aroma and strong pungency. It commands premium in gourmet markets due to its terroir, artisanal cultivation, and authentic origin",
    image: "/images/3d_black_pepper.png",
    thumbs: [
      "/images/3d_black_pepper.png",
      "/images/black_pepper_1781650594175.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 2,
    title: "Ceylon Dried-Garcinia",
    subtitle: "Whole Spices • Traditional Sun-Dried Goraka",
    description: "Ceylon Garcinia (locally called Goraka, internationally as brindleberry) is a sour tropical fruit native to Sri Lanka. Widely use in traditional cooking, Ayurveda and increasingly in global wellness markets. It is valued for its tangy flavour, digestive benefits and the presence of hydroxycitric acid (HCA) believe to weight-loss and boost metabolism.",
    detailedDescription: "Ceylon Garcinia (locally called Goraka, internationally as brindleberry) is a sour tropical fruit native to Sri Lanka. Widely use in traditional cooking, Ayurveda and increasingly in global wellness markets. It is valued for its tangy flavour, digestive benefits and the presence of hydroxycitric acid (HCA) believe to weight-loss and boost metabolism.",
    image: "/images/3d_dried_garcinia.png",
    thumbs: [
      "/images/3d_dried_garcinia.png",
      "/images/card_garcinia.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 3,
    title: "Ceylon Cinnamon Leaf Oil",
    subtitle: "Whole Spices • Pure Steam-Distilled Essential Oil",
    description: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%) similar to clove oil. It is widely used in aromatherapy, natural medicine. Export markets for its antimicrobial and uplifting properties",
    detailedDescription: "Ceylon cinnamon leaf oil is a warm, spicy essential oil distilled from the leaves of Cinnamomum verum (True Cinnamon), prized for its high Eugenol content (70–95%) similar to clove oil. It is widely used in aromatherapy, natural medicine. Export markets for its antimicrobial and uplifting properties",
    image: "/images/3d_cinnamon_oil.png",
    thumbs: [
      "/images/3d_cinnamon_oil.png",
      "/images/artisan_vanilla_ravindra.png"
    ],
    category: "Wholesale",
    subCategory: "Whole Spices",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 4,
    title: "Ceylon Cinnamon",
    subtitle: "Cinnamon • Supreme Fine Grade Quills",
    description: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    detailedDescription: "Ceylon Cinnamon (Cinnamomum Verum also known as Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka, prized globally for its delicate, sweet flavour with citrus and floral notes, fine layered quills and lower coumarin content. It is considered the premium variety compared to Cassia and healthy for daily consumption. We provide only the best grads for our customers",
    image: "/images/3d_ceylon_cinnamon.png",
    thumbs: [
      "/images/3d_ceylon_cinnamon.png",
      "/images/alba_cinnamon_detail.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  },
  {
    id: 5,
    title: "Ceylon Cinnamon Other Grades",
    subtitle: "Cinnamon • Alba, Continental (C), Mexican (M), Hamburg (H)",
    description: "Ceylon Cinnamon (Cinnamomum Verum aka Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka. We supply all grades of Ceylon Cinnamon, carefully processed to meet international standards:\n\n• Alba Grade - The finest, pencil-thin quills - Premium\n• Continental (C) Grade – Little large & balanced. Famous in USA/EU\n• Mexican (M) Grade - Medium-thick quills, bold. Famous in Latin America\n• Hamburg (H) Grade - Thicker quills, widely used for grinding & extracts",
    detailedDescription: "Ceylon Cinnamon (Cinnamomum Verum aka Cinnamomum Zeylanicum) is the “True Cinnamon” native to Sri Lanka. We supply all grades of Ceylon Cinnamon, carefully processed to meet international standards:\n\n• Alba Grade - The finest, pencil-thin quills - Premium\n• Continental (C) Grade – Little large & balanced. Famous in USA/EU\n• Mexican (M) Grade - Medium-thick quills, bold. Famous in Latin America\n• Hamburg (H) Grade - Thicker quills, widely used for grinding & extracts",
    image: "/images/3d_cinnamon_grades.png",
    thumbs: [
      "/images/3d_cinnamon_grades.png",
      "/images/cinnamon_tree.png"
    ],
    category: "Wholesale",
    subCategory: "Cinnamon",
    origin: "Single-Origin Sri Lanka"
  }
];
