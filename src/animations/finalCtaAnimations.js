// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export const animateFinalCta = (sectionRef, refs) => {
//   const { headerRef, servicesRef, buttonsRef, bannerRef } = refs;

//   // 1. Header entrance 
//   if (headerRef && headerRef.current) {
//     gsap.fromTo(
//       headerRef.current,
//       { y: 50, opacity:0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.9,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: headerRef.current,
//           start: 'top 82%',
//         },
//       }
//     );
//   }

//   // 2. Service Offers entrance
//   if (servicesRef && servicesRef.current) {
//     gsap.fromTo(
//       servicesRef.current,
//       { y: 60, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.9,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: servicesRef.current,
//           start: 'top 85%',
//         },
//       }
//     );
//   }

//   // 3. CTA Buttons entrance
//   if (buttonsRef && buttonsRef.current) {
//     gsap.fromTo(
//       buttonsRef.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: buttonsRef.current,
//           start: 'top 88%',
//         },
//       }
//     );
//   }

//   // 4. Image Banner 
//   if (bannerRef && bannerRef.current) {
//     gsap.fromTo(
//       bannerRef.current,
//       { y: 60, opacity: 0, scale: 0.96 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 1.0,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: bannerRef.current,
//           start: 'top 85%',
//         },
//       }
//     );
//   }
// };
