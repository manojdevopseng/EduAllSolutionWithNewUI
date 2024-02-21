// import {Hero} from "@/components/Hero";
import MovingBorder from "@/components/MovingBorder";
// import { Button } from "@/components/ui/moving-border";
// import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <Hero /> */}
      <Link href={"/contact"}>
        <MovingBorder />
      </Link>
    </main>
  );
}
