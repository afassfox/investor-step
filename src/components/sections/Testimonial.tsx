import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export default function Testimonial() {
  return (
    <>
      <Container className='flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center py-30 gap-6 w-[90%] text-center'>
          <div className='h-10 w-10'>
            <svg
              fill='#000000'
              viewBox='0 0 256 256'
              id='Flat'
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
                <path d='M100,60H40A12.01375,12.01375,0,0,0,28,72v64a12.01375,12.01375,0,0,0,12,12h64v12a36.04061,36.04061,0,0,1-36,36,4,4,0,0,0,0,8,44.04978,44.04978,0,0,0,44-44V72A12.01375,12.01375,0,0,0,100,60Zm4,80H40a4.00458,4.00458,0,0,1-4-4V72a4.00458,4.00458,0,0,1,4-4h60a4.00458,4.00458,0,0,1,4,4ZM216,60H156a12.01375,12.01375,0,0,0-12,12v64a12.01375,12.01375,0,0,0,12,12h64v12a36.04061,36.04061,0,0,1-36,36,4,4,0,0,0,0,8,44.04978,44.04978,0,0,0,44-44V72A12.01375,12.01375,0,0,0,216,60Zm4,80H156a4.00458,4.00458,0,0,1-4-4V72a4.00458,4.00458,0,0,1,4-4h60a4.00458,4.00458,0,0,1,4,4Z'></path>{" "}
              </g>
            </svg>
          </div>
          <Title>
            التعامل مع Investor Step أحدث نقلة نوعية في أعمالنا الاستثمارية!
          </Title>
          <Paragraph className='text-center'>
            الاحترافية العالية وسرعة الإنجاز في إنهاء المعاملات الحكومية
            والخدمات اللوجستية وفرت علينا الكثير من الوقت والجهد. الفريق ملمّ
            بالتفاصيل ويقدّم دعمًا استثنائيًا في كل خطوة. أنصح أي مستثمر جاد
            بالتعاون معهم!
          </Paragraph>
          <div className='flex flex-col items-center gap-2'>
            <img
              className='rounded-full w-16 h-16 grayscale'
              src='/assets/client1.jpg'
              alt='client1'
            />
            <h3 className='text-heading-1 font-bold'>سعود العتيبي</h3>
            <p className='text-heading-1'>
              رائد أعمال ومستثمر في القطاع العقاري
            </p>
            <p className='text-heading-1 font-bold tracking-widest '>
              ★ ★ ★ ★ ★
            </p>
          </div>
        </div>
      </Container>
      <div className='w-full h-[1px] bg-gray-200'></div>
    </>
  );
}
