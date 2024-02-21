"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>
            <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/cuet-ug">CUET (UG)</HoveredLink>
                <HoveredLink href="/maths-xi-xii">Mathematics (XI-XII)</HoveredLink>
                <HoveredLink href="/nda">NDA (Maths)</HoveredLink>
                <HoveredLink href="/net-paper-i">NET Paper-I</HoveredLink>
                <HoveredLink href="/net-education">NET (Education)</HoveredLink>
            </div>
            </MenuItem>
            </Link>
            <Link href={"/phd-guidance"}>
            <MenuItem setActive={setActive} active={active} item="Ph.D Guidance">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/complete-thesis-guidance">Complete Thesis Guidance</HoveredLink>
                <HoveredLink href="/research-paper-guidance">Research Paper Guidance</HoveredLink>
                <HoveredLink href="/research-paper-publish-guidance">Research Paper Publish Guidance</HoveredLink></div>
            </MenuItem>
            </Link>
            <Link href={"/guidance-and-counseling"}>
            <MenuItem setActive={setActive} active={active} item="Guidance & Counseling">
            </MenuItem>
            </Link>
            <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About">
            </MenuItem>
            </Link>
            <Link href={"/contact-us"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar