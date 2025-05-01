"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';


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
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  // State
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImages, setCapturedImages] = useState<PhotoProps[]>([]);
  const [originalImages, setOriginalImages] = useState<HTMLImageElement[]>([]);
  const [currentImages, setCurrentImages] = useState<PhotoProps[]>([]);
  const [showEditControls, setShowEditControls] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [effect, setEffect] = useState<string>('none');
  const [overlay, setOverlay] = useState<string>('none');
  const [bgColor, setBgColor] = useState<string>('#ffffff');

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
        height: { ideal: 1080 }
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          
          videoRef.current.addEventListener('loadedmetadata', () => {
            if (canvasRef.current && videoRef.current && mergedCanvasRef.current) {
              canvasRef.current.width = videoRef.current.videoWidth;
              canvasRef.current.height = videoRef.current.videoHeight;
              mergedCanvasRef.current.width = videoRef.current.videoWidth;
              mergedCanvasRef.current.height = videoRef.current.videoHeight;
            }
          });
        }
      })
      .catch(err => {
        console.error('Error accessing webcam at high resolution:', err);
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
              
              videoRef.current.addEventListener('loadedmetadata', () => {
                if (canvasRef.current && videoRef.current && mergedCanvasRef.current) {
                  canvasRef.current.width = videoRef.current.videoWidth;
                  canvasRef.current.height = videoRef.current.videoHeight;
                  mergedCanvasRef.current.width = videoRef.current.videoWidth;
                  mergedCanvasRef.current.height = videoRef.current.videoHeight;
                }
              });
            }
          })
          .catch(err => console.error('Error accessing webcam:', err));
      });
  };

  // Flash animation
  const triggerFlash = () => {
    if (flashRef.current) {
      flashRef.current.style.opacity = '0.9';
      setTimeout(() => {
        if (flashRef.current) {
          flashRef.current.style.opacity = '0';
        }
      }, 200);
    }
  };

  // Apply effects to image
  const applyEffect = (ctx: CanvasRenderingContext2D, effectType: string, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    switch (effectType) {
      case 'sepia':
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          data[i] = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
          data[i + 1] = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
          data[i + 2] = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
        }
        break;
        
      case 'grayscale':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        }
        break;
        
      case 'invert':
        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
        break;
        
      case 'duotone':
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          
          if (avg < 128) {
            data[i] = avg * 2;     // Red channel for darker areas
            data[i + 1] = 0;       // Green
            data[i + 2] = avg / 2; // Blue
          } else {
            data[i] = 255;         // Red
            data[i + 1] = (avg - 128) * 2; // Green
            data[i + 2] = 255;     // Blue
          }
        }
        break;
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  // Draw overlay patterns
  const drawOverlay = (ctx: CanvasRenderingContext2D, type: string, width: number, height: number) => {
    ctx.save();
    
    switch (type) {
      case 'hearts':
        ctx.fillStyle = 'rgba(255, 105, 180, 0.3)';
        for (let i = 0; i < 15; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 10 + 5;
          
          // Draw heart
          ctx.beginPath();
          ctx.moveTo(x, y + size/4);
          ctx.quadraticCurveTo(x, y, x - size/2, y);
          ctx.quadraticCurveTo(x - size, y, x - size, y + size/2);
          ctx.quadraticCurveTo(x - size, y + size, x, y + size * 1.5);
          ctx.quadraticCurveTo(x + size, y + size, x + size, y + size/2);
          ctx.quadraticCurveTo(x + size, y, x + size/2, y);
          ctx.quadraticCurveTo(x, y, x, y + size/4);
          ctx.fill();
        }
        break;
        
      case 'stars':
        ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 6 + 4;
          const rotation = Math.random() * Math.PI;
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation);
          
          // Draw star
          ctx.beginPath();
          for (let j = 0; j < 5; j++) {
            ctx.lineTo(Math.cos((j * 4 * Math.PI) / 5) * size, 
                      Math.sin((j * 4 * Math.PI) / 5) * size);
            ctx.lineTo(Math.cos(((j * 4 + 2) * Math.PI) / 5) * size / 2, 
                      Math.sin(((j * 4 + 2) * Math.PI) / 5) * size / 2);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
        break;
        
      case 'dots':
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const radius = Math.random() * 4 + 1;
          
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case 'confetti':
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 5 + 1;
          
          ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 50%, 0.3)`;
          ctx.fillRect(x, y, size, size);
        }
        break;
        
      case 'rainbow':
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 5 + 1;
          const hue = Math.random() * 360;
          
          ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.3)`;
          ctx.fillRect(x, y, size, size);
        }
        break;
        
      case 'squares':
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        for (let i = 0; i < 50; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          const size = Math.random() * 10 + 5;
          
          ctx.fillRect(x, y, size, size);
        }
        break;
        
      case 'lines':
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 50; i++) {
          const x1 = Math.random() * width;
          const y1 = Math.random() * height;
          const x2 = Math.random() * width;
          const y2 = Math.random() * height;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
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
    radius: number
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
    const mergedCtx = mergedCanvasRef.current?.getContext('2d');
    if (!mergedCtx || !mergedCanvasRef.current) return;

    // Calculate dimensions based on the photos
    const numPhotos = currentImages.length;
    const scaleFactor = 2; // Increase resolution by factor of 2
    
    // Scale up dimensions while maintaining aspect ratio
    const scaledWidth = (photoWidth + (padding * 2)) * scaleFactor;
    const scaledHeight = ((photoHeight * numPhotos) + (padding * (numPhotos + 1))) * scaleFactor;
    
    // Resize the merged canvas
    mergedCanvasRef.current.width = scaledWidth;
    mergedCanvasRef.current.height = scaledHeight;
    
    // Apply CSS to ensure it displays at the original size
    mergedCanvasRef.current.style.width = `${scaledWidth/scaleFactor}px`;
    mergedCanvasRef.current.style.height = `${scaledHeight/scaleFactor}px`;
    
    // Draw background
    mergedCtx.fillStyle = bgColor;
    mergedCtx.fillRect(0, 0, mergedCanvasRef.current.width, mergedCanvasRef.current.height);
    
    // Process each image with the current effect and overlay settings
    for (let i = 0; i < currentImages.length; i++) {
      const item = currentImages[i];
      const y = (i * photoHeight + (i + 1) * padding) * scaleFactor;
      
      // Use a temporary canvas to apply effects to each image
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) continue;
      
      tempCanvas.width = item.img.width;
      tempCanvas.height = item.img.height;
      
      // Draw the original image
      tempCtx.drawImage(item.img, 0, 0);
      
      // Apply selected effect
      if (effect !== 'none') {
        applyEffect(tempCtx, effect, tempCanvas.width, tempCanvas.height);
      }
      
      // Apply selected overlay
      if (overlay !== 'none') {
        drawOverlay(tempCtx, overlay, tempCanvas.width, tempCanvas.height);
      }
      
      // Scale image dimensions
      const imgRatio = tempCanvas.width / tempCanvas.height;
      
      let drawWidth, drawHeight;
      if (imgRatio > 1) {
        // Landscape
        drawWidth = photoWidth * scaleFactor;
        drawHeight = (photoWidth / imgRatio) * scaleFactor;
      } else {
        // Portrait
        drawHeight = photoHeight * scaleFactor;
        drawWidth = (photoHeight * imgRatio) * scaleFactor;
      }
      
      // Center the image horizontally
      const xOffset = (mergedCanvasRef.current.width - drawWidth) / 2;
      
      // Create clipping path for rounded corners
      mergedCtx.save();
      roundRect(
        mergedCtx,
        padding * scaleFactor,
        y,
        photoWidth * scaleFactor,
        photoHeight * scaleFactor,
        8 * scaleFactor
      ).clip();
      
      // Draw the processed image
      mergedCtx.drawImage(tempCanvas, xOffset, y, drawWidth, drawHeight);
      
      // Restore context
      mergedCtx.restore();
    }
  };

  // Capture a photo
  const capturePhoto = async (index: number) => {
    return new Promise<void>(resolve => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const video = videoRef.current;
      
      if (!canvas || !ctx || !video) return resolve();
      
      // Capture image at full resolution
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      
      // Save the original image data
      const originalImgData = canvas.toDataURL('image/png', 1.0);
      
      // Create original image object
      const img = new Image();
      img.onload = () => {
        // Store original image for later use with effects
        setOriginalImages(prev => [...prev, img]);
        
        // Add to current images
        setCurrentImages(prev => [...prev, { img, index }]);
        
        resolve();
      };
      img.src = originalImgData;
    });
  };

  // Create countdown timer
  const countdown = async (seconds: number) => {
    return new Promise<void>(resolve => {
      const timer = timerRef.current;
      if (!timer) return resolve();

      timer.classList.remove('hidden');
      let timeLeft = seconds;
      timer.textContent = timeLeft.toString();
      
      const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
          clearInterval(interval);
          timer.classList.add('hidden');
          triggerFlash();
          resolve();
        } else {
          timer.textContent = timeLeft.toString();
        }
      }, 1000);
    });
  };

  // Create background bubbles


  // Handle take photos button click
  const handleCapture = async () => {
    if (isCapturing) return;
    setIsCapturing(true);
    
    setCapturedImages([]);
    setCurrentImages([]);
    setOriginalImages([]);
    setShowEditControls(false);
    
    try {
      const styles = ['none', 'none', 'none', 'none']; // All without filter
      
      for (let i = 0; i < styles.length; i++) {
        await countdown(3);
        await capturePhoto(i);
      }
      
      setShowEditControls(true);
    } catch (error) {
      console.error('Error during capture:', error);
    } finally {
      setIsCapturing(false);
    }
  };

  // Handle download button click
  const handleDownload = () => {
    if (!mergedCanvasRef.current) return;
    
    const link = document.createElement('a');
    link.download = 'photobooth_picture.png';
    link.href = mergedCanvasRef.current.toDataURL('image/png', 1.0);
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
    <div className="flex flex-col items-center justify-center min-h-screen ">

      
      <div className="rounded-xl bg-white bg-opacity-80 p-6 backdrop-blur-sm shadow-lg mb-4 fade-in">
        <h1 className="text-3xl font-bold mb-1 text-center text-pink-600 float-animation">@SID-7 Photobooth</h1>
        <p className="text-sm text-center text-gray-600 mb-3">Photobooth Online Yuk! Biar kelas kita kompak</p>
      </div>
      
      <div className="flex flex-row items-start gap-8 fade-in">
        {/* Left column: fixed camera, controls, and timer */}
        <div className="flex flex-col items-center">
          {/* Camera container with frame */}
          <div className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg mb-4">
            <div className="relative w-64 h-48">
              <video
                ref={videoRef}
                className="rounded-lg transform scale-x-[-1] w-64 h-auto"
                autoPlay
                playsInline
              />
              {/* Flash overlay */}
              <div
                ref={flashRef}
                className="absolute inset-0 bg-white opacity-0 transition-opacity rounded-lg"
              />
              {/* Timer display */}
              <div ref={timerRef} className="hidden absolute top-10 left-10 bg-black bg-opacity-70 text-white p-1 px-3 rounded-md text-2xl">3</div>
            </div>
          </div>
          
          {/* Controls section */}
          <div className="flex flex-col gap-2 w-full bg-white rounded-xl shadow-md p-4">
            {/* Effect selection */}
            {showEditControls && (
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Effect:</label>
                <select
                  value={effect}
                  onChange={(e) => setEffect(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="none">No Effect</option>
                  <option value="sepia">Sepia</option>
                  <option value="grayscale">Grayscale</option>
                  <option value="invert">Invert</option>
                  <option value="duotone">Duotone</option>
                </select>
              </div>
            )}
            
            {/* Frame overlay selection */}
            {showEditControls && (
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Frame Overlay:</label>
                <select
                  value={overlay}
                  onChange={(e) => setOverlay(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="none">No Frame</option>
                  <option value="hearts">Hearts</option>
                  <option value="stars">Stars</option>
                  <option value="dots">Polka Dots</option>
                  <option value="confetti">Confetti</option>
                  <option value="rainbow">Rainbow</option>
                  <option value="squares">Squares</option>
                  <option value="lines">Lines</option>
                </select>
              </div>
            )}
            
            {/* Background color control */}
            {showEditControls && (
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-700">Background Color:</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="h-8 w-8 border rounded cursor-pointer"
                />
              </div>
            )}
            
            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleCapture}
                disabled={isCapturing}
                className={`btn px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm flex items-center justify-center ${isCapturing ? 'opacity-50' : ''}`}
              >
                <Camera size={16} className="mr-1" /> Take Photos
              </button>
              
              {currentImages.length > 0 && (
                <button
                  onClick={handleDownload}
                  className="btn px-3 py-1.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-sm flex items-center justify-center"
                >
                  <i className="fas fa-download mr-1"></i> Save
                </button>
              )}
              
              {currentImages.length > 0 && (
                <button
                  onClick={handleRetry}
                  className="btn px-3 py-1.5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-lg text-sm flex items-center justify-center"
                >
                  <i className="fas fa-redo mr-1"></i> Retry
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Right column: result container */}
        {currentImages.length > 0 && (
          <div className="photo-strip fade-in">
            <canvas ref={mergedCanvasRef} className="rounded" />
          </div>
        )}
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
      
      {/* CSS Styles */}
      <style jsx>{`
       
        /* Rounded corners on canvas */
        canvas.rounded {
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .photo-strip:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        
        /* Stylish buttons */
        .btn {
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
        
        .btn:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: rgba(0,0,0,0.2);
          transition: all 0.2s;
          z-index: -1;
        }
        
        .btn:hover:before {
          width: 100%;
        }
        
        .btn:active {
          transform: scale(0.95);
        }
        
        /* Bubble animations */
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          animation: float-up 10s linear infinite;
          z-index: -1;
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        /* Hide canvas */
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Photobooth;