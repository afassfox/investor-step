import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { WhiteButton } from "../shared/WhiteButton";

export default function Hero() {
  return (
    <>
      <Container className='relative'>
        <div className='flex sm:flex-row flex-col py-10 mt-15 sm:py-20 sm:mt-30 w-full gap-2 animate-hero h-full'>
          <Title className='xl:text-5xl md:text-4xl text-3xl font-bold '>
            نرافقك في رحلتك الاستثمارية داخل السعودية
          </Title>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <img
                src='/assets/client1.jpg'
                alt='client1'
                className='rounded-full w-10 h-10 border-2 border-white relative -left-2 z-10'
              />
              <img
                src='/assets/client2.jpg'
                alt='client2'
                className='rounded-full w-10 h-10 border-2 border-white relative left-2 z-9'
              />
              <img
                src='/assets/client3.jpg'
                alt='client3'
                className='rounded-full w-10 h-10 border-2 border-white relative left-4 z-8'
              />
              <div className='mb-4'>
                <p className='text-heading-1 font-bold tracking-widest '>
                  ★ ★ ★ ★ ★
                </p>
                <p className='text-heading-1 font-bold text-sm'>
                  من أكثر من 600 عميل راضٍ
                </p>
              </div>
            </div>
            <div>
              <Paragraph>
                استفد من خبرتنا المتخصصة وحلولنا المتكاملة لتأسيس شركتك وإدارتها
                بكفاءة داخل المملكة.
              </Paragraph>
            </div>
            <div className='flex flex-row gap-4 mt-4'>
              <Button>استشارة مجانية</Button>
              <WhiteButton className='border-1 bg-white text-black cursor-pointer'>
                اكتشف خدماتنا
              </WhiteButton>
            </div>
          </div>
        </div>
        <div className='z-20 relative'>
          <img
            className='rounded-xl w-full h-[300px] sm:h-[396px] object-cover z-20 animate-img origin-bottom delay-[2s]'
            src='/assets/meeting.png'
            alt='Meeting'
          />
        </div>
        <hr className='w-full h-[1px] bg-gray-200' />
      </Container>
    </>
  );
}
