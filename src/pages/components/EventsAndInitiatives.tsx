import EventCard from "@/components/EventCard";
import PastEventCard from "@/components/PastEventCard";

const EventsAndInitiatives = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-8 pb-2 border-b border-border">
        EVENTS & INITIATIVES
      </h2>
      
      <h3 className="font-serif text-2xl text-center mb-8 pb-2 border-b border-border">
        UPCOMING EVENTS
      </h3>
      
      <div className="space-y-6">
        <EventCard
          title="FOUNDER NEXT DOOR"
          description="Alright, y'all. Founder Next Door is here!!!! ✨

If you've ever said 'I wanna start something' or you're just 
unhinged enough to try...
this is literally your chance. 💯

Wanna know what the program's all about? 👀"
          linkText="Check it out here"
          linkUrl="#"
          registerText="Register here"
          registerUrl="#"
          footer="Come as you are; leave as a founder."
          imageUrl="/founder-next-door-2.jpeg"
        />
      </div>

      <h3 className="font-serif text-2xl text-center mt-16 mb-8 pb-2 border-b border-border">
        PAST EVENTS
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="px-4">
          <PastEventCard
            title="Makeaton 7.0"
            description="CITTIC CUSAT proudly hosted MAKE-A-TON 7.0 - powered by Eduport! The event brought together innovators and coders for Kerala's most exciting hackathon, complete with MLH. With a special track on 'Best Use of Conductor' sponsored by Orkes, along with other exciting tracks by Eduport, GoDaddy, Aarbit, Stremlit, Cloudflare and more, participants competed for prizes worth over 7 lakh in cash and 8 track prizes."
            imageUrl="/Makeaton (1).jpg"
          />
        </div>
        <div className="px-4">
          <PastEventCard
            title="Innovate and Elevate"
            description="Innovate & Elevate: Empowering Entrepreneurs. Gain insider insights, guidance from experts, and network with peers. Don’t miss this opportunity to kickstart your entrepreneurial journey!

Join interactive workshops, hands-on mentoring sessions, and panel discussions with industry leaders. Discover strategies to turn ideas into impact, build scalable ventures, and navigate challenges with confidence."
            imageUrl="/innovate-and-elevate.jpeg"
          />
        </div>
        <div className="px-4">
          <PastEventCard
            title="Redbull Basement"
            description="Red Bull Basement, powered by Make-a-Ton 7.0 — where bold ideas meet real-world innovation. Level up your creativity and turn sparks into solutions that make an impact!

Got that wild concept buzzing like a rogue WiFi signal? It’s time to take it global with Red Bull Basement. Collaborate with fellow innovators, tackle real challenges, and gain access to mentorship from industry experts.

Dream it. Build it. Launch it."
            imageUrl="/redbull-basement.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsAndInitiatives;
