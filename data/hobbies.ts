export interface HobbyPhoto {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

// Add your photos to public/photos, then add their details here.
// Example: { src: "/photos/trail.jpg", alt: "A forest trail at sunrise", caption: "Morning hike", width: 1600, height: 1200 }
export const hobbyPhotos: HobbyPhoto[] = [];
