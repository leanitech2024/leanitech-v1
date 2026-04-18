'use server';

import cloudinary from '@/configs/cloudinary';
import { ResourceApiResponse } from 'cloudinary';

export async function getResources() {
  try {
    const res = (await cloudinary.api.resources({
      // prefix: 'blog-covers/',
      type: 'upload',
      max_results: 60,
    })) as ResourceApiResponse;

    const secureUrls: string[] = [];
    res.resources.map((resource) => {
      secureUrls.push(resource.secure_url);
    });

    console.log('Secure URLs:', secureUrls);

    return res;
  } catch (error) {
    console.error('Error fetching resources from Cloudinary:', error);
    throw error;
  }
}

export async function getResoursesByFolder(folder: string) {
  try {
    const response = await cloudinary.api.resources_by_asset_folder(folder, {
      max_results: 100,
    });

    const result: {
      id: string;
      imgSrc: string;
      width: number;
      height: number;
      public_id: string;
    }[] = [];
    response.resources.map((resource) => {
      result.push({
        id: crypto.randomUUID(),
        imgSrc: resource.secure_url,
        width: resource.width,
        height: resource.height,
        public_id: resource.public_id,
      });
    });

    // console.log('result:', result);

    return result;
  } catch (error) {
    console.error('Error fetching resources from Cloudinary:', error);
    throw error;
  }
}
