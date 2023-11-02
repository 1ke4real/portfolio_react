import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
export const AnimatedSocialIcon = ()=> {
    return (<>
        <motion.div
            animate={{
                scale: [1, 1.2, 1.2, 1, 1],
            }}

        >
            <ul className="flex gap-4 lg:justify-start">
                <li>
                    <SocialIcon url="mailto:contact@mikeleman.fr" bgColor="#205D9E" fgColor="#eeeeee" label="Email"/>
                </li>
                <li>
                    <SocialIcon url="https://github.com/1ke4real" bgColor="#205D9E" fgColor="#eeeeee"/>
                </li>
                <li>
                    <SocialIcon url="https://www.linkedin.com/in/mike-leman-843298246/" bgColor="#205D9E"
                                fgColor="#eeeeee"/>
                </li>
            </ul>
        </motion.div>
    </>)
}