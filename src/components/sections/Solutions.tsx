import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export default function Solutions() {
  return (
    <div
      className='w-full h-150 flex flex-col lg:flex-row justify-center items-center 
    bg-gradient-to-b from-white to-[rgb(241,233,254)]'
    >
      <Container className='flex flex-col lg:flex-row-reverse justify-center items-center gap-6'>
        <div className='relative w-3/4'>
          <video
            className='rounded-lg'
            src='https://framerusercontent.com/assets/lq7KBe6ecDC74v3X9FiVQF8PXs.mp4'
            autoPlay
            loop
            muted
          ></video>
          <a
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white h-12 w-12 flex items-center justify-center rounded-lg'
            href='www.youtube.com'
          >
            <svg
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke='#CCCCCC'
                stroke-width='0.096'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {" "}
                <path
                  d='M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z'
                  stroke='#000000'
                  stroke-width='2'
                  stroke-linejoin='round'
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        <div className='flex flex-col gap-6'>
          <Title>شريكك الاستراتيجي نحو الاستثمار الذكي</Title>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <div className='bg-white p-2 w-8 h-8 flex items-center justify-center rounded-lg'>
                <svg
                  viewBox='0 -0.5 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M5.5 12.5L10.167 17L19.5 8'
                      stroke='#000000'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <Paragraph>حلول متكاملة لتسهيل أعمالك الاستثمارية</Paragraph>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-white p-2 w-8 h-8 flex items-center justify-center rounded-lg'>
                <svg
                  viewBox='0 -0.5 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M5.5 12.5L10.167 17L19.5 8'
                      stroke='#000000'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <Paragraph>دعم احترافي لعكس هوية أعمالك بوضوح واحتراف</Paragraph>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-white p-2 w-8 h-8 flex items-center justify-center rounded-lg'>
                <svg
                  viewBox='0 -0.5 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M5.5 12.5L10.167 17L19.5 8'
                      stroke='#000000'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <Paragraph> استراتيجيات مثبتة لتحقيق أعلى النتائج</Paragraph>
            </div>
          </div>
          <Button className='w-fit'>استكشف المزيد</Button>
        </div>
      </Container>
    </div>
  );
}
