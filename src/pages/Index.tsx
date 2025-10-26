import Header from "@/components/Header";
import LatestUpdates from "@/components/LatestUpdates";
import EventCard from "@/components/EventCard";
import PastEventCard from "@/components/PastEventCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex gap-12">
          <div className="flex-1">
            {/* About Us Section */}
            <section className="mb-16">
              <h2 className="font-serif text-3xl font-bold mb-8 pb-2 border-b border-border">
                About Us
              </h2>
              <div className="space-y-6">
                <p className="leading-relaxed">
                  IEDC CUSAT is a government-funded organization that aims to promote 
                  entrepreneurship among students and young professionals in India. We 
                  foster a culture of innovation and provide necessary resources to budding 
                  entrepreneurs.
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc leading-relaxed">
                    Provides various training and resources for future entrepreneurs
                  </li>
                  <li className="list-disc leading-relaxed">
                    Entrepreneurship-related workshops, seminars, and competitions
                  </li>
                  <li className="list-disc leading-relaxed">
                    Offers incubation facilities for start-ups at CITTIC, CUSAT
                  </li>
                  <li className="list-disc leading-relaxed">
                    Opportunities to connect with like-minded individuals
                  </li>
                </ul>
              </div>
            </section>

            {/* Events & Initiatives Section */}
            <section>
              <h2 className="font-serif text-3xl font-bold mb-8 pb-2 border-b border-border">
                Events & Initiatives
              </h2>
              
              <h3 className="font-serif text-2xl text-center mb-8 pb-2 border-b border-border">
                Upcoming Events
              </h3>
              
              <div className="space-y-6">
                <EventCard
                  title="Founder Next Door"
                  description="Alright, y'all. Founder Next Door is here!!!!

If you've ever said 'I wanna start something' or you're just unhinged enough to try...
this is literally your chance.

Wanna know what the program's all about?"
                  linkText="Check it out here"
                  linkUrl="#"
                  registerText="Register here"
                  registerUrl="#"
                  footer="Come as you are; leave as a founder."
                />
              </div>

              <h3 className="font-serif text-2xl text-center mt-16 mb-8 pb-2 border-b border-border">
                Past Events
              </h3>

              <div className="grid grid-cols-3 gap-8">
                <PastEventCard
                  title="Makeaton 7.0"
                  description="CITTIC CUSAT proudly hosted MAKE-A-TON 7.0 - powered by Eduport! The event brought together innovators and coders for Kerala's most exciting hackathon, complete with MLH. With a special track on 'Best Use of Conductor' sponsored by Orkes, along with other exciting tracks by Eduport, GoDaddy, Aarbit, Stremlit, Cloudflare and more, participants competed for prizes worth over 7 lakh in cash and 8 track prizes."
                  imagePlaceholder="Makeaton 7.0 Poster"
                />
                <PastEventCard
                  title="Innovate and Elevate"
                  description="Innovate & Elevate: Empowering Entrepreneurs. Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!"
                  imagePlaceholder="Innovate and Elevate Poster"
                />
                <PastEventCard
                  title="Redbull Basement"
                  description="Redbull basement powered by Make-A-Ton 7.0. Level Up Your Ideas ! Got that creative spark buzzing like a rogue WiFi signal? It's time to take them global with Red Bull Basement!"
                  imagePlaceholder="Redbull Basement Poster"
                />
              </div>
            </section>

            {/* Incubation Section */}
            <section className="mt-16">
              <h2 className="font-serif text-3xl font-bold mb-8 pb-2 border-b border-border">
                Incubation
              </h2>
            </section>
          </div>

          <LatestUpdates />
        </div>
      </main>
    </div>
  );
};

export default Index;
