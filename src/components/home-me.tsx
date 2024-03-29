export default function HomeMe() {
  return (
    <div className="group relative h-full">
      <div className="relative py-20 pl-6">
        <p className="break-words text-lg">Hi, I'm</p>
        <h1 className="break-words text-6xl font-bold">Hoang Duy Dang.</h1>
        <div className="h-16"></div>
        <p className="break-words text-2xl md:w-[calc(50%-1.5rem)]">
          Software engineer
          <br />
          <span className="text-slate-300">Full-stack developer</span>
        </p>
      </div>
      <div className="absolute bottom-4 right-4 text-xl font-medium text-transparent transition-all group-hover:-translate-x-4 group-hover:text-slate-50 md:right-[calc(50%+1rem)]">
        Email me &gt;
      </div>
    </div>
  );
}
