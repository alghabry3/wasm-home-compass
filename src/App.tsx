import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Investment from "./pages/Investment";
import Blog from "./pages/Blog";
import SmartAdvisor from "./pages/SmartAdvisor";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import FinancingSolutions from "./pages/FinancingSolutions";
import MortgageLoans from "./pages/MortgageLoans";
import Mortgage from "./pages/Mortgage";
import DefaultSolutions from "./pages/DefaultSolutions";
import HousingSupport from "./pages/HousingSupport";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/smart-advisor" element={<SmartAdvisor />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/financing-solutions" element={<FinancingSolutions />} />
            <Route path="/mortgage-loans" element={<MortgageLoans />} />
            <Route path="/mortgage" element={<Mortgage />} />
            <Route path="/default-solutions" element={<DefaultSolutions />} />
            <Route path="/housing-support" element={<HousingSupport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;