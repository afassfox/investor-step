import { Container } from "../shared/Container";
import { WhiteButton } from "../shared/WhiteButton";
import handleScroll from "../shared/handleScroll";

export default function OurJourney() {
  const imgScale = handleScroll("our-journey-img");

  return (
    <Container>
      <div
        className='flex flex-col lg-flex-row gap-6 w-full bg-body max-sm:mt-340 mt-310 sm:mt-90 md:mt-80 
      lg:-mt-40 items-center rounded-lg px-2'
      >
        <div
          className='flex flex-col lg:flex-row gap-6 w-full bg-purple 
        justify-center lg:justify-center rounded-lg flex-nowrap h-min relative 
        items-center px-2 p-2 md:p-6 lg:p-12 mt-2'
        >
          <div className='flex flex-col gap-6 p-4'>
            <h2 className=' font-bold text-xl md:text-2xl text-white'>
              {" "}
              رحلة الابتكار والتميز التي تصنع إرثًا لا يُنسى في عالم الاستثمار
              والأعمال
            </h2>
            <p className='text-white text-sm md:text-lg '>
              {" "}
              نحن ندمج بين الإبداع والاستراتيجية لصياغة قصص علامات تجارية مؤثرة
              تصل إلى الجمهور، وتجذب الانتباه، وتترك أثرًا دائمًا.
            </p>
            <WhiteButton className='text-black w-full md:w-fit'>
              اكتشف رحلتنا
            </WhiteButton>
          </div>
          <div className='w-full h-full fit-content relative overflow-hidden rounded-lg'>
            <img
              id='our-journey-img'
              src='/assets/tree.png'
              alt='palm tree'
              className='w-full h-70 md:h-130 object-cover duration-500'
              style={{ transform: `scale(${imgScale})` }}
            />
          </div>
        </div>
        <div
          className='grid grid-cols-2 sm:grid-cols-4 gap-8 auto-rows-auto justify-center 
        place-items-center relative w-full font-semibold md:gap-12 lg:gap-16 py-5'
        >
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-2xl md:text-4xl'>95K+</p>
            <p className='text-sm md:text-lg'>استشارات مكتملة</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-2xl md:text-4xl'>200M+</p>
            <p className='text-sm md:text-lg'>إيرادات محققة</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-2xl md:text-4xl'>100%</p>
            <p className='text-sm md:text-lg'>رضا العملاء</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-2xl md:text-4xl'>5,000+</p>
            <p className='text-sm md:text-lg'>شراكات عالمية</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
