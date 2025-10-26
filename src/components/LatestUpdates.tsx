const LatestUpdates = () => {
  return (
    <aside className="w-64 flex-shrink-0">
      <div className="border-l border-border pl-8">
        <h3 className="font-serif text-xl font-bold mb-6 pb-2 border-b border-border">
          LATEST UPDATES
        </h3>
        <div className="space-y-4">
          <div className="bg-muted p-4 aspect-square flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Event Poster</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LatestUpdates;
