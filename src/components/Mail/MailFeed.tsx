export function MailFeed() {
    return (
        <section className="text-sm text-[#637381] dark:text-[#AEAEAE] border-[1px] border-[#DEDEDE] dark:border-[#343A40] bg-[#FAFAFA] dark:bg-[#141517] py-3 px-4 space-y-4 rounded-md mx-5 ">
            <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold text-black dark:text-white">New Product Launch</h2>
                <p className="dark:text-[#7F7F7F]">20 june 2022 : 9:16AM</p>
            </div>
            <div>
                <p>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
            </div>
            <div>
                <p>to : lennon.j@mail.com</p>
            </div>
            <div>
                <p className="text-[#172B4D] dark:text-[#E1E0E0]">
                    Hi FIRST_NAME,<br /><br />

                    I would like to introduce you to SaaSgrow, a productized design service<br />
                    specifically tailored for saas startups. Our aim is to help you enhance the user<br />
                    experience and boost the visual appeal of your software products.<br />
                </p>
            </div>
        </section>
    );
}