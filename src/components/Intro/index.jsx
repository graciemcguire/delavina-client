import useIsMobile from "@/hooks/useIsMobile";
import DesktopIntro from "./DesktopIntro";
import MobileIntro from "./MobileIntro";

export default function Intro() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileIntro /> : <DesktopIntro />;
}
