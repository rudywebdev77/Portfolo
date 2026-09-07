import "react";

const comparisonRows = [
  {
    positive: "Skilled Professional",
    positiveText:
      "Gain access to top-tier talent with years of experience, ensuring professional and polished results.",
    negative: "Amateur Designer",
    negativeText:
      "Lack of experience may result in design inconsistencies and unreliable outcomes.",
  },
  {
    positive: "Future-Ready Designs",
    positiveText:
      "Crafting modern, scalable designs that grow with your business and stay ahead of trends.",
    negative: "Outdated Concepts",
    negativeText:
      "Stale designs that don't reflect current trends or your evolving brand narrative.",
  },
  {
    positive: "Client-Centric Collaboration",
    positiveText:
      "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.",
    negative: "Detached Communication",
    negativeText:
      "Lack of collaboration and poor feedback loops can result in misaligned outcomes.",
  },
  {
    positive: "Timely Project Tracking",
    positiveText:
      "Stay informed with regular progress updates and timely deliverables",
    negative: "Unstructured & Unreliable Work",
    negativeText:
      "Inconsistent timelines and last-minute changes can compromise quality",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,1,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  );
}

function BullseyeIcon() {
  return (
    <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-white/70">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
    </span>
  );
}

function StaggeredParagraph({
  text,
  className = "",
  startDelay = 0,
  step = 0.08,
}) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block"
          style={{
            animation: `heroWordReveal 1.1s cubic-bezier(0.19,1,0.22,1) ${
              startDelay + index * step
            }s both`,
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

function StaggeredHeading({
  children,
  className = "",
  startDelay = 0,
  step = 0.22,
}) {
  const words = children.trim().split(/\s+/);
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <span
            className="inline-block"
            style={{
              animation: `heroWordReveal 1.4s cubic-bezier(0.16,1,0.3,1) ${
                startDelay + index * step
              }s both`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

function BenefitCard({ benefit, index }) {
  return (
    <div
      className="sticky top-[330px] w-full pb-[15px]"
      style={{ zIndex: 20 + index, top: `${330 + index * 15}px` }}
    >
      <div
        className="h-[230px] w-full overflow-hidden rounded-[20px] bg-[#111111]"
        style={{ boxShadow: "rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset" }}
      >
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="flex flex-1 flex-col items-start p-[40px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
              <CheckIcon />
            </div>
            <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white sm:text-[25px]">
              {benefit.positive}
            </h4>
            <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
              {benefit.positiveText}
            </p>
          </div>
          <div className="mx-6 h-px bg-white/10 md:my-[40px] md:mx-0 md:h-auto md:w-px" />
          <div className="flex flex-1 flex-col items-start p-[40px]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
              <XIcon />
            </div>
            <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white sm:text-[25px]">
              {benefit.negative}
            </h4>
            <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
              {benefit.negativeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBenefitCard({ benefit }) {
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-[#111111]">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-start p-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
            <CheckIcon />
          </div>
          <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white">
            {benefit.positive}
          </h4>
          <p className="mt-3 font-inter text-[15px] leading-[1.6] text-white/70">
            {benefit.positiveText}
          </p>
        </div>
        <div className="mx-6 h-px bg-white/10" />
        <div className="flex flex-col items-start p-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
            <XIcon />
          </div>
          <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white">
            {benefit.negative}
          </h4>
          <p className="mt-3 font-inter text-[15px] leading-[1.6] text-white/70">
            {benefit.negativeText}
          </p>
        </div>
      </div>
    </div>
  );
}

const WhyDesignPartnerSection = () => {
  return (
    <>
      <section
        id="why-me"
        className="hidden w-full bg-[#090909] md:block border border-white/10 border-b-0 rounded-[50px] lg:pb-[70px] sm:pb-[50px]"
      >
        <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
          <div
            className="sticky top-0 flex w-full flex-col items-center pb-[35px] pt-[70px] text-center md:pt-[105px] lg:pt-[110px]"
            style={{ zIndex: 10 }}
          >
            <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] text-white">
              <BullseyeIcon />
              <span>Why choose me</span>
            </div>
            <h2 className="mt-[22px] font-satoshi text-[40px] leading-[1.5] tracking-[-0.04em] text-white lg:text-[54px]">
              <StaggeredHeading
                startDelay={0.15}
                step={0.22}
                className="text-white"
              >
                Why me as
              </StaggeredHeading>{" "}
              <StaggeredHeading
                startDelay={0.65}
                step={0.25}
                className="text-[#FFFFFF99]"
              >
                Design Partner
              </StaggeredHeading>
            </h2>
            <StaggeredParagraph
              text="Why Partner with Me for the Design Excellence"
              startDelay={1.15}
              step={0.08}
              className="mt-5 max-w-full font-jakarta text-[15px] text-[#FFFFFF99] md:text-[16px]"
            />
          </div>
          <div className="relative w-full pb-[0px]">
            {comparisonRows.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="why-me-mobile"
        className="block w-full bg-[#090909] md:hidden border-t border-white/10"
      >
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 py-[70px]">
          <div className="flex w-full flex-col items-center text-center">
            <div className="inline-flex h-[38px] items-center gap-2 rounded-full border-t border-white/10 bg-[#0F0F0F] px-4 py-[6px] font-inter text-[15px] text-white">
              <BullseyeIcon />
              <span>Why choose me</span>
            </div>
            <h2 className="mt-[22px] font-satoshi text-[40px] leading-[1.25] tracking-[-0.04em] text-white">
              <StaggeredHeading
                startDelay={0.15}
                step={0.22}
                className="text-white"
              >
                Why me as
              </StaggeredHeading>{" "}
              <StaggeredHeading
                startDelay={0.65}
                step={0.25}
                className="text-[#FFFFFF99]"
              >
                Design Partner
              </StaggeredHeading>
            </h2>
            <StaggeredParagraph
              text="Why Partner with Me for the Design Excellence"
              startDelay={1.15}
              step={0.08}
              className="mt-5 max-w-full font-jakarta text-[15px] leading-[1.6] text-[#FFFFFF99]"
            />
          </div>
          <div className="mt-[40px] flex w-full flex-col gap-5">
            {comparisonRows.map((benefit, index) => (
              <MobileBenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDesignPartnerSection;
