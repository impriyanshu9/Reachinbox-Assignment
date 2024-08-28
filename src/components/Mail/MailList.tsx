"use client";

import { RiArrowDownSLine, RiRefreshLine, RiSearchLine } from "@remixicon/react";
import { MailCard } from "./MailCard";
import { useState, useEffect } from "react";
import { Mail } from "@/utils/types";
import { api } from "@/utils/api";

export function MailList() {
    const [mails, setMails] = useState<Mail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);
    
    useEffect(() => {
        async function fetchMails() {
            try {
                const response = await api.get("/onebox/list");
                const fetchedMails = response.data.data;
                setMails(fetchedMails);
                localStorage.setItem("mails", JSON.stringify(fetchedMails));
            } catch(error) {
                setError("Failed to fetch emails");
                console.error("Fetch email error: ", error);
            } finally {
                setLoading(false);
            }
        }

        const savedMails = localStorage.getItem('mails');
        if (savedMails) {
            setMails(JSON.parse(savedMails));
            setLoading(false);
        } else {
            fetchMails();
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="space-y-3 m-auto">
            <section className="flex justify-between">
                <div className="space-y-1">
                    <div className="flex items-center text-[#4285F4]">
                        <h1 className="font-bold text-xl">All Inbox(s)</h1>
                        <RiArrowDownSLine size={24}/>
                    </div>
                    <div>
                        <p className="text-[#343A40] dark:text-white font-bold text-sm">25/25 <span className="text-[#7F7F7F] dark:text-[#7F7F7F] font-normal">Inboxes Selected</span></p>
                    </div>
                </div>    
                
                <div>
                    <div className="w-8 h-8 flex items-center justify-center dark:bg-[#25262B] border-[1px] border-[#DFE3E8] dark:border-0 rounded-md">
                        <RiRefreshLine size={16} className="dark:text-[#F6F6F6]"/>
                    </div>
                </div>
            </section>

            <section className="space-y-2.5 border-b-[1px] dark:border-white/20 pb-3">
                {/* Search */}
                <div className="flex items-center gap-1 bg-[#F4F6F8] dark:bg-[#23272C] border-[1px] border-[#DFE3E8] dark:border-[#DFE3E8]/10 rounded-md p-py px-1.5">
                    <RiSearchLine size={18} className="dark:text-white/20"/>
                    <input type="search" placeholder="Search" className="w-full outline-none bg-[#F4F6F8] dark:bg-[#23272C] rounded-md  placeholder:text-[#ADBAC7] dark:placeholder:text-white/20 placeholder:text-sm" />
                </div>

                {/* Filter */}
                <div className="flex items-center justify-between text-[#172B4D] font-semibold text-sm">
                    <div className="flex items-center gap-1">
                        <p className="p-py px-1.5 rounded-full bg-[#ECECEC] dark:bg-[#222426] text-[#5C7CFA]">26</p>
                        <p className=" dark:text-[#E6E6E6]">New Replies</p>
                    </div>
                    <div className="flex items-center gap-2 dark:text-[#E6E6E6]">
                        <p>Newest</p>
                        <RiArrowDownSLine size={16}/>
                    </div>
                </div>
            </section>
            
            <section className="space-y-4">
                {mails.length > 0 ? (
                    mails.map((mail, index) => (
                        <MailCard
                            key={index}
                            fromEmail={mail.fromEmail}
                            subject={mail.subject}
                            sentAt={mail.sentAt}
                        />
                    ))
                ) : (
                    <p>No mails found!</p>
                )}
            </section>
        </div>
    );
}