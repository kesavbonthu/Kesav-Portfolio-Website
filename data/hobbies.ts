export interface HobbyPhoto {
  src: string;
  thumbnail: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

// Array order determines slideshow order. Add optimized images in public/photos.
export const hobbyPhotos: HobbyPhoto[] = [
  {
    "src": "/photos/bear.webp",
    "thumbnail": "/photos/bear-thumb.webp",
    "alt": "A brown bear walking through pale grasses",
    "caption": "Wild encounter",
    "width": 1600,
    "height": 1066
  },
  {
    "src": "/photos/snowy-valley.webp",
    "thumbnail": "/photos/snowy-valley-thumb.webp",
    "alt": "Snow-covered mountains above a wetland and evergreen forest",
    "caption": "Quiet waters",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/autumn.webp",
    "thumbnail": "/photos/autumn-thumb.webp",
    "alt": "Orange and red maple leaves in front of a modern building",
    "caption": "Autumn colors",
    "width": 1600,
    "height": 1066
  },
  {
    "src": "/photos/gull.webp",
    "thumbnail": "/photos/gull-thumb.webp",
    "alt": "A gray gull perched on a railing against a misty background",
    "caption": "A moment of stillness",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/coastal-flowers.webp",
    "thumbnail": "/photos/coastal-flowers-thumb.webp",
    "alt": "Yellow flowers beside driftwood and blue coastal water",
    "caption": "Along the shore",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/summit.webp",
    "thumbnail": "/photos/summit-thumb.webp",
    "alt": "Rocky mountain summit overlooking forested ridges",
    "caption": "Above the clouds",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/glacier.webp",
    "thumbnail": "/photos/glacier-thumb.webp",
    "alt": "A glacier flowing between snowy mountains toward boats on the water",
    "caption": "Ice and ocean",
    "width": 1600,
    "height": 1066
  },
  {
    "src": "/photos/forest-valley.webp",
    "thumbnail": "/photos/forest-valley-thumb.webp",
    "alt": "A forested valley and distant mountains framed by evergreen branches",
    "caption": "Through the trees",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/coastal-cypress.webp",
    "thumbnail": "/photos/coastal-cypress-thumb.webp",
    "alt": "A windswept cypress on a rocky coastal outcrop",
    "caption": "At the edge",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/seattle.webp",
    "thumbnail": "/photos/seattle-thumb.webp",
    "alt": "Seattle waterfront skyline beneath a bright blue sky",
    "caption": "City by the water",
    "width": 1600,
    "height": 1200
  },
  {
    "src": "/photos/sunset.webp",
    "thumbnail": "/photos/sunset-thumb.webp",
    "alt": "Orange sunset clouds over mountain silhouettes and water",
    "caption": "Last light",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/photos/mountain-waterfront.webp",
    "thumbnail": "/photos/mountain-waterfront-thumb.webp",
    "alt": "A snow-covered mountain rising behind waterfront buildings and a clock tower",
    "caption": "Beyond the city",
    "width": 1600,
    "height": 1066
  },
  {
    "src": "/photos/desert-city.webp",
    "thumbnail": "/photos/desert-city-thumb.webp",
    "alt": "Distant city towers backed by hazy desert mountains",
    "caption": "Desert horizon",
    "width": 1600,
    "height": 1200
  },
  {
    "src": "/photos/church.webp",
    "thumbnail": "/photos/church-thumb.webp",
    "alt": "A brick church with a green spire against distant snowy mountains",
    "caption": "A different perspective",
    "width": 1600,
    "height": 1200
  }
];
