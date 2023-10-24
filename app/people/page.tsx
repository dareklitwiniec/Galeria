"use client";
import ImageGallery from "react-image-grid-gallery";
import styles from './page.module.css';
import Footer from "../components/footer/Footer";

const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/img_peopl/01.jpg",

    },
    {
        alt: "Image2's alt text",

        src: "/img_peopl/02.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_peopl/03.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_peopl/04.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_peopl/05.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_peopl/06.jpg",
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
