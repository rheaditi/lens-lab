export type CameraId = 'a7c' | 'a7c2';
export type LensId = 't70180' | 's400600';

export type Camera = {
  id: CameraId;
  name: string;
  brand: string;
  model: string;
  color: string;
  sensorSize: number;
  url: string;
};

export type Lens = {
  id: LensId;
  brand: string;
  fullName: string;
  maxAperture: number;
  maxFocalLength: number;
  minAperture: number;
  minFocalLength: number;
  model: string;
  name: string;
  tags: string[];
  weightGrams?: number;
  url: string;
}

export const Camera: Record<CameraId, Camera> = {
  a7c: {
    id: 'a7c',
    name: 'A7C',
    brand: 'Sony',
    model: 'ILCE-7C',
    color: 'black',
    sensorSize: 35,
    url: 'https://www.sony.co.in/interchangeable-lens-cameras/products/ilce-7c/spec'
  },
  a7c2: {
    id: 'a7c2',
    name: 'A7C II',
    brand: 'Sony',
    model: 'ILCE-7CM2',
    color: 'silver',
    sensorSize: 35,
    url: 'https://www.sony.co.in/interchangeable-lens-cameras/products/ilce-7cm2/spec'
  },
} as const;

export const Lens: Record<LensId, Lens> = {
  t70180: {
    id: 't70180',
    name: 'Tamron 70-180mm f/2.8',
    fullName: 'Tamron 70-180mm F/2.8 Di III VC VXD G2',
    minAperture: 2.8,
    maxAperture: 22,
    brand: 'Tamron',
    model: 'A065',
    minFocalLength: 70,
    maxFocalLength: 180,
    tags: ['Full Frame', 'Telephoto', 'Zoom', 'Variable Aperture'],
    url: 'https://tamron.in/product/a065'
  },
  s400600: {
    id: 's400600',
    name: 'Sony 400-600mm',
    fullName: 'Sony FE 200–600 mm F5.6–6.3 G OSS',
    maxAperture: 6.3,
    maxFocalLength: 600,
    minAperture: 5.6,
    minFocalLength: 400,
    brand: 'Sony',
    model: 'SEL200600g',
    tags: ['Full Frame', 'Telephoto', 'Zoom', 'Variable Aperture'],
    weightGrams: 2115,
    url: 'https://www.sony.co.in/electronics/camera-lenses/sel200600g/specifications'
  }
} as const;

export const Cameras = Object.values(Camera);
export const Lenses = Object.values(Lens);
export const CameraIds = Object.keys(Camera);
export const LensIds = Object.keys(Lens);
