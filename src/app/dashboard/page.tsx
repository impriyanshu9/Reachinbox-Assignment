"use client";

import { MailList } from "@/components/Mail/MailList";
import { LeadInfo } from "@/components/Mail/LeadInfo"
import { MailHeader } from "@/components/Mail/MailHeader";
import { MailFeed } from "@/components/Mail/MailFeed";
import { BlueBtn } from "@/components/Buttons/BlueBtn";
import { MailEditor } from "@/components/Mail/MailEditor";
import { useDispatch } from  "react-redux";
import { toggleIsOpen } from "@/redux/features/editor/isOpen"
import { useEffect } from "react"

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'R' || event.key === 'r') {
                dispatch(toggleIsOpen());
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [dispatch]);

    return (
        <div className="flex justify-between">
            <section className="w-1/5 py-3 px-5 bg-[#FAFAFA] dark:bg-black border-[1px] border-[#E0E0E0] dark:border-[#33383F]" style={{ height: `calc(100vh - 4rem)` }}><MailList /></section>
            <section className="relative w-3/5 bg-[#F4F6F8] dark:bg-black border-[1px] border-[#E0E0E0] dark:border-[#33383F]" style={{ height: `calc(100vh - 4rem)` }}>
                <MailHeader />
                <div className="relative">
                    <hr className="my-5 dark:bg-[#F8FAFC]/20" />
                    <p className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 font-semibold text-[10px] rounded-sm  bg-[#EEF1F4] dark:bg-[#171819] ">Today</p>
                </div>
                <MailFeed />
                <div className="absolute bottom-4">
                    <BlueBtn />
                </div>
                <div className="absolute bottom-4 w-full z-20">
                    <MailEditor />
                </div>
            </section>
            <section className="w-1/5 py-3 px-1.5 bg-[#FAFAFA] dark:bg-black border-[1px] border-[#E0E0E0] dark:border-[#33383F]" style={{ height: `calc(100vh - 4rem)` }}><LeadInfo /></section>
        </div>
    );
}