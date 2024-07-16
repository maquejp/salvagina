import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ImageInterface } from "../interfaces/ImageInterface";

interface CarouselProps {
  images: ImageInterface[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrev = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Card style={{ maxWidth: "600px", margin: "auto", position: "relative" }}>
      <CardContent
        style={{ margin: "auto", cursor: "pointer" }}
        onClick={handleNext}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <img
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            style={{ height: "100%", width: "100%" }}
          />
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              textAlign: "center",
              padding: "10px 0",
              boxSizing: "border-box",
            }}
          >
            {images[imageIndex].alt}
          </Typography>
        </div>
      </CardContent>
      <IconButton
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            title={image.alt}
            onClick={() => handleThumbnailClick(index)}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border:
                imageIndex === index
                  ? "2px solid white"
                  : "2px solid transparent",
              cursor: "pointer",
              opacity: imageIndex === index ? 1 : 0.5,
              transition: "opacity 0.3s, border 0.3s",
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default CarouselComponent;
