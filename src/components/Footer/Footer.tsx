import { Line } from "../Icons";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="pt-[300px] sm:pt-[375px] pb-8">
      <Line className="w-full" />
      {/*<FooterLogo className="w-full mx-auto mt-4" />*/}
      <p className="flex flex-col text-center mt-4">
        &copy; {new Date().getFullYear()} Бутик Truffle Bee Алматы Шевченко 44А
        <a href="tel:+77070090029">+ 7 707 009 00 29</a>
      </p>
    </footer>
  );
};
