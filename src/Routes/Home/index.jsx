import Hero from "../../Components/Hero";
import Embroidery from "../../Components/Embroidery";
import Hat from "../../Components/Hat";
import ThousandJacket from "../../Components/ThousandJacket";
import OfficeWorld from "../../Components/OfficeWorld";
import FAQ from "../../Components/FAQ";

export const Home = () => {
    return (
        <>
            <main className="home-page">
                <Hero />
                <Embroidery />
                <Hat />
                <ThousandJacket />
                <OfficeWorld />
                <FAQ />
            </main>
        </>
    )
}