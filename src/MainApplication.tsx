import Header from "./components/Application/Header"
import Gallery from "./components/MainApplication.tsx/Gallery"
import StatsContainer from "./components/MainApplication.tsx/StatsContainer"


const MainApplication = () => {
    return (
        <main>
            <Header />
            <div className="flex flex-col gap-[4rem]">
                <StatsContainer />
                <Gallery />
            </div>
        </main>
    )
}

export default MainApplication