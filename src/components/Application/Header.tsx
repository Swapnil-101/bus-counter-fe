
import { Link } from 'react-router-dom';

const Header = () => {
    return (


        <div className="flex justify-between items-center md:mx-[rem]  my-8 mb-[2rem]">

            <Link to="/">
                <div>
                    <h1 className="text-[2.5rem] text-[#3388CC] font-semibold  font-roboto flex justify-center mb-4 mt-[1rem]">Bus Counter</h1>
                </div>

            </Link>


            <Link to="/">
                <div className="flex justify-center items-center">
                    <img src="https://pdf.bluetickconsultants.com/static/dist/images/blueticklogo.webp" className="md:w-[10rem] w-[6rem]" />
                    {/* <h1>Blue Consultants</h1> */}
                </div>


            </Link>

        </div>
    )
}

export default Header