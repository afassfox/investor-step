const logos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo1.png",
  "/assets/logo2.png",
];

const duplicatedLogos = [...logos, ...logos, ...logos];

export default function Logos() {
  return (
    <section className='relative w-full'>
      <div className='absolute left-0 w-full top-0 -translate-y-1/2 h-[360px] bg-purple z-10 overflow-hidden'>
        <div className='relative h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-14 flex flex-col justify-end'>
          <div className='relative w-full pb-4'>
            <div className='absolute left-0 bottom-0 w-16 h-10 bg-purple blur-md opacity-90 z-20' />
            <div className='absolute right-0 bottom-0 w-16 h-10 bg-purple blur-md opacity-90 z-20' />
            <div className='flex items-end gap-8 animate-scroll-2 whitespace-nowrap absolute left-0 bottom-10'>
              {duplicatedLogos.map((logo, index) => (
                <img
                  key={`scroll2-${index}`}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className='h-7 sm:h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity cursor-pointer duration-300'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='h-[180px]'></div>
    </section>
  );
}
