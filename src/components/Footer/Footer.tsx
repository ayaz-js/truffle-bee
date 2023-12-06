import { FooterLogo, Line } from "../Icons";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="pt-[300px] sm:pt-[375px] pb-8">
      <Line className="w-full" />
      <FooterLogo className="w-full mx-auto mt-4" />
      <p className="text-center mt-4">
        &copy; {new Date().getFullYear()} Truffle Bee Official Online Boutique
      </p>
    </footer>
  );
};
