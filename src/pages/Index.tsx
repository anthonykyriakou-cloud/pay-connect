import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { useEffect } from "react";

const Index = () => {
  // Handle GitHub Pages redirect
useEffect(() => {
  const redirect = () => {
    const pathSegmentsToKeep = 1;
    const l = window.location;
    const redirect = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash;
    
    if (l.pathname.includes('/?/')) {
      const newUrl = l.pathname.split('/?/')[1].replace(/~and~/g, '&');
      window.history.replaceState({}, '', '/' + newUrl);
    }
  };
  
  redirect();
}, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
