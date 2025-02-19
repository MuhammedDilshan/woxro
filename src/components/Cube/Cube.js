import Image from "next/image";
import React from "react";
import "./Cube.css";

const Cube = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <Image
            height={50}
            width={50}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Front"
          />
        </div>
        <div className="face back">
          <Image
            height={50}
            width={50}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Back"
          />
        </div>
        <div className="face right">
          <Image
            height={50}
            width={50}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Right"
          />
        </div>
        <div className="face left">
          <Image
            height={50}
            width={50}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Left"
          />
        </div>
        <div className="face top">
          <Image
            height={50}
            width={50}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Top"
          />
        </div>
        <div className="face bottom">
          <Image
            height={50}
            width={100}
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;
