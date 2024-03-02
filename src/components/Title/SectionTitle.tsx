import ScrollAnimation from 'react-animate-on-scroll';

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut">
      <h2>{text}</h2>
    </ScrollAnimation>
  );
};
