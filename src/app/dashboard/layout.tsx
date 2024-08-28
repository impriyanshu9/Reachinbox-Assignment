"use client";

import { Navbar } from "@/components/Nav/Navbar";
import { SideNav } from "@/components/Nav/SideNav";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Image from "next/image";
import { RiInbox2Fill } from "@remixicon/react";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    const isOpen = useSelector((state: RootState) => state.inboxLayout.isOpen);
    const token = useSelector((state: RootState) => state.auth.token);
    
    return (
        <div className="flex">
            <section>
                <SideNav />
            </section>
            <section className="w-full">
                <Navbar />
                {isOpen ? children
                :
                <div className="flex items-center justify-center p-4 dark:bg-black" style={{ height: `calc(100vh - 4rem)` }}>
                    <div className="flex flex-col justify-center items-center space-y-8">
                        <Image
                            src="/images/mailimage.svg"
                            width={200}
                            height={200}
                            alt="Emails"
                        />
                        <h1 className="flex items-center justify-center font-bold text-2xl text-center">It’s the beginning of a legendary sales pipeline<br/>Click on <span><RiInbox2Fill size={48}/> </span></h1>
                        <p className="font-medium text-lg text-center dark:text-[#9E9E9E]">When you have inbound E-mails you’ll see them here</p>                               
                    </div>    
                </div>}
            </section>
        </div>
    );
}