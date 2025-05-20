import { Container } from "../shared/Container";

export default function Motivation() {
  return (
    <section className='py-15'>
      <Container>
        <div className=' justify-center relative'>
          <div className='absolute top-0 left-0 w-30 h-30 bg-body z-10 blur-3xl opacity-70'></div>
          <div className='absolute top-0 -right-10 w-30 h-30 bg-body z-10 blur-3xl opacity-70'></div>
          <ul className='flex flex-row justify-center gap-22'>
            <li className='font-semibold md:text-8xl text-4xl text-[#f1e9fe]'>
              تقدَّم
            </li>
            <li className='text-heading-1 font-semibold md:text-8xl text-4xl'>
              ازدهر
            </li>
            <li className='font-semibold md:text-8xl text-4xl text-[#f1e9fe]'>
              تطوّر
            </li>
            <li className='text-heading-1 font-semibold md:text-8xl text-4xl'>
              إنطلق
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
