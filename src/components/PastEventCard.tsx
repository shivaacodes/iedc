interface PastEventCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePlaceholder?: string;
}

const PastEventCard = ({ title, description, imageUrl, imagePlaceholder }: PastEventCardProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-serif text-2xl font-bold mb-4">{title}</h4>
      <p className="mb-6 leading-relaxed text-base">{description}</p>
      <img src={imageUrl} alt={title} className="w-full h-auto" />
    </div>
  );
};

export default PastEventCard;
