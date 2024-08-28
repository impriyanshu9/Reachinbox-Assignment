import { RiUserSearchFill } from "@remixicon/react";

interface SideNavButtonProps {
    SideNavIcon: React.ElementType;
    onClick?: () => void;
}

export function SideNavButton({ SideNavIcon, onClick }: SideNavButtonProps) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-center w-7 h-7  text-[#919EAB] dark:text-[#AEAEAE] hover:text-[#595A5B] hover:dark:text-white hover:bg-[#E9EAEB] hover:dark:bg-[#2F3030] rounded">
            <SideNavIcon
                size={20}
            />
        </div>
    );
}