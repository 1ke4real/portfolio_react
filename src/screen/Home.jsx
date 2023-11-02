import profile from "../assets/images/profil.png"
import {SocialIcon} from "react-social-icons";
import {AnimatedSocialIcon} from "../components/AnimatedSocialIcon.jsx";


export const Home = () => {
   const handleGotTo = (e) => {
        e.preventDefault();
        window.location.href = "#about"
   }
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center gap-10 -mt-4" id="home">
                <div className="flex flex-col gap-5 rounded-lg justify-center lg:flex-row lg:gap-0">
                    <div className="flex justify-center">
                        <img src={profile} alt="profil" className="rounded-full object-cover w-48 h-48 lg:w-200 lg:h-200 mx-8" />
                    </div>
                    <div className="flex flex-col items-center justify-center lg:gap-2 lg:items-start">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-5xl text-center font-bold lg:text-6xl text-important title">Hello my name is <span className="">Mike</span></h1>
                            <p className="text-xl font-light">Développeur react js et symfony</p>
                            <button className="button py-3 my-4 w-1/2 text-2xl rounded-lg font-bold lg:w-1/3" onClick={handleGotTo}>En savoir plus</button>
                        </div>
                        <div>
                            <AnimatedSocialIcon />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}