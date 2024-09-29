// src/ImagePreview.tsx
import React, { useState } from 'react';

const ImagePreview: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
            />
            {image && (
                <img
                    src={image}
                    alt="Preview"
                    className="max-w-xs rounded-lg border border-gray-300"
                />
            )}
        </div>
    );
};

export default ImagePreview;
