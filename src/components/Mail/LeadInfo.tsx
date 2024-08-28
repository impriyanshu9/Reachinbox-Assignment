
// interface TableData {
//     row1: string;
//     row2: string;
//   }

import { RiMailLine, RiSendPlaneLine } from "@remixicon/react";

export function LeadInfo() {
    // const data: TableData[] = [
    //     { row1: "Name", row2: "Orlando" },
    //     { row1: "Contact No", row2: "+54-9062827869" },
    //     { row1: "Email ID", row2: "orlando@gmail.com" },
    //     { row1: "Linnkedin", row2: "linkedin.com/in/timvadde" },
    //     { row1: "Company Name", row2: "Reachinbox" },
    //   ];
    return (
        <div className="flex flex-col space-y-3 ">
            <section>
                <div className="bg-[#ECEFF3] dark:bg-[#23272C] py-1.5 px-2 rounded-md">
                    <h2 className="text-sm text-[#454F5B] dark:text-white font-semibold">Lead Deatils</h2>
                </div>
                {/* <div className="">
                    <table className="">
                        <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="">
                            <td className="px-3 py-1.5 whitespace-nowrap text-xs text-[#337381] w-40">
                                {item.row1}
                            </td>
                            <td className="px-6 py1.5 whitespace-nowrap text-sm text-black text-right w-40">
                                {item.row2}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div> */}

                <ul className="space-y-4 mt-5 py-2 px-2">
                    <li className="flex justify-between items-center">
                        <div className="text-xs text-[#637381] dark:text-white">Name</div>
                        <div className="text-sm text-black dark:text-[#B9B9B9]">Orlando</div>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="text-xs text-[#637381] dark:text-white">Contact No</div>
                        <div className="text-sm text-black dark:text-[#B9B9B9]">+54-9062827869</div>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="text-xs text-[#637381] dark:text-white">Email ID</div>
                        <div className="text-sm text-black dark:text-[#B9B9B9]">orlando@gmail.com</div>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="text-xs text-[#637381] dark:text-white">Linkedin</div>
                        <div className="text-sm text-black dark:text-[#B9B9B9]">linkedin.com/in/timvadde/</div>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="text-xs text-[#637381] dark:text-white">Company Name</div>
                        <div className="text-sm text-black dark:text-[#B9B9B9]">Reachinbox</div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </section>

            <section>
                <div className="bg-[#ECEFF3] dark:bg-[#23272C] py-1.5 px-2 rounded-md">
                    <h2 className="text-sm text-[#454F5B] dark:text-white font-semibold">Activities</h2>
                </div>

                <div className="px-4 py-3">
                    <div>
                        <h2 className="text-[#454F5B] dark:text-white font-semibold">Campaign Name</h2>
                        <div className="flex items-center text-[#454F5B] dark:text-white mt-5 text-xs font-semibold">
                            <p className="pr-2 border-r-2 border-[#DFE3E8]">1 <span className="font-normal">Step</span></p>
                            <p className="px-2">5 <span className="fon">Days in Sequence</span></p>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <li className="flex items-center gap-3 py-4">
                                <div>
                                    <RiMailLine size={32} className="p-1 dark:text-[#BFBFBF] bg-[#EEF1F4] dark:bg-[#23272C] border-2 border-[#DFE3E8] dark:border-[#41464B] rounded-full" />
                                </div>
                                <div>   
                                    <h3 className="text-sm font-semibold text-[#454F5B] dark:text-white">Step 1: Email</h3>
                                    <div className="text-[#637381] dark:text-[#B9B9B9] flex items-center gap-2 mt-1.5">
                                        <RiSendPlaneLine size={16} />
                                        <p className="text-xs">Sent <span>3rd, Feb</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>    
                    </div>
                </div>
            </section>  
        </div>
    );
}