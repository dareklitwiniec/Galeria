
import React from 'react'

import styles from './page.module.css'
import Footer from '../components/footer/Footer'

const page = () => {
    return (
        <>
            <div className=" main isolate bg-white px-6 py-24 sm:py-32 lg:px-8">



                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}>

                    </div>

                </div>

                <div className={styles.container}>


                    <p className={styles.p}>
                        Hi,

                        I am a graduate of the Faculty of Painting at the Academy of Fine Arts in&nbsp;Warsaw, specialty book illustration. My passion is illustrating children's books, school textbooks and others that require realistic drawing. I&nbsp;use traditional techniques, such as watercolor, tempera, gouache, I&nbsp;also use digital techniques if&nbsp;the project requires it. I&nbsp;have many years of experience in&nbsp;cooperation with publishing houses and advertising agencies. Examples of my work can be seen in&nbsp;the attached portfolio.
                        I&nbsp;live and work in Warsaw, thanks to the Internet, I&nbsp;can&nbsp;carry out orders for entities from all over Europe and the United States.<br></br>Feel free to contact me.

                    </p>
                </div>
                <Footer />
            </div>




        </>

    )
}

export default page