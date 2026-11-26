export const HeroTitle = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl leading-none font-extrabold tracking-tight text-white md:text-6xl">
        Every list
        <br />
        <span className="text-brand">your way</span>.
      </h1>

      <p className="max-w-md text-base leading-relaxed text-zinc-300">
        Find any movie, show or anime, sort it into lists, and track what you
        have watched. Statuses, tags, sections, a board view and colours make
        each list look the way you want.
      </p>
    </div>
  );
};
