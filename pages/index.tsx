import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import LogoWhite from "../assets/logo-white.png";
import LargeButton from "../components/LargeButton";
import HeadDocument from "../components/HeadDocument";
import HeadingThree from "../components/text/HeadingThree";
import Link from "next/link";
import LandingHeroImage from "../assets/landing.jpeg";
import { useLayoutEffect } from "react";
import { faker } from "@faker-js/faker";

export default function Home() {
  // useLayoutEffect(() => {
  //   const video = document.getElementById("bg-video");
  //   if (video) {
  //     video.play().then(() => console.log("Yes"));
  //   }
  // });
  return (
    <>
      <HeadDocument docTitle="gumrindelwald - Ara Gamaliel's Blog" />

      <main className="w-screen h-screen relative">
        <div className="w-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center z-10">
          <div
            className="image-wrapper mx-auto relative"
            style={{ width: "50vmax", height: "20vmin" }}
          >
            <Image
              src={LogoWhite}
              alt="gumrindelwald logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <HeadingThree center color="white">
            Ara Gamaliel Boanerges&apos;s Personal Blog
          </HeadingThree>
          <div className="menus w-full flex justify-center mt-2">
            <LargeButton name="to-my-blog">
              <Link href="/me">
                <a className="flex text-white">
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2 w-4" />{" "}
                  About Me
                </a>
              </Link>
            </LargeButton>
            <LargeButton name="to-my-blog">
              <Link href="/blogs">
                <a className="flex text-white">
                  My Blogs
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4" />
                </a>
              </Link>
            </LargeButton>
          </div>
        </div>
        <div className="absolute w-full h-full -z-10">
          <video
            autoPlay
            muted
            loop
            id="bg-video"
            className="w-full h-full object-cover"
          >
            <source
              src={`/video/hero${faker.datatype.number({
                min: 1,
                max: 2,
              })}.mp4`}
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </main>
    </>
  );
}
