import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { services } from "../data/services-data";
import Cards from "../elements/Cards";

export default function Services() {
  return (
    <Container>
      <div className='flex flex-col my-50'>
        <div className='flex flex-col sm:text-center text-right sm:flex-row justify-between items-center gap-6'>
          <Title>خدماتنا المميزة</Title>
          <Paragraph>
            نرافقك في كل خطوة من خطوات تأسيس وتطوير أعمالك في المملكة العربية
            السعودية
          </Paragraph>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-[800px] mt-10 '>
          {services.map((card, key) => (
            <Cards
              key={key}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
