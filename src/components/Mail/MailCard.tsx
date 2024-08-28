import { RiSendPlaneFill } from "@remixicon/react";
import Image from "next/image";
import { Mail } from "@/utils/types";

export function MailCard({ fromEmail, subject, sentAt }: Mail) {
    const dateObj = new Date(sentAt);

    const formattedDate = dateObj.toLocaleDateString('en', {
        month: 'short',
        day: 'numeric',
    }).split(' ').map((part, index) => index === 0 ? part.slice(0, 3) : part).join(' ');

    return (
        <div className="space-y-2 pb-4 border-b-[1px] dark:border-white/20">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-[#343A40] dark:text-white text-sm font-medium ">{fromEmail.length > 12 ? `${fromEmail.slice(0, 12)}...` : fromEmail}</h2>
                    <p className="text-[#172B4D] dark:text-[#E1E0E0] text-xs mt-1">{subject.length > 25 ? `${subject.slice(0, 25)}...` : subject}</p>
                </div>
                <div>
                    <p className="text-[#919EAB] dark:text-[#FCFCFC66]/40 text-xs">{formattedDate}</p>

                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex items-center justify-center gap-1 text-[##46C18D] bg-[#F0F0F0] dark:bg-[#222426] rounded-full py-1 px-2 font-medium text-[10px]">
                    <Image
                        src="/images/greentag.svg"
                        width={12}
                        height={12}
                        alt="Interested"
                    />
                    <span className="text-[#46C18D]">Interested</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[#637381] bg-[#F0F0F0] dark:bg-[#222426] rounded-full py-1 px-2  font-medium text-[10px]">
                    <RiSendPlaneFill size={12} />
                    <span className="dark:text-white">Campaign</span>
                </div>
            </div>
        </div>
    );
}