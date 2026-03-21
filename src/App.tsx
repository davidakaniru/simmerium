import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsListPage } from './pages/ProductsListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SectorListPage } from './pages/SectorListPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';
function parseHash(): {
  page: string;
  slug?: string;
} {
  const hash = window.location.hash.slice(1) || 'home';
  if (hash.startsWith('product/'))
  return {
    page: 'product',
    slug: hash.split('/')[1]
  };
  if (hash.startsWith('sector/'))
  return {
    page: 'sector',
    slug: hash.split('/')[1]
  };
  if (hash === 'sectors')
  return {
    page: 'sectors'
  };
  if (hash === 'about')
  return {
    page: 'about'
  };
  if (hash === 'products')
  return {
    page: 'products'
  };
  if (hash === 'sustainability')
  return {
    page: 'sustainability'
  };
  if (hash === 'contact-us')
  return {
    page: 'contact-us'
  };
  return {
    page: 'home'
  };
}
export function App() {
  const [route, setRoute] = useState(parseHash());
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  let content;
  switch (route.page) {
    case 'about':
      content = <AboutPage />;
      break;
    case 'products':
      content = <ProductsListPage />;
      break;
    case 'product':
      content = <ProductDetailPage slug={route.slug!} />;
      break;
    case 'sectors':
      content = <SectorListPage />;
      break;
    case 'sector':
      content = <SectorDetailPage slug={route.slug!} />;
      break;
    case 'sustainability':
      content = <SustainabilityPage />;
      break;
    case 'contact-us':
      content = <ContactPage />;
      break;
    case 'home':
    default:
      content = <HomePage />;
      break;
  }
  return (
    <div className="font-sans text-simmerium-body bg-simmerium-white min-h-screen flex flex-col relative">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navbar />
      <main className="flex-grow">{content}</main>
      <Footer />
      <ScrollToTop />
    </div>);

}