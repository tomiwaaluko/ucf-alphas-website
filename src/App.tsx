import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Service from "./pages/Service";
import MissBlackAndGold from "./pages/MissBlackAndGold";
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
import BrotherDetail from "./pages/BrotherDetail";
import Lineage from "./pages/Lineage";
import LineageDetail from "./pages/LineageDetail";
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
          <Route path="/brother/:id" element={<BrotherDetail />} />
          <Route path="/lineage" element={<Lineage />} />
          <Route path="/lineage/:lineId" element={<LineageDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
