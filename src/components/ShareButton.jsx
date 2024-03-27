import React from "react";
import "./ShareButton.css";
import { RiShareLine } from "react-icons/ri";

const ShareButton = ({ url }) => {
  const handleShare = async () => {
    if (navigator.share) {
      // If Web Share API is supported
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this website!",
          url: url,
        });
        // console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for unsupported browsers
      // console.log("Web Share API not supported");
      // Fallback for WhatsApp
      window.open(`whatsapp://send?text=${encodeURIComponent(url)}`, "_blank");
      // Fallback for Instagram
      window.open(
        `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
      // You can add more fallback options here for other platforms
    }
  };

  return (
    <button className="share-button" onClick={handleShare}>
      <RiShareLine />
    </button>
  );
};

export default ShareButton;
