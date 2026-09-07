import 'react';

const experiences = [
  { role: 'Freelance', company: 'GreenLeaf Co', year: '2021' },
  { role: 'UX/UI Designer', company: 'UrbanFit Studio', year: '2022' },
  { role: 'Product Designer', company: 'PixelCraft Studios', year: '2023' },
  { role: 'Graphic Designer', company: 'VistaWorks', year: '2024' },
];

const ExperienceList = () => {
  return (
    <div className="flex flex-col  my-3 py-1 w-full">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="w-full rounded-xl bg-black/50  px-4 py-6.5 flex items-center
           justify-between text-md md:text-xl  "
        >
          <div className="w-1/3 text-zinc-400 font-medium tracking-tight">
            {exp.role}
          </div>
          <div className="w-1/3 text-zinc-400 font-normal text-center">
            {exp.company}
          </div>
          <div className="w-1/3 text-zinc-500 font-mono text-right">
            {exp.year}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
