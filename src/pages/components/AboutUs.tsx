const AboutUs = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-8 pb-2 border-b border-border">
        ABOUT US
      </h2>
      <div className="space-y-6 text-lg">
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
  );
};

export default AboutUs;
