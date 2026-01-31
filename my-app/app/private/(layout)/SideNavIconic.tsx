import React from 'react';
import { Icon } from "@iconify/react";

const SideNavIconic = () => {
    return (
        <div className={`h-screen w-14 border-l border-[#EDF3FB] py-5`}>
            <div className={`flex flex-col items-center justify-center gap-8`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={40} height={40} viewBox="0 0 24 24"><path fill="#3c87c7" d="m11.892 14.403l1.593 2.064l-4.635 3.127zM12 4.406L14.457 8.4L7.905 19.594H3zm0 8.79l3.276-2.393L21 19.593h-4.086z"></path></svg>
                </div>
                <div className={`flex flex-col items-center justify-center gap-4`}>
                    <div className={`hover:border-b border-[#EDF3FB] py-2 mt-2`}>
                        <Icon
                            color={`#000`}
                            className={`w-7 h-7 cursor-pointer rounded-sm hover:bg-[#FEF1F2]`}
                            icon="material-symbols-light:home-rounded" width="24" height="24" />
                    </div>
                    <div className={`hover:border-b border-[#EDF3FB] py-2`}>
                        <Icon
                            className={`w-7 h-7 cursor-pointer rounded-sm hover:bg-[#FEF1F2]`}

                            icon="material-symbols-light:user-attributes" width="24" height="24" />
                    </div>
                    <div className={`hover:border-b border-[#EDF3FB] py-2`}>
                        <Icon
                            className={`w-7 h-7 cursor-pointer rounded-sm hover:bg-[#FEF1F2]`}

                            icon="material-symbols-light:user-attributes" width="24" height="24" />
                    </div>
                    <div className={`hover:border-b border-[#EDF3FB] py-2`}>
                        <Icon
                            className={`w-7 h-7 cursor-pointer rounded-sm hover:bg-[#FEF1F2]`}

                            icon="material-symbols-light:user-attributes" width="24" height="24" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavIconic;