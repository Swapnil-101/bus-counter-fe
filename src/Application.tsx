import { useState } from 'react';
import axios from 'axios';
import FileUploader from './components/Application/FileUploader';
import FormManual from './components/Application/FormManual';
import Header from './components/Application/Header';

const Application = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLoadButtonClick = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('video', selectedFile);

            try {
                // Set loading to true before making the API call
                setLoading(true);

                const response = await axios.post('http://3.6.112.225:8000/video_feed', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                // Handle the API response
                console.log('API Response:', response.data);

                // Add logic to handle the response as needed

            } catch (error) {
                console.error('API Error:', error);
                // Handle error as needed

            } finally {
                // Set loading back to false after the API call is complete (whether it succeeded or failed)
                setLoading(false);
            }
        }
    };

    return (
        <main className='mx-[8rem]'>
            <Header />
            <div className='flex justify-center items-center mt-[4rem]'>
                <div className='flex justify-between items-center gap-5'>
                    <div className='mt-[3.5rem]'>
                        <div>
                            <h1 className="text-[2.5rem] text-[#000] font-semibold font-roboto mb-4 ">Upload Your Video</h1>
                            <FileUploader setSelectedFile={setSelectedFile} />
                        </div>
                        <div className="flex justify-start mt-2 gap-4">
                            <button
                                className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                onClick={handleLoadButtonClick}
                            >
                                {loading ? 'Loading...' : 'Load'}
                            </button>
                            <button
                                className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    <div className='mt-[4.5rem]'>
                        <FormManual />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Application;
