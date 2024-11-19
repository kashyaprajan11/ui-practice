"use client";

import { cn } from "@/lib/utils";
import React from "react";

type CardDataProps = {
  id: number;
  title: string;
  description?: string;
  image: string;
  link: string;
};

export const RadialHoverCard = ({
  cardData,
}: {
  cardData: CardDataProps[];
}) => {
  return (
    <div className="flex gap-8 flex-wrap max-w-[916px] w-[calc(100% - 20px)">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="relative cursor-pointer h-[240px] w-[280px] rounded-xl bg-[rgba(255,255,255,0.1)]"
        ></div>
      ))}
    </div>
  );
};
