import profile from "../assets/images/profil.png"


export const Home = () => {
   const handleGotTo = (e) => {
        e.preventDefault();
        window.location.href = "#about"
   }
    return (
        <>
            <div className="flex flex-col place-content-center items-center h-screen gap-10 -mt-4" id="home">
                <div className="flex flex-col gap-5 rounded-lg items-center justify-center lg:flex-row lg:gap-0 ">
                    <img src={profile} alt="profil" width={200} height={200}
                         className="rounded-full object-cover  mx-8"/>
                    <div className="flex flex-col gap-5 items-center justify-center lg:gap-2 lg:items-start">
                        <h1 className="text-5xl text-center font-bold lg:text-6xl">Bonjour je m'appelle <span
                            className="text-blue-500">Mike</span></h1>
                        <p className="text-xl   font-light">Développeur react js et symfony</p>
                        <button className="button py-3 my-2 w-1/2 text-2xl rounded-lg font-bold lg:w-1/3" onClick={handleGotTo}>En savoir
                            plus
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}