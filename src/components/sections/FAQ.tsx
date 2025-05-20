import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

const faqData = [
  {
    question: "هل يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
  {
    question: "كيف يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
  {
    question: "هل يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
  {
    question: "هل يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
  {
    question: "هل يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
  {
    question: "هل يمكنني الحصول على معلومات أكثر تفصيلاً؟",
    answer:
      "نعم! يمكننا تقديم معلومات أكثر تفصيلاً عن خدماتنا، المدة الزمنية، والتكاليف.",
  },
];

const FAQ = () => {
  return (
    <section className='max-w-7xl mx-auto p-4 py-15'>
      <div className='flex flex-col md:flex-row justify-between gap-6 mb-12'>
        <Title>الأسئلة الشائعة</Title>
        <Paragraph>
          هل لديك استفسارات؟ نحن هنا للإجابة! تعرّف على أجوبة أبرز الأسئلة
          المتعلقة بخدماتنا، المدة الزمنية، والتكاليف.
        </Paragraph>
      </div>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b py-3 mb-10 '>
      <button
        className='flex justify-between w-full text-left text-lg font-medium text-heading-1 cursor-pointer items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <X
            className='sm:w-9 sm:h-9 w-6 h-6 transition-transform duration-500 bg-purple 
          text-white rounded-sm cursor-pointer'
          />
        ) : (
          <Plus
            className='sm:w-9 sm:h-9 w-6 h-6 transition-transform duration-500 bg-purple 
          text-white rounded-sm cursor-pointer'
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className='mt-2 text-gray-600'>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
