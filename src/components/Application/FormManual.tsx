import React, { useState, useEffect } from 'react';

interface FormManualProps {
    passengerCount: any;
    setPassengerCount: any;
}

const FormManual: React.FC<FormManualProps> = ({ setPassengerCount, passengerCount }) => {

    // Load data from local storage on component mount
    useEffect(() => {
        const storedPassengerCount = localStorage.getItem('passengerCount');
        if (storedPassengerCount) {
            setPassengerCount(parseInt(storedPassengerCount, 10));
        }
    }, []);

    // Save data to local storage whenever passengerCount changes
    useEffect(() => {
        if (passengerCount !== '') {
            localStorage.setItem('passengerCount', passengerCount.toString());
        }
    }, [passengerCount]);

    const handleSave = () => {
        // Perform any additional saving logic here
        // For now, just log the passengerCount
        console.log('Passenger Count:', passengerCount);
    };

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 2xl:w-[35rem] md:w-[20rem] md:h-[200px]">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Manual Entry</h2>

            <div className="">
                <form className="">
                    <div>
                        <label htmlFor="username" className="text-gray-700 dark:text-gray-200">
                            Enter the Number of Passengers
                        </label>
                        <input
                            id="username"
                            type="number"
                            value={passengerCount}
                            onChange={(e) => setPassengerCount(parseInt(e.target.value, 10) || '')}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormManual;
