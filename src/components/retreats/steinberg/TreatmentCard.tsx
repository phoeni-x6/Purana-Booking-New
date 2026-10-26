type TreatmentCardProps = {
  name: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  bookingUrl?: string;
};

export default function TreatmentCard({
  name,
  category,
  duration,
  price,
  image,
  description,
  bookingUrl = "#contact",
}: TreatmentCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5DFC9] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C7CFB8] hover:shadow-xl hover:shadow-[#21452B]/[0.07]">
      {/* Treatment image */}
      <div className="relative aspect-[5/4] overflow-hidden bg-[#EAE5D5]">
        <img
          src={image}
          alt={`${name} Ayurvedic treatment`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#F8F5E8]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#21452B]">
          {category}
        </span>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#172F23]/35 to-transparent" />
      </div>

      {/* Treatment details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl leading-snug text-[#21452B] sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-[#6B705C]">
          {description}
        </p>

        {/* Duration and price */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EAE5D5] pt-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7A806C]">
              Duration
            </p>
            <p className="mt-1 text-sm text-[#52634F]">{duration}</p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7A806C]">
              From
            </p>
            <p className="mt-1 font-serif text-2xl text-[#21452B]">
              {price}
            </p>
          </div>
        </div>

        {/* Booking button */}
        <a
          href={bookingUrl}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#21452B] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2F5D39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC24D] focus-visible:ring-offset-2"
        >
          Book online
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
