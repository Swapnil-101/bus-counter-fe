import React, { useEffect, useState } from 'react';
import Header from "./components/Application/Header";
import Gallery from "./components/MainApplication.tsx/Gallery";
import StatsContainer from "./components/MainApplication.tsx/StatsContainer";
import axios from 'axios';

const MainApplication = () => {
    const [frames, setFrames] = useState([]);
    const [mainPage, setMainPage] = useState<any>(1);

    console.log("frame", frames)
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

    useEffect(() => {
        // Define the API endpoint with the current page
        const apiUrl = `http://3.6.112.225:8000/get_frames?page=${mainPage}`;

        // Make the API call
        axios.get(apiUrl)
            .then(response => {
                // Update the frames state with the response data
                setFrames(response.data);

                // You might want to update other states or perform additional logic based on the API response
            })
            .catch(error => {
                console.error('API Error:', error);
                // Handle error as needed
            });

    }, [mainPage]); // Trigger the effect whenever the currentPage changes

    useEffect(() => {
        // Define the API endpoint with the current page
        const apiUrl = `http://3.6.112.225:8000/get_frames`;

        // Make the API call
        axios.get(apiUrl)
            .then(response => {
                // Update the frames state with the response data
                // setFrames(response.data);
                console.log(response)

                // You might want to update other states or perform additional logic based on the API response
            })
            .catch(error => {
                console.error('API Error:', error);
                // Handle error as needed
            });

    }, [mainPage]);


    return (
        <main className='mx-[8rem]'>
            <Header />
            <div className="flex flex-col gap-[4rem] mx-[3.4rem]">
                <StatsContainer />
                <Gallery frames={frames} setMainPage={setMainPage} />
            
            </div>
        </main>
    );
};

export default MainApplication;
