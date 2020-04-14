import React from "react";
import ArtistsContainerUI from "modules/artists/ui";
import { ICarousel } from "modules/artists/model";

const carousel: ICarousel = {
  title: "Popular",
  listCarousel: [
    {
      items: [
        {
          url:
            "https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/555345/pexels-photo-555345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
        {
          url:
            "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
      ],
    },
    {
      items: [
        {
          url:
            "https://images.pexels.com/photos/4038313/pexels-photo-4038313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          nameArtist: "Rihana",
          kindOfMusic: "Consideration",
        },
      ],
    },
  ],
};

export default function ArtistsContainer() {
  return <ArtistsContainerUI carousel={carousel} />;
}
