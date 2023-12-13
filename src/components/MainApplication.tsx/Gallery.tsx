import React, { useState, useEffect, useRef } from 'react';
import Pagination from './Pagination';

interface ImageData {
    id: number;
    src: string;
}

const images: ImageData[] = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    }, {
        id: 6,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    }, {
        id: 13,
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    // Add more images with id and src properties
];

const itemsPerPage = 4;

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleImageClick = (image: ImageData) => {
        setSelectedImage(image);
    };

    const handleCloseFullscreen = () => {
        setSelectedImage(null);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectedImage &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                handleCloseFullscreen();
            }
        };

        const handlePageClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'BUTTON' && target.classList.contains('pagination-button')) {
                const page = parseInt(target.textContent || '1', 10);
                handlePageChange(page);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('click', handlePageClick);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('click', handlePageClick);
        };
    }, [selectedImage, containerRef, handlePageChange]);

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedImages = images.slice(startIndex, endIndex);

    return (
        <div>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
                ref={containerRef}
            >
                {paginatedImages.map((image) => (
                    <div
                        key={image.id}
                        className="group cursor-pointer relative"
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={image.src}
                            alt={`Image ${image.id}`}
                            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                View
                            </button>
                        </div>
                    </div>
                ))}

                {selectedImage && (
                    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75 flex items-center justify-center">
                        <div className="max-w-screen-xl mx-auto fullscreen-image-container">
                            <img
                                src={selectedImage.src}
                                alt={`Image ${selectedImage.id}`}
                                className="max-w-full max-h-full"
                            />
                            <button
                                className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
                                onClick={handleCloseFullscreen}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* <div className="flex justify-center mt-4">
                <Pagination/>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`mx-2 px-3 py-2 rounded-full pagination-button ${currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-gray-300'
                            }`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div> */}

            </div>

            <div className="flex justify-center mt-4">
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>

    );
};



export default Gallery;
