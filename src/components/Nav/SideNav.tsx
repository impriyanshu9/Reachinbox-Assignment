"use client";

import Image from "next/image";
import { RiHome5Fill, RiUserSearchFill, RiMailFill, RiSendPlaneFill, RiFileListFill, RiInbox2Fill, RiBarChartFill } from "@remixicon/react";
import { SideNavButton } from "./SideNavButton";
import { RootState } from '@/redux/store/store';
import { useSelector, useDispatch } from "react-redux";
import { openInbox } from "@/redux/features/theme/inboxLayoutSlice";

export function SideNav() {
    const dispatch = useDispatch();
    const icons = [RiHome5Fill, RiUserSearchFill, RiMailFill, RiSendPlaneFill, RiFileListFill, RiInbox2Fill, RiBarChartFill];
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleInboxClick = () => {
        dispatch(openInbox());
    }
    
    return (
        <nav className="h-screen flex flex-col items-center justify-between w-14 bg-[#FAFAFA] dark:bg-[#101113] border-r-[1px] border[#D8D8D8] dark:border-[#343A40]">
            <section className="h-[10%] flex items-center justify-center">
                <Image
                    src={theme === "dark" ? "/images/ribmarkwhite.svg" : "/images/ribicon.svg"}
                    width={32}
                    height={32}
                    alt="Reachinbox Icon"
                />
            </section>
            <section className="h-[80%] pt-8">
                <ul className="space-y-6    ">
                    {icons.map((IconComponent, index) => (  
                        <li key={index}>
                            <SideNavButton
                                SideNavIcon = {IconComponent}
                                onClick={IconComponent === RiInbox2Fill ? handleInboxClick : undefined}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="h-[10%] flex items-center justify-center">
                <Image  
                    src="/images/userdp.svg"
                    width={32}
                    height={32}
                    alt="Reachinbox Icon"
                />
            </section>
        </nav>
    );
}