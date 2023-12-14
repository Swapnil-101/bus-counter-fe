import React, { ChangeEvent, DragEvent, useState, useRef } from 'react';

interface FileUploaderProps {
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setSelectedFile }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        setSelectedFile(file); // Set the selected file
        displayPreview(file);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file); // Set the selected file
            displayPreview(file);
        }
    };

    const displayPreview = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewSrc(reader.result as string);
        };
    };

    const handleLoadButtonClick = () => {
        // Trigger the file input dialog
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className=''>
            <div
                className={`md:w-[600px] md:h-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 ${isDragging ? 'border-indigo-600 flex justify-center items-center' : 'flex justify-center items-center'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 z-50"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
                <div className="text-center" onClick={handleLoadButtonClick}>
                    <img
                        className="mx-auto h-12 w-12"
                        src="https://www.svgrepo.com/show/357902/image-upload.svg"
                        alt=""
                    />
                    <h3 className=" mt-2 text-sm font-medium text-gray-900">
                        <label htmlFor="file-upload" className="relative cursor-pointer">
                            <span>Drag and drop</span>
                            <span className="text-indigo-600"> or browse</span>
                            <span> to upload</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">MP4,
                        MOV,
                        WMV,
                        AVI,
                        AVCHD,</p>
                </div>
                {/* <img src={previewSrc || ''} className={`mt-4 mx-auto max-h-40 ${!previewSrc && 'hidden'}`} /> */}

            </div>
        </div>
    );
};

export default FileUploader;