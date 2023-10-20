import flutter from '../assets/images/skills/flutter.svg'
import github from '../assets/images/skills/github.svg'
import javascript from '../assets/images/skills/javascript.svg'
import laravel from '../assets/images/skills/laravel.svg'
import mysql from '../assets/images/skills/mysql.svg'
import php from '../assets/images/skills/php.svg'
import postgresql from '../assets/images/skills/postgresql.svg'
import redux from '../assets/images/skills/redux.svg'
import react from '../assets/images/skills/react.svg'
import symfony from '../assets/images/skills/symfony.svg'
import tailwind from '../assets/images/skills/tailwind.svg'
import material from '../assets/images/skills/material.svg'
import {AnimatedImage} from "./AnimatedImage.jsx";

export const Skills = () => {
    return (<>
        <div className="p-5 py-8 mb-8 lg:p-16 " id="skills">

            <h1 className="uppercase text-3xl font-bold my-2 mb-5 lg:text-5xl">Compétences</h1>
           <div className="lg:flex lg:flex-row-reverse lg:gap-10 ">
               <p className="text-lg mt-5 leading-10 lg:leading-loose lg:text-xl lg:w-1/2">Je suis un développeur passionné et curieux qui aime explorer une multitude de technologies.
                   Mon expertise s'étend à un large éventail de domaines, allant des fondamentaux du web aux dernières
                   tendances technologiques. Voici quelques-unes de mes compétences clés </p>
               <div className="my-10 flex flex-wrap gap-8 justify-evenly lg:justify-start lg:gap-10">
                   <AnimatedImage src={javascript} alt="javascript" width={50} height={50}/>
                   <AnimatedImage src={react} alt="react" width={50} height={50}/>
                   <AnimatedImage src={redux} alt="redux" width={50} height={50}/>
                   <AnimatedImage src={tailwind} alt="tailwind" width={50} height={50}/>
                   <AnimatedImage src={material} alt="material" width={50} height={50}/>
                   <AnimatedImage src={php} alt="php" width={50} height={50}/>
                   <AnimatedImage src={laravel} alt="laravel" width={50} height={50}/>
                   <AnimatedImage src={symfony} alt="symfony" width={50} height={50}/>
                   <AnimatedImage src={mysql} alt="mysql" width={50} height={50}/>
                   <AnimatedImage src={postgresql} alt="postgresql" width={50} height={50}/>
                   <AnimatedImage src={github} alt="github" width={50} height={50}/>
                   <AnimatedImage src={flutter} alt="flutter" width={50} height={50}/>
               </div>
           </div>
        </div>
    </>)
}