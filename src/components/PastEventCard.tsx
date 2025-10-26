interface PastEventCardProps {
  title: string;
  description: string;
  imagePlaceholder?: string;
}

const PastEventCard = ({ title, description, imagePlaceholder }: PastEventCardProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-serif text-2xl font-bold mb-4">{title}</h4>
      <p className="mb-6 leading-relaxed text-sm">{description}</p>
      <div className="bg-muted aspect-[3/4] flex items-center justify-center">
        <span className="text-muted-foreground text-sm">
          {imagePlaceholder || "Event Poster"}
        </span>
      </div>
    </div>
  );
};

export default PastEventCard;
