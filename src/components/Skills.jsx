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

export const Skills = () => {
    return (
        <>
            <div className="p-5 mt-5" id="skills">
                <h1 className="uppercase text-3xl font-bold">Compétences</h1>
               <div className="my-10 flex flex-wrap flex-1 gap-8 justify-center">
                   <img src={javascript} alt="javascript" width={50} height={50}/>
                   <img src={react} alt="react" width={50} height={50} />
                   <img src={redux} alt="redux" width={50} height={50} />
                   <img src={tailwind} alt="tailwind" width={50} height={50} />
                   <img src={material} alt="material" width={50} height={50}/>
                   <img src={php} alt="php" width={50} height={50}/>
                   <img src={laravel} alt="laravel" width={50} height={50} />
                   <img src={symfony} alt="symfony" width={50} height={50} />
                   <img src={mysql} alt="mysql" width={50} height={50} />
                   <img src={postgresql} alt="postgresql" width={50} height={50} />
                   <img src={github} alt="github" width={50} height={50} />
                   <img src={flutter} alt="flutter" width={50} height={50} />
               </div>
            </div>
        </>
    )
}