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
              
              <div className="text-center py-12 space-y-4">
                <p className="text-lg leading-relaxed">
                  Got a great idea but missing the resources to make it real?
                </p>
                <p className="text-lg leading-relaxed">No worries!</p>
                <p className="text-lg leading-relaxed">
                  This is the place where you can team up with others,
                </p>
                <p className="text-lg leading-relaxed">
                  collaborate on projects, and transform your concepts into actual prototypes.
                </p>
                <p className="text-lg leading-relaxed mt-8">
                  Share your vision with us, and together we'll help you bring it to life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 mt-12 py-12 border-t border-border">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 bg-muted rounded-full mb-6 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">CITTIC Logo</span>
                  </div>
                  <p className="leading-relaxed text-sm">
                    CITTIC is the Innovation and Technology Incubation Centre at Cochin University of Science and 
                    Technology. It provides a platform for students and faculty to transform their innovative ideas into 
                    successful ventures. With state-of-the-art infrastructure, mentorship, and funding opportunities, CITTIC supports 
                    startups in various domains, fostering a vibrant entrepreneurial ecosystem within the university.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 bg-muted rounded-full mb-6 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">RUSA Logo</span>
                  </div>
                  <p className="leading-relaxed text-sm">
                    As we know, early stage funding is a big challenge for innovators, especially student 
                    start-ups who are trying to commercialize innovative ideas. Understanding this 
                    challenge, CUSAT has decided to set up a start-up fund with financial support from RUSA. 
                    The fund is managed by CUSAT-TBI of CUSATECH FOUNDATION with the objective 
                    of helping our students and researchers to convert their innovative ideas into full-fledged ventures. 
                    RUSA also established a start-up incubation centre in CUSAT called RISE TBI(RUSA Innovation 
                    Start-up Ecosystem Technology Business Incubator)
                  </p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mt-16">
              <h2 className="font-serif text-3xl font-bold mb-8 pb-2 border-b border-border">
                Team
              </h2>
              <div className="py-12">
                <div className="grid grid-cols-4 gap-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-32 h-32 bg-muted rounded-full mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Photo</span>
                      </div>
                      <h4 className="font-semibold text-sm">Team Member {i}</h4>
                      <p className="text-xs text-muted-foreground">Position</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mt-16">
              <h2 className="font-serif text-3xl font-bold mb-8 pb-2 border-b border-border">
                Contact
              </h2>
              <div className="py-12 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">iedc@cusat.ac.in</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    IEDC CUSAT<br />
                    Cochin University of Science and Technology<br />
                    Kochi, Kerala, India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <LatestUpdates />
        </div>
      </main>
    </div>
  );
};

export default Index;
