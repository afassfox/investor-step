import { Container } from "../shared/Container";
import handleScroll from "../shared/handleScroll";

export default function OurTeam() {
  const imgScale = handleScroll("our-team");

  const teamMembers = [
    {
      id: "our-team",
      image: "../../../public/assets/team1.png",
      title: "مدير التصميم الإبداعي",
      name: "خالد السويلم",
    },
    {
      id: "our-team",
      image: "../../../public/assets/team2.png",
      title: "المدير التنفيذي للعمليات",
      name: "فهد القحطاني",
    },
    {
      id: "our-team",
      image: "../../../public/assets/team3.png",
      title: "رئيس مجلس الإدارة",
      name: "محمد أحمد محمد",
    },
    {
      id: "our-team",
      image: "../../../public/assets/team4.png",
      title: "المدير التقني",
      name: "محمد العتيبي",
    },
  ];

  const LinkedInArrow = () => (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          d='M17 17L7 7M7 7V16M7 7H16'
          stroke='#000000'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>{" "}
      </g>
    </svg>
  );

  return (
    <section className='bg-purple py-15'>
      <Container>
        <div>
          <div
            className='flex flex-col sm:text-center text-right 
          sm:flex-row justify-between items-center gap-6 mb-15'
          >
            <h2 className='text-white font-bold text-4xl'>
              روح الفريق تصنع الفرق
            </h2>
            <p className='text-white text-2xl'>
              نؤمن بأهمية العمل الجماعي، والإبداع، وتجاوز التحديات للوصول إلى
              التميز.
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className='flex flex-col items-center gap-6 bg-white rounded-xl pb-6'
              >
                <div className='w-full h-full fit-content relative overflow-hidden rounded-lg'>
                  <img
                    id='our-team'
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover rounded-t-xl duration-500'
                    style={{ transform: `scale(${imgScale})` }}
                  />
                </div>
                <p>{member.title}</p>
                <h2 className='text-2xl font-bold'>{member.name}</h2>
                <button className='btn'>
                  <p>لينكد ان</p>
                  <LinkedInArrow />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
