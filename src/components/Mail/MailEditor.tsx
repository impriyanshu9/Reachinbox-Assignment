"use client";

import { RiArrowDownSFill, RiBold, RiCloseFill, RiItalic } from "@remixicon/react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleBold } from '@/redux/features/editor/bold';
import { toggleItalic } from '@/redux/features/editor/italic';
import { toggleIsOpen } from '@/redux/features/editor/isOpen';
import { RootState } from '@/redux/store/store';

export function MailEditor() {
    const dispatch = useDispatch();
    const isBold = useSelector((state:RootState) => state.bold.value);  
    const isItalic = useSelector((state:RootState) => state.italic.value);  
    const isOpen = useSelector((state:RootState) => state.isOpen.value);  

    const handleBoldClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(toggleBold());
    };

    const handleItalicClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(toggleItalic());
    };

    const handleIsOpenClick = () => {
        dispatch(toggleIsOpen());
    };

    if(!isOpen) {
        return null;
    }

    return (
        <form className="w-full mx-5 border-[1px] border-[#DEDEDE] dark:border-[#4A5055] bg-[#FAFAFA] dark:bg-[#141517] py-3 px-4 rounded-lg">
            <section className="flex justify-between items-center">
                <h2>Reply</h2>
                <RiCloseFill  onClick={handleIsOpenClick} size={24} className="bg-[#d0a6a6] p-1 rounded-full"/>
            </section>
            <section>
                <div className="py-3 border-b-[1px] border-[#DEDEDE] dark:border-[#34383D] flex items-center gap-2">
                    <label htmlFor="receiver" className="text-xs dark:text-[#BAB9BD]">To:</label>
                    <input id="receiver" type="text" className="w-full bg-[#FAFAFA] dark:bg-[#141517] outline-none" />
                </div>
                <div className="py-3 border-b-[1px] border-[#DEDEDE] dark:border-[#34383D] flex items-center gap-2">
                    <label htmlFor="sender" className="text-xs dark:text-[#BAB9BD]">From:</label>
                    <input type="text" id="sender" className="w-full bg-[#FAFAFA] dark:bg-[#141517] outline-none" />
                </div>
                <div className="py-3 border-b-[1px] border-[#DEDEDE] dark:border-[#34383D] flex items-center gap-2">
                    <label htmlFor="subject" className="text-xs dark:text-[#BAB9BD]">Subject:</label>
                    <input type="text" id="subject" className="w-full bg-[#FAFAFA] dark:bg-[#141517] outline-none" />
                </div>
            </section>

            <section>
                <textarea className={`w-full bg-[#FAFAFA] dark:bg-[#141517] outline-none h-64 p-4 ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : 'not-italic'}`}
                    placeholder="Write your email here...">
                </textarea>
            </section>

            <section className="flex items-center gap-5 border-[#DEDEDE] dark:border-[#2E3236]">
                <button className="flex items-center justify-center gap-2 text-white font-semibold text-sm bg-[#4B63DD] py-3 px-4 rounded">
                    Send
                    <RiArrowDownSFill size={24} />
                </button>
                <button
                    className="flex items-center justify-center w-7 h-7  text-[#919EAB] hover:text-[#595A5B] hover:bg-[#E9EAEB] rounded"
                    onClick={handleBoldClick}    
                >
                    <RiBold size={24}/>
                </button>
                <button
                    className="flex items-center justify-center w-7 h-7  text-[#919EAB] hover:text-[#595A5B] hover:bg-[#E9EAEB] rounded"
                    onClick={handleItalicClick}
                >
                    <RiItalic size={24}/>
                </button>
            </section>
        </form>
    );
}