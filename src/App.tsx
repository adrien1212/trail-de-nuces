import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Inscription from "./pages/Inscription";
import Parcours from "./pages/Parcours";
import Parcours2026 from "./pages/2026/Parcours2026";
import Randonnee from "./pages/Randonnee";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PendingInscription from "./pages/PendingInscription";
import Resultats2026 from "./pages/2026/Resultats2026";
import Partenaires from "./pages/Partenaires";
import Randonnee2026 from "./pages/2026/Randonnee2026";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter /*basename="/marcillac-trail-joy/"*/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/parcours-2026" element={<Parcours2026 />} />
          <Route path="/randonnee" element={<Randonnee />} />
          <Route path="/randonnee-2026" element={<Randonnee2026 />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pending" element={<PendingInscription />} />
          <Route path="/resultats-2026" element={<Resultats2026 />} />
          <Route path="/partenaires" element={<Partenaires />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
