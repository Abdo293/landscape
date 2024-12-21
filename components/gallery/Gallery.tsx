"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export const Gallery = () => {
  const t = useTranslations("Gallery");

  const [index, setIndex] = useState(-1);

  return (
    <div className="py-[80px] container mx-auto max-lg:px-[15px]" id="gallery">
      <h2 className="text-center text-[36px] font-semibold text-[#333]">
        {t("title")}
      </h2>
      <p className="text-center pt-5 text-[#555]">{t("description")}</p>

      <div className="pt-8">
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};
