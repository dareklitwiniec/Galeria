"use client";
import ImageGallery from "react-image-grid-gallery";
import styles from './styles.module.css'

const imagesArray = [
    {
        alt: "Image1's alt text",

        src: "/img/11.jpg",

    },
    {
        alt: "Image2's alt text",

        src: "/img/22.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/33.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/44.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/55.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/66.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/77.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/88.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/009.jpg",
    },
    {
        alt: "Image3's alt text",

        src: "/img/010.jpg",
    },
];

export default function App() {
    return (
        <div className="wrape">

            <ImageGallery imgArray={imagesArray} columnWidth={230} gapSize={24} />
        </div>
    )
}
