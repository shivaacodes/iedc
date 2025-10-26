interface EventCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  registerText?: string;
  registerUrl?: string;
  footer?: string;
  imagePlaceholder?: boolean;
}

const EventCard = ({
  title,
  description,
  linkText,
  linkUrl,
  registerText,
  registerUrl,
  footer,
  imagePlaceholder = true,
}: EventCardProps) => {
  return (
    <div className="border border-border p-6 flex gap-6">
      <div className="flex-1">
        <p className="mb-4 leading-relaxed">{description}</p>
        {linkText && linkUrl && (
          <p className="mb-2">
            <a href={linkUrl} className="text-blue-600 underline hover:text-blue-800">
              {linkText}
            </a>
          </p>
        )}
        {registerText && registerUrl && (
          <>
            <p className="mb-2">Already SOLD? Register now:</p>
            <p className="mb-4">
              <a href={registerUrl} className="text-blue-600 underline hover:text-blue-800">
                {registerText}
              </a>
            </p>
          </>
        )}
        {footer && <p className="font-medium">{footer}</p>}
      </div>
      {imagePlaceholder && (
        <div className="w-48 flex-shrink-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Event Image</span>
        </div>
      )}
    </div>
  );
};

export default EventCard;
