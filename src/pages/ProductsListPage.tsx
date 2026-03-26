import React, { useEffect, useState } from "react";
import { productsData, productCategories } from "../data/products";
import { ProcessSection } from "../components/ProcessSection";
import { CTABanner } from "../components/CTABanner";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  ArrowRightIcon,
  ShieldIcon,
  LayersIcon,
  DropletIcon,
  BugIcon,
  WindIcon,
  FlaskConicalIcon,
  CheckCircleIcon,
  MountainIcon,
  BeakerIcon,
  TestTubeIcon,
  FilterIcon,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldIcon,
  LayersIcon,
  DropletIcon,
  BugIcon,
  WindIcon,
  FlaskConicalIcon,
  MountainIcon,
  BeakerIcon,
  TestTubeIcon,
  // Add all other icons from your products data
};

const capabilities = [
  "Custom formulation development",
  "Full-scale laboratory testing",
  "Field trial management",
  "Performance monitoring & optimization",
  "Regulatory compliance support",
  "24/7 technical assistance",
];

type CategoryFilter =
  | "all"
  | "production-chemicals"
  | "drilling-chemicals"
  | "commodity-chemicals";

const categoryLabels: Record<CategoryFilter, string> = {
  all: "All Products",
  "production-chemicals": "Production Chemicals",
  "drilling-chemicals": "Drilling Chemicals",
  "commodity-chemicals": "Commodity Chemicals",
};

const categoryDescriptions: Record<CategoryFilter, string> = {
  all: "Comprehensive chemical technologies across the entire oil and gas value chain",
  "production-chemicals":
    "Advanced solutions for production optimization and asset protection",
  "drilling-chemicals":
    "Essential additives for safe and efficient drilling operations",
  "commodity-chemicals":
    "Industrial-grade chemicals for diverse oilfield applications",
};

export function ProductsListPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeCategory, searchQuery]);

  // Filter products based on category and search
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  // Get product counts per category
  const categoryCounts = {
    all: productsData.length,
    "production-chemicals": productCategories.production.length,
    "drilling-chemicals": productCategories.drilling.length,
    "commodity-chemicals": productCategories.commodity.length,
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-simmerium-navy py-32 pt-40 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1920&h=1080&fit=crop"
            alt="Chemical Solutions"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-simmerium-navy/90 via-simmerium-navy/70 to-simmerium-navy/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,25,35,0.6)_100%)]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/40 float-particle"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-[25%] left-[75%] w-2 h-2 rounded-full bg-simmerium-gold/30 float-particle"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-[60%] left-[20%] w-1 h-1 rounded-full bg-simmerium-light-gold/50 float-particle"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-[45%] left-[85%] w-1.5 h-1.5 rounded-full bg-simmerium-gold/35 float-particle"
            style={{ animationDelay: "4.5s" }}
          ></div>
          <div
            className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-simmerium-light-gold/25 float-particle"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[35%] left-[40%] w-1 h-1 rounded-full bg-simmerium-gold/40 float-particle"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-simmerium-gold/5 rounded-full filter blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span
            className="hidden md:inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card text-simmerium-light-gold text-sm font-semibold tracking-widest mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="#home" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="text-white">PRODUCTS & SOLUTIONS</span>
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Advanced <span className="text-gradient-gold">Products</span> &
            Solutions
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            {categoryDescriptions[activeCategory]}
          </p>
        </div>
      </section>

      {/* Category Filters & Search */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start flex-1 min-w-0">
              {(Object.keys(categoryLabels) as CategoryFilter[]).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-simmerium-gold text-white shadow-md"
                        : "bg-gray-100 text-simmerium-body hover:bg-gray-200"
                    }`}
                  >
                    {categoryLabels[category]}
                    <span className="ml-1 text-xs opacity-75">
                      ({categoryCounts[category]})
                    </span>
                  </button>
                ),
              )}
            </div>

            {/* Search Bar */}
            <div className="relative flex-shrink-0 w-full lg:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simmerium-gold focus:border-transparent transition-all"
              />
              <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Active Filter Indicator */}
          {(activeCategory !== "all" || searchQuery !== "") && (
            <div className="mt-3 px-4 pb-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-simmerium-body">
                  Showing{" "}
                  <span className="font-bold text-simmerium-heading">
                    {filteredProducts.length}
                  </span>{" "}
                  product{filteredProducts.length !== 1 ? "s" : ""}
                </span>
                {activeCategory !== "all" && (
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="text-xs text-simmerium-gold hover:text-simmerium-light-gold font-medium underline underline-offset-2"
                  >
                    Clear category filter
                  </button>
                )}
                {searchQuery !== "" && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-simmerium-gold hover:text-simmerium-light-gold font-medium underline underline-offset-2"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FilterIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-simmerium-heading mb-2">
                No products found
              </h3>
              <p className="text-simmerium-body mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-6 py-2.5 rounded font-semibold transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-4">
                  {categoryLabels[activeCategory]}
                </h2>
                <p className="text-lg text-simmerium-body max-w-2xl mx-auto">
                  {categoryDescriptions[activeCategory]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => {
                  const Icon = iconMap[product.icon] || ShieldIcon;
                  return (
                    <>
                      <a
                        key={product.slug}
                        href={`#product/${product.slug}`}
                        className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden block"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-simmerium-gold transition-colors duration-300"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="text-xs font-semibold text-simmerium-gold/60 uppercase tracking-wider">
                            {product.category === "production-chemicals" &&
                              "Production"}
                            {product.category === "drilling-chemicals" &&
                              "Drilling"}
                            {product.category === "commodity-chemicals" &&
                              "Commodity"}
                          </span>
                        </div>

                        <div className="w-14 h-14 bg-simmerium-cream rounded-lg flex items-center justify-center mb-6 group-hover:bg-simmerium-gold/10 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-simmerium-gold" />
                        </div>

                        <h3 className="text-xl font-bold text-simmerium-heading mb-3 group-hover:text-simmerium-gold transition-colors">
                          {product.title}
                        </h3>

                        <p className="text-simmerium-body mb-4 leading-relaxed text-sm">
                          {product.shortDescription}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-simmerium-body"
                            >
                              <CheckCircleIcon className="w-4 h-4 text-simmerium-gold flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <span className="inline-flex items-center text-sm font-bold text-simmerium-navy group-hover:text-simmerium-gold transition-colors">
                          View Full Details
                          <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    </>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-11 h-11 rounded-xl text-simmerium-body border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                        aria-label="Previous page"
                      >
                        <ArrowRightIcon className="w-5 h-5 -rotate-180" />
                      </button>
                      <span className="text-xs text-simmerium-body">
                        {currentPage} / {totalPages}
                      </span>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-11 h-11 rounded-xl text-simmerium-body border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-sm hover:shadow-md"
                        aria-label="Next page"
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-simmerium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-simmerium-gold"></div>
                <span className="text-simmerium-gold font-semibold uppercase tracking-wider text-sm">
                  Beyond Products
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-simmerium-heading mb-6">
                End-to-End Technical Support
              </h2>
              <p className="text-lg text-simmerium-body mb-8">
                We don't just supply chemicals — we engineer comprehensive
                solutions. From initial assessment through deployment and
                optimization, our team of experts is with you every step of the
                way.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-simmerium-gold hover:bg-simmerium-light-gold text-white px-8 py-3 rounded font-semibold transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                Request a Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircleIcon className="w-5 h-5 text-simmerium-gold flex-shrink-0" />
                  <span className="text-sm font-medium text-simmerium-heading">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <AnimatedSection>
        <ProcessSection />
      </AnimatedSection>

      <CTABanner />
    </div>
  );
}
