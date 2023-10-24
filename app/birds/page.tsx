"use client";
import ImageGallery from "react-image-grid-gallery";
import styles from './page.module.css';
import Footer from "../components/footer/Footer";

const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/img_bird/01.jpg",

    },
    {
        alt: "Image2's alt text",

        src: "/img_bird/02.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/03.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/04.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/05.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/06.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/07.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/08.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img_bird/09.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/10.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/11.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/12.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/13.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/14.jpg",
    },
    {
        alt: "/Image3's alt text",

        src: "/img_bird/15.jpg",
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
