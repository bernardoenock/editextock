import fs from 'fs';
import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const base64String = req.body.image;
      const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const fileName = `image_${Date.now()}.png`;
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

      fs.writeFileSync(filePath, buffer, 'base64');

      const imageUrl = `/uploads/${fileName}`; 
      res.status(200).json({ imageUrl });
    } catch (error) {
      console.error('Erro ao salvar imagem:', error);
      res.status(500).json({ error: 'Erro ao salvar imagem' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}