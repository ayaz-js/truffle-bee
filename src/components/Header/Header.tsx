import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Logo, MobileLogo } from "../Icons";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const matches = useMediaQuery("(min-width: 567px)");
  return (
    <header>
      <div className="pt-8">
        {matches ? (
          <Logo className="w-full" />
        ) : (
          <MobileLogo className="w-full" />
        )}
      </div>
    </header>
  );
};
