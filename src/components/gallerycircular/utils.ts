/**
 * Utility functions for the Circular Gallery component
 */

import {  Texture, Renderer } from "ogl";

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: number;
  return function (this: any, ...args: Parameters<T>) {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Linear interpolation between two values
 */
export function lerp(p1: number, p2: number, t: number): number {
  return p1 + (p2 - p1) * t;
}

/**
 * Automatically bind class methods to their instance
 */
export function autoBind(instance: any): void {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance);
    }
  });
}

/**
 * Extract font size from font string
 */
export function getFontSize(font: string): number {
  const match = font.match(/(\d+)px/);
  return match ? parseInt(match[1], 10) : 30;
}

/**
 * Create a texture with text rendered on it
 */
export function createTextTexture(
  gl: Renderer,
  text: string,
  font: string = "bold 30px monospace",
  color: string = "black",
): { texture: Texture; width: number; height: number } {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not get 2d context");

  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const fontSize = getFontSize(font);
  const textHeight = Math.ceil(fontSize * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl.gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

// Type definitions
export interface ScreenSize {
  width: number;
  height: number;
}

export interface Viewport {
  width: number;
  height: number;
}

export interface GalleryItem {
  image: string;
  text: string;
}

export interface AppConfig {
  items?: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
}

// Default gallery items
export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  { image: `/images/anggota/asbi.png`, text: "Asbi Ramadhan" },
  { image: `/images/anggota/adam.png`, text: "Adam Putra" },
  { image: `/images/anggota/ching.png`, text: "Shoun Saechhing" },
  { image: `/images/anggota/sendy.png`, text: "Sendy Oktavian" },
  { image: `/images/anggota/cinta.png`, text: "Cinta Allodya" },
  { image: `/images/anggota/hamka.png`, text: "Hamka Zainardhi" },
 
];