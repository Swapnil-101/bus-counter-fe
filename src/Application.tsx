import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileUploader from './components/Application/FileUploader';
import FormManual from './components/Application/FormManual';
import Header from './components/Application/Header';
import Footer from './components/Footer';
import ErrorAlert from './components/Alert/ErrorAlert';

const Application = () => {
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [passengerCountAvailable, setPassengerCountAvailable] = useState(false);
    const [dataAvailable, setDataAvailable] = useState(false);
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const [passengerCount, setPassengerCount] = useState<number | ''>(''); // State for the number of passengers
    const [showLoader, setShowLoader] = useState(false);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Check if passengerCount is available in localStorage
        const storedTotalPassengers = localStorage.getItem('passengerCount');

        setPassengerCountAvailable(!!storedTotalPassengers);
    }, []);

    const datafile = selectedFile?.name;
    localStorage.setItem('video_name', datafile);
    // localStorage.setItem('video_name', selectedFile.name);




    const handleLoadButtonClick = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('video', selectedFile);
            formData.append('video_name', selectedFile.name);

            try {
                // Set loading to true before making the API call
                setLoading(true);

                // Simulating an API error (replace this condition with your own)
                if (selectedFile.name === 'simulate_error.mp4') {
                    throw new Error('Simulated API error: Video name is invalid.');
                }

                const response = await axios.post('http://3.6.112.225:8000/video_feed', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                // Handle the API response
                console.log('API Response:', response.data);
                localStorage.setItem('video_response', JSON.stringify(response.data));

                setDataAvailable(true); // Set the state variable indicating data availability
                setShowLoader(true);

                setTimeout(() => {
                    setShowLoader(false);
                    window.location.href = "#/app-main";
                    // Add logic to handle the response as needed
                }, 7000);

            } catch (error: any) {
                console.error('API Error:', error);
                setError(error);
                setTimeout(() => {
                    setError(null);
                }, 3000);
                // Handle error as needed

            } finally {
                // Set loading back to false after the API call is complete (whether it succeeded or failed)
                setLoading(false);
            }
        }
    };


    // const closeErrorAlert = () => {
    //     setError(null);
    // };

    return (
        <main className='mx-[8rem]'>
            <Header />
            <div className='flex justify-end'>
                {error && <ErrorAlert message={"asda"} />}
            </div>
            <div className='flex  mt-[4rem]'>
                <div className='flex justify-between items-center gap-[2rem] flex-wrap '>
                    <div className='mt-[3.5rem]'>
                        <div>
                            <h1 className="text-[1.8rem] text-[#000] font-semibold font-roboto mb-4 ">Upload Your Video</h1>
                            <h1 className="text-[1rem] text-[#000] font-semibold font-roboto mb-4 ">Upload video and enter the number of passengers</h1>


                            <FileUploader setSelectedFile={setSelectedFile} setPreviewSrc={setPreviewSrc} previewSrc={previewSrc} />
                        </div>
                        <div className="flex justify-start mt-2 gap-4">
                            <button
                                className={`px-6 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform ${passengerCount && selectedFile && previewSrc
                                    ? 'px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                                    : 'bg-gray-400 cursor-not-allowed'
                                    } rounded-lg focus:outline-none`}
                                onClick={handleLoadButtonClick}
                                disabled={!passengerCountAvailable || loading || dataAvailable}
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
                                        <span className="ml-2">Loading...</span>
                                    </div>
                                ) : dataAvailable ? (
                                    'Loaded!'
                                ) : (
                                    'Load'
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('passengerCount');
                                    setSelectedFile(null);
                                    setPreviewSrc(null);
                                    setPassengerCount('');
                                }}
                                className="px-4 py-2 w-[6rem] text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    <div className='mt-[6.5rem]'>
                        <FormManual passengerCount={passengerCount} setPassengerCount={setPassengerCount} />
                    </div>
                </div>
            </div>

            {showLoader && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-white">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-white"></div>
                </div>
            )}

            <Footer />
        </main>
    );
}

export default Application;
