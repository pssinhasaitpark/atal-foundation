import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
const LightBox = ({ open, onClose, photoIndex, images, source }) => {
  if (!images || images.length === 0) return null;

  const slides = images?.map((img, index) => ({
    src: source ? `${source}${img}` : img,
    alt: `Image ${index + 1}`,
  }));
  
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={photoIndex}
      slides={slides}
      plugins={[Thumbnails, Zoom, Fullscreen]}
      thumbnails={{
        position: "bottom",
        width: 100,
        height: 60,
        border: 1,
        padding: 4,
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
      }}
      controller={{ closeOnBackdropClick: true }}
      carousel={{ finite: true }}

    />
  );
};
export default LightBox;
