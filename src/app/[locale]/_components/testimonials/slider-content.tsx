import * as React from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { PARTNER_LOGOS } from "@/app/[locale]/_components/testimonials/dynamic-slider";

export function SliderImage({
  logo: Logo,
  alt,
  width,
}: {
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  alt: string;
  width: number;
}) {
  return (
    <div className="flex h-28 shrink-0 items-center" style={{ width: `${width}px` }}>
      <Logo aria-label={alt} className="object-fill" />
    </div>
  );
}

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
      {(!isDesktop ? dualRowIndexes : rowIndexes).map((idx) => (
        <CarouselItem key={idx} className="mx-auto flex justify-center" style={{ flexBasis: `${100 / itemsPerView}%` }}>
          <div className="flex flex-col">
            <SliderImage logo={PARTNER_LOGOS[idx]} alt={`Logo ${idx + 1}`} width={itemWidth} />
            {!isDesktop && <SliderImage logo={PARTNER_LOGOS[idx + 1]} alt={`Logo ${idx + 2}`} width={itemWidth} />}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
