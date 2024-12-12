"use client"
import { Card, CardHeader, CardFooter, CardBody, Image } from "@nextui-org/react";
import { Heart } from "lucide-react";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const CustomCard = () => {
  const [heart, setHeart] = useState(false);
  const router = useRouter(); // Use useRouter properly inside a client component

  const wishlist = () => {
    setHeart(!heart);
  };

  // Redirect to the perfume details page when the card is clicked
  const handleCardClick = () => {
    router.push("/perfume-detail"); // Navigate to perfume details page
  };

  return (
    <Card className="py-4 w-[300px] cursor-pointer" >
      <CardBody className="overflow-visible py-2" onClick={handleCardClick}>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large" onClick={handleCardClick}>Frontend Radio</h4>
        <Heart
          className={`${heart ? "text-red-700 fill-red-600" : ""}`}
          onClick={wishlist}
        />
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
