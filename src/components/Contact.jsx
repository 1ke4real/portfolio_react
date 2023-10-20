import {SocialIcon} from "react-social-icons";

export const Contact = () => {
    return (
        <>
            <div className="p-5 mt-5" id="contact">
                <h1 className="uppercase text-3xl font-bold">Contact</h1>
                <div>
                    <ul className="flex justify-evenly gap-4 mt-5">
                        <li>
                            <SocialIcon url="mailto:contact@mikeleman.fr" bgColor="#000000" fgColor="#ffffff"/>
                        </li>
                        <li>
                            <SocialIcon url="https://github.com/1ke4real" bgColor="#000000" fgColor="#ffffff"/>
                        </li>
                        <li>
                            <SocialIcon url="https://www.linkedin.com/in/mike-leman-843298246/" bgColor="#000000" fgColor="#ffffff"/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}