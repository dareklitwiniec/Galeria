"use client";
import ImageGallery from "react-image-grid-gallery";
import styles from './page.module.css';
import Footer from "../components/footer/Footer";


const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/img/01.jpg",

    },
    {
        alt: "Image2's alt text",

        src: "/img/02.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/03.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/04.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/05.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/06.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/07.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/08.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/09.jpg",
    },

];

export default function App() {
    return (
        <div className={styles.wrape}>

            <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />

            <Footer />
        </div>
    )
}
