"use client";

import { useState, useEffect } from "react";
import { transformCloudinary } from "@/lib/cloudinary-client";

const FALLBACK_POOL = [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2000",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000",
    "https://images.unsplash.com/photo-1533750349088-cd8c2a7bb643?q=80&w=2000",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000",
];

export function useCloudinaryPool(folder: string = "", count: number = 10, type: string = "image") {
    let targetFolder = folder;

    const [images, setImages] = useState<string[]>(FALLBACK_POOL);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPool = async () => {
            try {
                let endpoint = targetFolder ? `/api/media/featured?folder=${targetFolder}` : `/api/media/featured`;
                if (type !== 'image') endpoint += (targetFolder ? `&` : `?`) + `type=${type}`;
                endpoint += `${endpoint.includes('?') ? '&' : '?'}_t=${Date.now()}`;
                const res = await fetch(endpoint);
                if (!res.ok) throw new Error(`API ${res.status}`);
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    const imageUrls = data
                        .filter((item: any) => item.resource_type === "image" && item.secure_url)
                        .map((item: any) => item.secure_url);

                    if (imageUrls.length > 0) {
                        setImages(imageUrls);
                    }
                }
            } catch (err) {
                console.warn("Cloudinary pool: using fallback images", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPool();
    }, []);

    // Helper to get a deterministic image from the pool based on an index
    const getRandomImage = (index: number = 0) => {
        const rawUrl = images[index % images.length];
        return transformCloudinary(rawUrl);
    };

    return { images, getRandomImage, loading };
}
