import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="">
          <Image
            src={
              "https://unsplash.com/photos/a-man-in-a-green-shirt-is-posing-for-a-picture-GEnCnYhA1J4"
            }
            alt="profile picture"
            width="192"
            height="192"
            quality="95"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
