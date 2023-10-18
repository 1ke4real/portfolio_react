export const Contact = () => {
    return (
        <>
            <div className="p-5 mt-5" id="contact">
                <h1 className="uppercase text-3xl font-bold">Contact</h1>
                <div>
                    <ul className="flex flex-col gap-4 mt-5">
                        <li>
                            Email: <a href="mailto:mikeeleman@gmail.com" className="underline underline-offset-4 font-bold">mikeeleman@gmail.com</a>
                        </li>
                        <li>
                            Github: <a href="https://github.com/1ke4real" className="underline underline-offset-4 font-bold" >1ke4real</a>
                        </li>
                        <li>
                            Linkedin: <a href="https://www.linkedin.com/in/mike-leman-843298246/" className="underline underline-offset-4 font-bold">Mike Leman</a>
                        </li>
                        <li>
                            Téléphone: <a href="tel:+33601177537" className="underline underline-offset-4 font-bold">06 01 17 75 37</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}