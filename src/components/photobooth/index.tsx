"use client";
import React, { useEffect, useRef, useState } from "react";
import { Camera, RotateCcw, Download } from "lucide-react";

interface PhotoProps {
  img: HTMLImageElement;
  index: number;
}

const Photobooth: React.FC = () => {
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mergedCanvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  // State
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImages, setCapturedImages] = useState<PhotoProps[]>([]);
  const [originalImages, setOriginalImages] = useState<HTMLImageElement[]>([]);
  const [currentImages, setCurrentImages] = useState<PhotoProps[]>([]);
  const [showEditControls, setShowEditControls] = useState(false);
  const [effect, setEffect] = useState<string>("none");
  const [overlay, setOverlay] = useState<string>("none");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [photoCount, setPhotoCount] = useState<number>(4);
  const [delay, setDelay] = useState<number>(3);

  // Constants
  const photoWidth = 140;
  const photoHeight = 105;
  const padding = 8;

  useEffect(() => {
    requestCamera();
  }, []);

  useEffect(() => {
    if (currentImages.length > 0) {
      updateMergedCanvas();
    }
  }, [currentImages, effect, overlay, bgColor]);

  // Request camera access
  const requestCamera = () => {
    const constraints = {
      video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          videoRef.current.addEventListener("loadedmetadata", () => {
            if (
              canvasRef.current &&
              videoRef.current &&
              mergedCanvasRef.current
            ) {
              canvasRef.current.width = videoRef.current.videoWidth;
              canvasRef.current.height = videoRef.current.videoHeight;
              mergedCanvasRef.current.width = videoRef.current.videoWidth;
              mergedCanvasRef.current.height = videoRef.current.videoHeight;
            }
          });
        }
      })
      .catch((err) => {
        console.error("Error accessing webcam at high resolution:", err);
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play();

              videoRef.current.addEventListener("loadedmetadata", () => {
                if (
                  canvasRef.current &&
                  videoRef.current &&
                  mergedCanvasRef.current
                ) {
                  canvasRef.current.width = videoRef.current.videoWidth;
                  canvasRef.current.height = videoRef.current.videoHeight;
                  mergedCanvasRef.current.width = videoRef.current.videoWidth;
                  mergedCanvasRef.current.height = videoRef.current.videoHeight;
                }
              });
            }
          })
          .catch((err) => console.error("Error accessing webcam:", err));
      });
  };

  // Flash animation
  const triggerFlash = () => {
    if (flashRef.current) {
      flashRef.current.style.opacity = "0.9";
      setTimeout(() => {
        if (flashRef.current) {
          flashRef.current.style.opacity = "0";
        }
      }, 200);
    }
  };

  // Apply effects to image
  const applyEffect = (
    ctx: CanvasRenderingContext2D,
    effectType: string,
    width: number,
    height: number,
  ) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    switch (effectType) {
      case "sepia":
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
          data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
          data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        }
        break;

      case "grayscale":
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        }
        break;

      case "invert":
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        break;

      case "duotone":
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;

          if (avg < 128) {
            data[i] = avg * 2;
            data[i + 1] = 0;
            data[i + 2] = avg / 2;
          } else {
            data[i] = 255;
            data[i + 1] = (avg - 128) * 2;
            data[i + 2] = 255;
          }
        }
        break;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  // Draw overlay patterns
  const drawOverlay = (
    ctx: CanvasRenderingContext2D,
    type: string,
    width: number,
    height: number,
  ) => {
    ctx.save();

    switch (type) {
      case "hearts":
        ctx.fillStyle = "rgba(255, 105, 180, 0.3)";
        for (let i = 0; i < 15; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 10 + 5;

          ctx.beginPath();
          ctx.moveTo(x, y + size / 4);
          ctx.quadraticCurveTo(x, y, x - size / 2, y);
          ctx.quadraticCurveTo(x - size, y, x - size, y + size / 2);
          ctx.quadraticCurveTo(x - size, y + size, x, y + size * 1.5);
          ctx.quadraticCurveTo(x + size, y + size, x + size, y + size / 2);
          ctx.quadraticCurveTo(x + size, y, x + size / 2, y);
          ctx.quadraticCurveTo(x, y, x, y + size / 4);
          ctx.fill();
        }
        break;

      case "stars":
        ctx.fillStyle = "rgba(255, 215, 0, 0.4)";
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 6 + 4;
          const rotation = Math.random() * Math.PI;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);

          ctx.beginPath();
          for (let j = 0; j < 5; j++) {
            ctx.lineTo(
              Math.cos((j * 4 * Math.PI) / 5) * size,
              Math.sin((j * 4 * Math.PI) / 5) * size,
            );
            ctx.lineTo(
              (Math.cos(((j * 4 + 2) * Math.PI) / 5) * size) / 2,
              (Math.sin(((j * 4 + 2) * Math.PI) / 5) * size) / 2,
            );
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
        break;

      case "dots":
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const radius = Math.random() * 4 + 1;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        break;

      case "confetti":
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 5 + 1;

          ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 50%, 0.3)`;
          ctx.fillRect(x, y, size, size);
        }
        break;
    }

    ctx.restore();
  };

  // Extend CanvasRenderingContext2D with roundRect
  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) => {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    return ctx;
  };

  // Update merged canvas with current settings
  const updateMergedCanvas = () => {
    const mergedCtx = mergedCanvasRef.current?.getContext("2d");
    if (!mergedCtx || !mergedCanvasRef.current) return;

    const numPhotos = currentImages.length;
    const scaleFactor = 2;

    const scaledWidth = (photoWidth + padding * 2) * scaleFactor;
    const scaledHeight =
      (photoHeight * numPhotos + padding * (numPhotos + 1)) * scaleFactor;

    mergedCanvasRef.current.width = scaledWidth;
    mergedCanvasRef.current.height = scaledHeight;

    mergedCanvasRef.current.style.width = `${scaledWidth / scaleFactor}px`;
    mergedCanvasRef.current.style.height = `${scaledHeight / scaleFactor}px`;

    mergedCtx.fillStyle = bgColor;
    mergedCtx.fillRect(
      0,
      0,
      mergedCanvasRef.current.width,
      mergedCanvasRef.current.height,
    );

    for (let i = 0; i < currentImages.length; i++) {
      const item = currentImages[i];
      const y = (i * photoHeight + (i + 1) * padding) * scaleFactor;

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) continue;

      tempCanvas.width = item.img.width;
      tempCanvas.height = item.img.height;

      tempCtx.drawImage(item.img, 0, 0);

      if (effect !== "none") {
        applyEffect(tempCtx, effect, tempCanvas.width, tempCanvas.height);
      }

      if (overlay !== "none") {
        drawOverlay(tempCtx, overlay, tempCanvas.width, tempCanvas.height);
      }

      const imgRatio = tempCanvas.width / tempCanvas.height;

      let drawWidth, drawHeight;
      if (imgRatio > 1) {
        drawWidth = photoWidth * scaleFactor;
        drawHeight = (photoWidth / imgRatio) * scaleFactor;
      } else {
        drawHeight = photoHeight * scaleFactor;
        drawWidth = photoHeight * imgRatio * scaleFactor;
      }

      const xOffset = (mergedCanvasRef.current.width - drawWidth) / 2;

      mergedCtx.save();
      roundRect(
        mergedCtx,
        padding * scaleFactor,
        y,
        photoWidth * scaleFactor,
        photoHeight * scaleFactor,
        8 * scaleFactor,
      ).clip();

      mergedCtx.drawImage(tempCanvas, xOffset, y, drawWidth, drawHeight);

      mergedCtx.restore();
    }
  };

  // Capture a photo
  const capturePhoto = async (index: number) => {
    return new Promise<void>((resolve) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const video = videoRef.current;

      if (!canvas || !ctx || !video) return resolve();

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      const originalImgData = canvas.toDataURL("image/png", 1.0);

      const img = new Image();
      img.onload = () => {
        setOriginalImages((prev) => [...prev, img]);
        setCurrentImages((prev) => [...prev, { img, index }]);
        resolve();
      };
      img.src = originalImgData;
    });
  };

  // Create countdown timer
  const countdown = async (seconds: number) => {
    return new Promise<void>((resolve) => {
      const timer = timerRef.current;
      if (!timer) return resolve();

      timer.classList.remove("hidden");
      let timeLeft = seconds;
      timer.textContent = timeLeft.toString();

      const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(interval);
          timer.classList.add("hidden");
          triggerFlash();
          resolve();
        } else {
          timer.textContent = timeLeft.toString();
        }
      }, 1000);
    });
  };

  // Handle take photos button click
  const handleCapture = async () => {
    if (isCapturing) return;
    setIsCapturing(true);

    setCapturedImages([]);
    setCurrentImages([]);
    setOriginalImages([]);
    setShowEditControls(false);

    try {
      for (let i = 0; i < photoCount; i++) {
        await countdown(delay);
        await capturePhoto(i);
      }

      setShowEditControls(true);
    } catch (error) {
      console.error("Error during capture:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  // Handle download button click
  const handleDownload = () => {
    if (!mergedCanvasRef.current) return;

    const link = document.createElement("a");
    link.download = "snap-station-photos.png";
    link.href = mergedCanvasRef.current.toDataURL("image/png", 1.0);
    link.click();
  };

  // Handle retry button click
  const handleRetry = () => {
    setCapturedImages([]);
    setCurrentImages([]);
    setOriginalImages([]);
    setShowEditControls(false);
  };

  return (
    <div className="mt-20 min-h-screen min-w-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1
            className="dark:text-whitecus mb-2 text-4xl font-bold text-black sm:text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Snap Station
          </h1>
          <img
            src="/images/about/list.png"
            alt="list bottom"
            className="mx-auto mb-2 items-center"
          />
          <p className="dark:text-whitecus text-xl font-light text-black">
            Create beautiful photo strips with friends and family
          </p>
        </div>

        {/* Control Options */}
        <div className="mb-8 flex justify-center gap-4">
          {/* Photo Count Dropdown */}
          <div className="relative">
            <select
              value={photoCount}
              onChange={(e) => setPhotoCount(Number(e.target.value))}
              className="dark:border-whitecus dark:text-whitecus min-w-32 appearance-none rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-600 hover:shadow-md focus:ring-2 focus:ring-purple-200 focus:outline-none dark:bg-black"
            >
              <option value={1}>1 photo</option>
              <option value={2}>2 photos</option>
              <option value={3}>3 photos</option>
              <option value={4}>4 photos</option>
              <option value={5}>5 photos</option>
              <option value={6}>6 photos</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Delay Dropdown */}
          <div className="relative">
            <select
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
              className="dark:border-whitecus dark:text-whitecus min-w-32 appearance-none rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-600 hover:shadow-md focus:outline-none dark:bg-black"
            >
              <option value={1}>1s delay</option>
              <option value={2}>2s delay</option>
              <option value={3}>3s delay</option>
              <option value={5}>5s delay</option>
              <option value={10}>10s delay</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Camera Section - Left/Center */}
          <div className="lg:col-span-2">
            {/* Camera Preview */}
            <div className="relative mb-6 overflow-hidden rounded-3xl p-4 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl bg-[#828282]">
                <video
                  ref={videoRef}
                  className="h-auto scale-x-[-1] transform"
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "auto" }}
                />
                {/* Flash overlay */}
                <div
                  ref={flashRef}
                  className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200"
                />
                {/* Timer display */}
                <div
                  ref={timerRef}
                  className="bg-opacity-75 absolute top-6 left-6 hidden rounded-full bg-black px-4 py-2 text-3xl font-bold text-white"
                >
                  3
                </div>
              </div>
            </div>

            {/* Capture Button */}
            <div className="mb-6 flex justify-center">
              <button
                onClick={handleCapture}
                disabled={isCapturing}
                className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100 ${
                  isCapturing ? "animate-pulse" : ""
                }`}
              >
                <Camera size={32} />
              </button>
            </div>

            {/* Edit Controls */}
            {showEditControls && (
              <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Customize Your Photos
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {/* Effect */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Effect
                    </label>
                    <select
                      value={effect}
                      onChange={(e) => setEffect(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                    >
                      <option value="none">No Effect</option>
                      <option value="sepia">Sepia</option>
                      <option value="grayscale">Grayscale</option>
                      <option value="invert">Invert</option>
                      <option value="duotone">Duotone</option>
                    </select>
                  </div>

                  {/* Overlay */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Overlay
                    </label>
                    <select
                      value={overlay}
                      onChange={(e) => setOverlay(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                    >
                      <option value="none">No Overlay</option>
                      <option value="hearts">Hearts</option>
                      <option value="stars">Stars</option>
                      <option value="dots">Polka Dots</option>
                      <option value="confetti">Confetti</option>
                    </select>
                  </div>

                  {/* Background Color */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Background
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="h-10 w-16 cursor-pointer rounded-lg border border-gray-300"
                      />
                      <input
                        type="text"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white transition-all duration-200 hover:bg-green-600 hover:shadow-md"
                  >
                    <Download size={18} />
                    Download
                  </button>
                  <button
                    onClick={handleRetry}
                    className="flex items-center gap-2 rounded-lg bg-gray-500 px-6 py-3 text-white transition-all duration-200 hover:bg-gray-600 hover:shadow-md"
                  >
                    <RotateCcw size={18} />
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Photo Preview Section - Right */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Your Photos
              </h3>
              <div className="space-y-4">
                {currentImages.length > 0 ? (
                  currentImages.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-200 hover:shadow-xl"
                    >
                      <canvas
                        ref={(el) => {
                          if (el && item.img) {
                            const ctx = el.getContext("2d");
                            if (ctx) {
                              el.width = item.img.width;
                              el.height = item.img.height;
                              ctx.drawImage(item.img, 0, 0);
                            }
                          }
                        }}
                        className="h-auto w-full"
                      />
                    </div>
                  ))
                ) : (
                  <div className="space-y-4">
                    {Array.from({ length: photoCount }).map((_, index) => (
                      <div
                        key={index}
                        className="flex h-32 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-[#828282]"
                      >
                        <span className="text-gray-100">Photo {index + 1}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Final Strip Preview */}
              {currentImages.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-2 text-lg font-medium text-gray-800">
                    Final Strip
                  </h4>
                  <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
                    <canvas
                      ref={mergedCanvasRef}
                      className="mx-auto h-auto max-w-full rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden canvas for capture */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default Photobooth;
