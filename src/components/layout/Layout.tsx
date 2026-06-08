import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "../ui/ScrollProgress";
import CursorGlow from "../ui/CursorGlow";
import ParticleBackground from "../ui/ParticleBackground";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
