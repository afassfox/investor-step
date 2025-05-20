import { Container } from "../shared/Container";

export default function Motivation() {
  return (
    <Container>
      <section className='py-10 md:py-15'>
        <div className='flex justify-center relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-20 h-20 sm:w-30 sm:h-30 bg-body z-10 blur-2xl sm:blur-3xl opacity-70'></div>
          <div className='absolute top-0 right-0 w-20 h-20 sm:w-30 sm:h-30 bg-body z-10 blur-2xl sm:blur-3xl opacity-70'></div>

          <ul className='flex flex-col text-center gap-4 sm:gap-6 md:gap-8 py-10 sm:py-15 md:py-20'>
            <li className='font-semibold text-4xl sm:text-6xl md:text-8xl text-[#f1e9fe] transition-all duration-300'>
              تقدَّم
            </li>
            <li className='text-heading-1 font-semibold text-4xl sm:text-6xl md:text-8xl transition-all duration-300'>
              ازدهر
            </li>
            <li className='font-semibold text-4xl sm:text-6xl md:text-8xl text-[#f1e9fe] transition-all duration-300'>
              تطوّر
            </li>
            <li className='text-heading-1 font-semibold text-4xl sm:text-6xl md:text-8xl transition-all duration-300'>
              إنطلق
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
