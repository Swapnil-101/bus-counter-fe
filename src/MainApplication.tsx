import React, { useEffect } from 'react';
import Header from "./components/Application/Header";
import Gallery from "./components/MainApplication.tsx/Gallery";
import StatsContainer from "./components/MainApplication.tsx/StatsContainer";

const MainApplication = () => {
    useEffect(() => {
        // Clear local storage and navigate to root when the page is refreshed
        const handlePageRefresh = () => {
            // window.localStorage.clear();
            // window.location.href = '#/';
        };

        // Attach the event listener to the 'beforeunload' event
        window.addEventListener('beforeunload', handlePageRefresh);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handlePageRefresh);
        };
    }, []);

    return (
        <main className='mx-[8rem]'>
            <Header />
            <div className="flex flex-col gap-[4rem] mx-[3.4rem]">
                <StatsContainer />
                <Gallery />
            </div>
        </main>
    );
};

export default MainApplication;
