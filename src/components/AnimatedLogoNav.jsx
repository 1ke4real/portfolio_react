import { motion } from "framer-motion"
export const AnimatedLogoNav = ({logo}) => {
    return (
        <motion.img
            animate={{
                rotate: 360,

            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            src={logo}
            alt="logo"
            className="h-10 rounded-full"
        />
    )
}