interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div
      className='flex flex-col text-center sm:text-right 
    sm:items-start items-center gap-4 justify-around h-full 
    shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)] rounded-8 px-10 py-15'
    >
      <div className='h-10 w-10'>{icon}</div>
      <h2 className='text-heading-1 font-semibold  text-2xl'>{title}</h2>
      <p className='text-heading-1 '>{description}</p>
      <button className='text-heading-1 cursor-pointer border-b-1 border-text-heading-1'>
        تفاصيل اكثر
      </button>
    </div>
  );
};
export default Card;
