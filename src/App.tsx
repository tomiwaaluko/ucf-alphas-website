import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Service from "./pages/Service";
import MissBlackAndGold from "./pages/MissBlackAndGold";
import MissBlackAndGoldDetails from "./pages/MissBlackAndGoldDetails";
import MissXiIotaDetails from "./pages/MissXiIotaDetails";
import MissYellowRoseDetails from "./pages/MissYellowRoseDetails";
import FraternityHistory from "./pages/FraternityHistory";
import MeetTheJewels from "./pages/MeetTheJewels";
import JewelDetail from "./pages/JewelDetail";
import NationalPrograms from "./pages/NationalPrograms";
import ProgramDetail from "./pages/ProgramDetail";
import Poems from "./pages/Poems";
import BecomeAnAlpha from "./pages/BecomeAnAlpha";
import ChapterHistory from "./pages/ChapterHistory";
import Leadership from "./pages/Leadership";
import MeetTheBrothers from "./pages/MeetTheBrothers";
import Advisors from "./pages/Advisors";
import BrotherDetail from "./pages/BrotherDetail";
import AdvisorDetail from "./pages/AdvisorDetail";
import Lineage from "./pages/Lineage";
import LineageDetail from "./pages/LineageDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service" element={<Service />} />
          <Route path="/miss-black-and-gold" element={<MissBlackAndGold />} />
          <Route
            path="/miss-black-and-gold-details"
            element={<MissBlackAndGoldDetails />}
          />
          <Route path="/miss-xi-iota-details" element={<MissXiIotaDetails />} />
          <Route
            path="/miss-yellow-rose-details"
            element={<MissYellowRoseDetails />}
          />
          {/* Alpha Phi Alpha Routes */}
          <Route path="/fraternity-history" element={<FraternityHistory />} />
          <Route path="/meet-the-jewels" element={<MeetTheJewels />} />
          <Route path="/jewel/:id" element={<JewelDetail />} />
          <Route path="/national-programs" element={<NationalPrograms />} />
          <Route path="/program/:programId" element={<ProgramDetail />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/become-an-alpha" element={<BecomeAnAlpha />} />
          {/* Xi Iota Routes */}
          <Route path="/chapter-history" element={<ChapterHistory />} />
          <Route path="/leadership" element={<Leadership />} />{" "}
          <Route path="/meet-the-brothers" element={<MeetTheBrothers />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/brother/:id" element={<BrotherDetail />} />
          <Route path="/advisor/:id" element={<AdvisorDetail />} />
          <Route path="/lineage" element={<Lineage />} />
          <Route path="/lineage/:lineId" element={<LineageDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
