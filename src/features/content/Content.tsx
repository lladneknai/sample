import { useAppSelector } from "../../hooks/useApp";
import HeroTextDeactivated from "./components/HeroTextDeactivated";
import HeroTextActivated from "./components/HeroTextActivated";

/**
 * Base app content.
 */
const Content = () => {
  const revealed = useAppSelector((state) => state.app.revealed);

  if (!revealed) {
    return <HeroTextDeactivated />;
  }

  return <HeroTextActivated />;
};

export default Content;
