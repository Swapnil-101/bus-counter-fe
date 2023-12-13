
import FileUploader from './components/Application/FileUploader'
import FormManual from './components/Application/FormManual'
import Header from './components/Application/Header'

const Application = () => {
    return (
        <main>
            <Header />
            <div className='flex justify-center items-center mt-[4rem]'>

                <div className='flex justify-between items-center gap-5'>
                    <div className='mt-[3.5rem]'>
                        <FileUploader />
                        <div className="flex justify-start mt-2 gap-4">
                            <button
                                className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            // onClick={handleLoadButtonClick}
                            >
                                Load
                            </button>

                            <button
                                className="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            // onClick={handleLoadButtonClick}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    <FormManual />
                </div>

            </div>
        </main>

    )
}

export default Application