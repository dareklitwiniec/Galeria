import React from "react";
import Link from 'next/link'



const Container = () => {
    return (
        <div className="hero-cont">
            <div className="blockx">
                <div className="grafika first">
                    <Link href="./plants">

                        <div className="Hero_title">
                            <p>Plants</p>
                            <div className="Title_image1"></div>

                        </div>
                    </Link>
                </div>
                <div className="grafika second">
                    <div className="Hero_title">
                        <p>Grafika</p>
                        <div className="Title_image2"></div>
                    </div>
                </div>
                <div className="grafika third">
                    <div className="Hero_title">
                        <p>Grafika</p>
                        <div className="Title_image3"></div>
                    </div>
                </div>
                <div className="grafika fourth">
                    <div className="Hero_title">
                        <p>Grafika</p>
                        <div className="Title_image4"></div>
                    </div>
                </div>
                <div className="grafika fifth">
                    <div className="Hero_title">
                        <p>Grafika</p>
                        <div className="Title_image5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;
