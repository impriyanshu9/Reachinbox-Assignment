"use client";

import { RiArrowDownSLine } from "@remixicon/react";
import { Switch } from "@/components/ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { RootState } from '@/redux/store/store';

export function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    // Toggle theme handler
    const handleThemeToggle = (checked: boolean) => {
        dispatch(toggleTheme());
    };

    return (
        <nav className="flex items-center justify-between h-16 text-[#454F5B] dark:text-white border-b-[1px] border-[#DEDEDE] dark:border-[#343A40] px-6 dark:bg-[#1F1F1F]">
            <div>
                <h1 className="font-bold">Onebox</h1>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                <Switch
                        checked={theme === "dark"}
                        onCheckedChange={(checked) => handleThemeToggle(checked)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-sm font-semibold">Tim's Workspace</p>
                    <RiArrowDownSLine size={16}/>
                </div>
            </div>
        </nav>
    );
}