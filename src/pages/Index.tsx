import Header from "@/components/Header";
import LatestUpdates from "@/components/LatestUpdates";
import AboutUs from "./components/AboutUs";
import EventsAndInitiatives from "./components/EventsAndInitiatives";
import Incubation from "./components/Incubation";
import Team from "./components/Team";
import Contact from "./components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="container mx-auto py-12">
        <div id="home" className="flex flex-col lg:flex-row lg:gap-12 mb-16">
          <div className="flex-1 w-full">
          </div>
          <div className="w-full lg:w-1/3">
            <LatestUpdates />
          </div>
        </div>

        <AnimatedSection>
          <div id="about" className="mb-16">
            <AboutUs />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="events" className="mb-16">
            <EventsAndInitiatives />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="incubation" className="mb-16">
            <Incubation />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="team" className="mb-16">
            <Team />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact">
            <Contact />
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default Index;