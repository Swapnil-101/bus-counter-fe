import React, { useState, useEffect } from 'react';

interface CardProps {
    title: string;
    value: string | number;  // Adjust the type here
    bgColor: string;
    icon: React.ReactNode;
    danger: string;
    onUpdate?: (newValue: string) => void;
    textColor: any;
}

const StatisticCard: React.FC<CardProps> = ({ title, value, bgColor, icon, danger, onUpdate, textColor }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState<string>(String(value)); // Ensure editedValue is always a string

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        if (onUpdate) {
            onUpdate(editedValue);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedValue(String(value));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedValue(e.target.value);
    };

    return (
        <div className={`flex items-center ${danger} border rounded-sm overflow-hidden shadow `}>
            <div className={`p-4 ${bgColor}`}>{icon}</div>
            <div className={`px-4 text-gray-700 ${textColor}  `}>
                <h3 className="text-sm tracking-wider">{title}</h3>
                {title === "Total Number of Passengers" ? (
                    isEditing ? (
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={editedValue}
                                onChange={handleChange}
                                className="mr-2 border-b border-gray-500 outline-none focus:border-blue-500"
                            />
                            <button onClick={handleSave} className="text-blue-500 cursor-pointer">
                                Save
                            </button>
                            <button onClick={handleCancel} className="text-red-500 cursor-pointer ml-2">
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <p className="text-2xl cursor-pointer" onClick={handleEdit}>
                            {value}
                        </p>
                    )
                ) : (
                    <p className="text-2xl">{value}</p>
                )}
            </div>
        </div>
    );
};

interface frames {
    frames: any;
}

const StatsContainer: React.FC<frames> = ({ frames }) => {
    // State variable for total number of passengers
    const [totalPassengers, setTotalPassengers] = useState<string>('');

    const lastCountOfPeople = frames.length > 0 ? frames[frames.length - 1].count_of_people : 0;

    const minus = parseInt(totalPassengers) - lastCountOfPeople; // Ensure minus is a number

    const percentageDecrease = ((parseInt(totalPassengers) - lastCountOfPeople) / parseInt(totalPassengers)) * 100;
    console.log("asda", percentageDecrease)

    // Determine danger class based on the percentage decrease
    let dangerLastCard = '';
    let dangerThirdCard = '';

    if (percentageDecrease < 50) {
        dangerLastCard = '';
        dangerThirdCard = 'bg-[orange]', 'text-[#fff]';
    } else {
        dangerLastCard = 'bg-[red]', 'text-[#fff]';
        dangerThirdCard = '';
    }

    // Load total number of passengers from local storage on component mount
    useEffect(() => {
        const storedTotalPassengers = localStorage.getItem('passengerCount');
        if (storedTotalPassengers) {
            setTotalPassengers(storedTotalPassengers);
        }
    }, []);

    // Update total number of passengers in local storage
    const handleUpdateTotalPassengers = (newValue: string) => {
        setTotalPassengers(newValue);
        localStorage.setItem('passengerCount', newValue);
    };

    return (
        // <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">

        //     <div className='border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 '>
        //         <StatisticCard
        //             title="Manual entry :  Number of passengers"
        //             value={totalPassengers}
        //             bgColor="bg-green-400"
        //             danger=""
        //             icon={
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        //                 </svg>
        //             }
        //             onUpdate={handleUpdateTotalPassengers}
        //         />
        //         <StatisticCard title="Detected : Number of passengers" value={lastCountOfPeople} bgColor="bg-blue-400" danger="" icon={
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        //             </svg>
        //         } />
        //     </div>

        //     <div className='border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 '>
        //         <StatisticCard title="Minimal Difference Warning" value={minus} bgColor="bg-indigo-400" danger={dangerThirdCard} icon={
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        //             </svg>
        //         } />
        //         <StatisticCard title="High Difference Warning" value={minus} bgColor="bg-red-400" danger={dangerLastCard} icon={
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        //             </svg>
        //         } />
        //     </div>
        // </div>
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
            <div>
                <h1 className="text-[1.8rem] text-[#000] font-semibold font-roboto mb-4 ">Analysis</h1>
                <div className="border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4  sm:grid-cols-2 ">

                    <StatisticCard
                        title="Total Number of Passengers"
                        value={totalPassengers}
                        bgColor="bg-green-400"
                        danger=""
                        textColor=""
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        }
                        onUpdate={handleUpdateTotalPassengers}
                    />
                    <StatisticCard
                        textColor=""
                        title="Total Number of Passanger By Video" value={lastCountOfPeople} bgColor="bg-blue-400" danger="" icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        } />
                </div>
            </div>


            <div>
                <h1 className="text-[1.8rem] text-[#000] font-semibold font-roboto mb-4 ">Warnings</h1>

                <div className="border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4  sm:grid-cols-2 ">
                    <StatisticCard title="Minimal Difference Warning" value={minus} bgColor="bg-indigo-400"
                        textColor="white"
                        danger={dangerThirdCard} icon={

                            <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/general-warning-sign.png" alt="general-warning-sign" />

                        } />
                    <StatisticCard
                        textColor="white"
                        title="High Difference Warning" value={minus} bgColor="bg-red-400" danger={dangerLastCard} icon={
                            <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/general-warning-sign.png" alt="general-warning-sign" />

                        } />
                </div>
            </div>


        </div>
        // <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
        //     <div>
        //         <h1 className="text-[1.8rem] text-[#000] font-semibold font-roboto mb-4 ">Analysis</h1>

        //         <div className='border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4  sm:grid-cols-2 '>

        //             <StatisticCard
        //                 title="Manual entry :
        //             Number of passengers"
        //                 value={totalPassengers}
        //                 bgColor="bg-green-400"
        //                 danger=""
        //                 icon={
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        //                     </svg>
        //                 }

        //                 onUpdate={handleUpdateTotalPassengers}
        //             />
        //             <StatisticCard title="Detected :
        //                 Number of passengers" value={lastCountOfPeople} bgColor="bg-blue-400" danger="" icon={
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        //                     </svg>
        //                 } />

        //         </div>
        //     </div>


        //     <div>
        //         <h1 className="text-[1.8rem] text-[#000] font-semibold font-roboto mb-4 ">Warnings</h1>

        //         <div className='border border-gray-300 p-4 rounded-xl grid grid-cols-1 gap-4  sm:grid-cols-2 '>
        //             <StatisticCard title="Minimal Difference Warning" value={minus} bgColor="bg-indigo-400" danger={dangerThirdCard} icon={
        //                 <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/general-warning-sign.png" alt="general-warning-sign" />
        //             } />
        //             <StatisticCard title="High Difference Warning" value={minus} bgColor="bg-red-400" danger={dangerLastCard} icon={
        //                 <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/general-warning-sign.png" alt="general-warning-sign" />

        //             } />
        //         </div>
        //     </div>


        // </div>
    );
};

export default StatsContainer;
