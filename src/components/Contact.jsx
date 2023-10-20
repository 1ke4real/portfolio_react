import {SocialIcon} from "react-social-icons";

export const Contact = () => {
    return (
        <>
            <div className="p-5 py-8 mb-8 lg:p-16" id="contact">
                <h1 className="uppercase text-3xl font-bold lg:text-5xl">Contact</h1>
                <div className="lg:flex lg:gap-10">
                    <p className="text-lg mt-5 leading-10 lg:leading-loose lg:text-xl">
                        Je suis toujours ouvert aux nouvelles opportunités passionnantes. N'hésitez pas à me contacter
                        pour discuter de projets futurs !
                    </p>

                    <ul className="flex  gap-4 mt-5">
                        <li>
                            <SocialIcon url="mailto:contact@mikeleman.fr" bgColor="#004f9f" fgColor="#eeeeee"/>
                        </li>
                        <li>
                            <SocialIcon url="https://github.com/1ke4real" bgColor="#171515" fgColor="#eeeeee"/>
                        </li>
                        <li>
                            <SocialIcon url="https://www.linkedin.com/in/mike-leman-843298246/" bgColor="#0e76a8"
                                        fgColor="#eeeeee"/>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}