import  'react';

const row1 = ['Product Design', 'UX Design', 'UI Design', 'Framer'];
const row2 = ['Branding', 'Webflow'];

const SkillTags = () => {
  return (
    <div className="flex flex-col gap-5 my-8">
      <div className="flex items-center gap-2.5 flex-wrap">
        {row1.map((tag) => (
          <span
            key={tag}
            className="px-3 py-2 rounded-xl bg-black/50  text-md md:text-lg font-normal
             text-zinc-400  hover:text-whiter"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2.5 flex-wrap">
        {row2.map((tag) => (
          <span
            key={tag}
            className="px-3 py-2 rounded-xl bg-black/50  text-md md:text-lg font-normal
             text-zinc-400 hover:text-white "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillTags;
