import React from 'react';

const SideNavIconic = () => {
    return (
        <div className={`h-screen border-r border-gray-200`}>
            <div className={`flex flex-col gap-6`}>
                <div>logo</div>
                <div>
                    <div>
                        misc
                    </div>
                    <div>
                        user
                    </div>
                    <div>
                        home
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavIconic;