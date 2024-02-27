import { Button } from '@mui/material';
import React, { ChangeEvent } from 'react';

type FromFILEbtnProps = {
  onImageUpload: (imageUrl: string) => void;
  endpoint: string
};

export default function FromFILEbtn({ onImageUpload, endpoint }: FromFILEbtnProps) {
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result?.toString().split(',')[1];
      if (!base64String) return;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ image: base64String }),
        });

        if (response.ok) {
          const data = await response.json();
          onImageUpload(data.imageUrl);
        } else {
          console.error('Erro ao enviar imagem');
        }
      } catch (error) {
        console.error('Erro ao enviar imagem:', error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor="upload-button">
    <input
      id="upload-button"
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      style={{ display: 'none' }}
    />
    <Button component="span" variant="contained" color="primary">
      Upload Image from File
    </Button>
  </label>
  );
};
