import * as React from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { PARTNER_LOGOS } from "@/app/[locale]/_components/testimonials/dynamic-slider";

export function SliderContent({
  rowIndexes,
  dualRowIndexes,
  isDesktop,
  itemsPerView,
  itemWidth,
}: {
  rowIndexes: number[];
  dualRowIndexes: number[];
  isDesktop: boolean;
  itemsPerView: number;
  itemWidth: number;
}) {
  return (
    <CarouselContent className="flex min-h-[300px] items-center">
      {(!isDesktop ? dualRowIndexes : rowIndexes).map((idx) => {
        const LogoTop = PARTNER_LOGOS[idx];
        const LogBottom = PARTNER_LOGOS[idx + 1];

        return (
          <CarouselItem
            key={idx}
            className="mx-auto flex justify-center"
            style={{ flexBasis: `${100 / itemsPerView}%` }}
          >
            <div className="flex flex-col">
              <LogoTop alt={`Logo ${idx + 1}`} style={{ width: `${itemWidth}px`, height: "112px", flexShrink: 0 }} />
              {!isDesktop && (
                <LogBottom
                  alt={`Logo ${idx + 2}`}
                  style={{ width: `${itemWidth}px`, height: "112px", flexShrink: 0 }}
                />
              )}
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
  );
}
