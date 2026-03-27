import {
  ArrowRightIcon,
  FlaskConicalIcon,
  MountainIcon,
  TestTubeIcon,
} from "lucide-react";

const categories = [
  {
    slug: "production-chemicals",
    title: "Production Chemicals",
    icon: FlaskConicalIcon,
    description:
      "Advanced solutions for production optimization and asset protection. Including demulsifiers, corrosion inhibitors, scale inhibitors, and specialty chemicals.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
    productCount: 15,
    highlights: [
      "Demulsifiers & Water Clarifiers",
      "Corrosion & Scale Inhibitors",
      "Biocides & H2S Scavengers",
      "Specialty Production Chemicals",
    ],
  },
  {
    slug: "drilling-chemicals",
    title: "Drilling Chemicals",
    icon: MountainIcon,
    description:
      "Essential additives for safe and efficient drilling operations. Complete portfolio of weighting agents, viscosifiers, and fluid loss control additives.",
    image:
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&h=400&fit=crop",
    productCount: 18,
    highlights: [
      "Barite & Bentonite",
      "Weighting Agents & LCM",
      "Polymers & Viscosifiers",
      "Specialty Drilling Fluids",
    ],
  },
  {
    slug: "commodity-chemicals",
    title: "Commodity Chemicals",
    icon: TestTubeIcon,
    description:
      "Industrial-grade chemicals for diverse oilfield applications. Comprehensive range of acids, bases, salts, and specialty commodities.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    productCount: 23,
    highlights: [
      "Acids & Bases",
      "Chlorides & Bromides",
      "Glycols & Alcohols",
      "Specialty Commodities",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
            <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
              Our Portfolio
            </span>
            <div className="w-8 h-0.5 bg-simmerium-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-simmerium-heading mb-6">
            Products & Solutions
          </h2>
          <p className="text-lg text-simmerium-body">
            Comprehensive chemical technologies engineered to solve complex
            challenges across the entire oil and gas value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.slug}
                href={`#products?category=${category.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-500"></div>

                {/* Image Header */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-xs font-bold text-simmerium-navy">
                      {category.productCount} Products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="w-12 h-12 bg-simmerium-cream rounded-xl flex items-center justify-center mb-5 group-hover:bg-simmerium-gold/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-simmerium-gold" />
                  </div>

                  <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-simmerium-body mb-6 leading-relaxed text-sm">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6 text-xs text-simmerium-body">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-simmerium-gold flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors duration-300">
                    View All Products
                    <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* View All Products Link */}
        <div className="text-center">
          <a
            href="#products?category=all"
            className="inline-flex items-center gap-2 text-simmerium-gold hover:text-simmerium-light-gold font-semibold text-sm transition-colors group"
          >
            Explore All{" "}
            {/* {categories.reduce((acc, cat) => acc + cat.productCount, 0)}{" "} */}
            Products
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
