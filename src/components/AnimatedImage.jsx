import { motion } from 'framer-motion';


export const AnimatedImage = ({src, alt}) => {


    return <motion.img
        animate={{
            size: 1.2,
            scale: 1.5,

        }}

        transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"

        }}
        src={src}
        alt={alt}
        height={50}
        width={50}
    />
}