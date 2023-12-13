import React from 'react';

interface FormManualProps { }

const FormManual: React.FC<FormManualProps> = () => {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 md:w-[600px] md:h-[400px]">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Manual Data</h2>

            <div className=''>
                <form className=''>
                    <div>
                        <label htmlFor="username" className="text-gray-700 dark:text-gray-200">
                            Number of Passengers
                        </label>
                        <input
                            id="username"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                    {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                   

                    <div>
                        <label htmlFor="emailAddress" className="text-gray-700 dark:text-gray-200">
                            Email Address
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-gray-700 dark:text-gray-200">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label htmlFor="passwordConfirmation" className="text-gray-700 dark:text-gray-200">
                            Password Confirmation
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>
                </div> */}

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default FormManual;
