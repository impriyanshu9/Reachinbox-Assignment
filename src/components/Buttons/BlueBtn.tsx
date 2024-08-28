"use client";

import { RiReplyFill } from "@remixicon/react";
import { toggleIsOpen } from '@/redux/features/editor/isOpen';
import { RootState } from '@/redux/store/store';
import { useDispatch, useSelector } from 'react-redux';

export function BlueBtn() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state:RootState) => state.isOpen.value);
    
    
    const handleVisibility = () => {
        dispatch(toggleIsOpen());
    }
    

    return (
        <button
            onClick={handleVisibility} 
            className="flex items-center justify-center gap-2 text-white font-semibold text-sm bg-[#4B63DD] py-3 px-4 rounded mx-5">
            
            <RiReplyFill size={24} />
            Reply
        </button>
    );
}