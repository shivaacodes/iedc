const Team = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl  mb-8 pb-2 border-b border-border">
        CORE TEAM
      </h2>
      <div className="flex flex-col items-center py-12">
        {/* Lead Team Members */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-muted rounded-full mb-4 flex items-center justify-center">
              <span className="text-muted-foreground text-base">Ashwin</span>
            </div>
            <h4 className="font-semibold text-xl">Ashwin</h4>
            <p className="text-base text-muted-foreground">Lead</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-muted rounded-full mb-4 flex items-center justify-center">
              <span className="text-muted-foreground text-base">Anjana </span>
            </div>
            <h4 className="font-semibold text-xl">Anjana</h4>
            <p className="text-base text-muted-foreground">Co-Lead</p>
          </div>
        </div>

        {/* Core Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {[1, 2, 3, 4, 5, 6, 7,8].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-36 h-36 bg-muted rounded-full mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Photo</span>
              </div>
              <h4 className="font-semibold text-lg">Team Member {i}</h4>
              <p className="text-base text-muted-foreground">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
