"use client";
import ImageGallery from "react-image-grid-gallery";
import styles from './page.module.css';
import Footer from "../components/footer/Footer";

const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/stories/01.jpg",

    },
    {
        alt: "Image2's alt text",

        src: "/stories/02.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/03.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/04.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/05.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/06.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/07.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/08.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/stories/09.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/stories/10.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/stories/11.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/stories/12.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/stories/13.jpg",
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
