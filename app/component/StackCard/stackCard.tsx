// demo.tsx
import React from 'react';
import Component from '@/component/StackCard/stacking-card';

const projects = [
  {
    title: 'Junction Li Photography',
    description:
      "At Junction Li Photography, I bring a lifelong passion for photography to each and every shoot. With a keen eye for detail and a talent for capturing the essence of life's fleeting moments, my work spans a variety of styles including documentary, landscapes, silhouettes, weddings, couples, and individual portraits.",
    link: '/assets/junctionli.png',
    color: '#fff',
    seeMoreLink:"https://www.junctionliphoto.com/"
  },
  {
    title: 'ME Permanent Aesthetics',
    description:
      "Created and managed a business website for branding and marketing, prioritizing SEO optimization and compelling content creation. The site has seen consistent growth in viewership.",
    link: '/assets/me.png',
    color: '#fff',
    seeMoreLink:"https://www.meaesthetics.ca/"
  },
  {
    title: 'MZS Beauty Salon',
    description:
      "I had the opportunity to design the official website for MZS, a beauty brand dedicated to personalized hairstyling and self-care. The project involved creating a user-friendly and visually appealing online presence that reflects MZS's core values of passion, innovation, and client trust.",
    link: '/assets/mzs.png',
    color: '#fff',
    seeMoreLink:"https://www.mzsbeautysalon.ca/"
  },
  {
    title: 'New Face Beauty Spa',
    description:
      "The final website project of the 2024 summer was successfully completed just a few days before the new semester. This time, the New Face Beauty Spa project differed from previous ones in that I placed the 'Special Offer' section directly in the booking process to help clients find the content they're interested in more easily. This change increased click-through rates and improved SEO within the website content. The interface is now clearer, more intuitive, and interactive.",
    link: '/assets/newface.png',
    color: '#fff',
    seeMoreLink:"https://www.newfacecalgary.ca/",
  },
  {
    title: 'Hey Beauty Medi Spa&Wellness',
    description:
      'Hey Beauty is a comprehensive online platform dedicated to providing top-notch beauty and wellness services. Our website serves as a central hub where clients can easily book appointments, explore a wide range of services, and stay updated on the latest beauty trends.',
    link: '/assets/heybeauty.png',
    color: '#fff',
    seeMoreLink:"https://www.heybeautymedispa.com/",
  },
    {
    title: 'Harmony the Musical',
    description:
      'As part of Harmony the Musical, I designed and developed a dedicated website to enhance its online presence and audience engagement. The website featured intuitive navigation, an event schedule, cast profiles, and ticketing information, delivering a seamless user experience. Beyond development, I collaborated closely with the production team to ensure the website aligned with the musical’s creative vision. This project allowed me to apply my web development expertise while contributing to the promotion of meaningful and inspiring theatrical production.',
    link: '/assets/harmony.png',
    color: '#fff',
    seeMoreLink:"https://harmonymusical.ca/",
  },
{
    title: 'Tattooff Laser Removal',
    description:
      'Tattooff is a modern, single-page platform designed for individuals seeking professional tattoo removal services.',
    link: '/assets/tattooff.png',
    color: '#fff',
    seeMoreLink:"tattooff.ca",
  },
  {
    title: 'Walk for Wing Kei 2025',
    description:
      'Rebuilt and maintained the Walk for Wing Kei website to support event promotion and donor engagement. Restructured the site for better usability and mobile responsiveness, and regularly updated activity content, event details, and sponsor information to ensure timely and accurate communication. The improved site structure and consistent updates contributed to increased web traffic and community participation.',
    link: '/assets/walkforwingkei.png',
    color: '#fff',
    seeMoreLink:"https://www.walkforwingkei.org/",
  },
];

function StackCard() {
  return (
    <Component projects={projects} />
  );
}

export { StackCard as StackCard };