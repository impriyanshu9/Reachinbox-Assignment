import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-screen bg-black">
            {/* Auth Navbar */}
            <nav className="flex items-center justify-center h-16 border-b-[1px] border-[#25262b]">
                <Image
                    src="/images/ribmark.svg"
                    width={156}
                    height={24}
                    alt="Reachinbox Icon"
                />
            </nav>

            <div className="flex-1">
                {children}
            </div>
            
            {/* Auth Footer */}
            <footer className="absolute w-full flex items-center justify-center bottom-0 h-8 border-t-[1px] border-[#25262b] bg-[#121212]">
                <p className="text-rib-700 text-xs">&copy; 2023 Reachinbox. All rights reserved.</p>
            </footer>
        </div>
    );
}