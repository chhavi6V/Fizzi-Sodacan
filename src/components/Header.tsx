import {FizziLogo}  from "@/components/FizziLogo";

export function Header() {
    return (
        <header className="-mb-28 w-auto flex justify-center ">
            <FizziLogo className="z-10 h-28 cursor-pointer text-sky-800" />
        </header>
    );
}