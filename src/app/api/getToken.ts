// pages/api/getToken.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('grant_type', 'client_credentials');
    urlencoded.append('client_id', '660f0194c208b4f863b21706');
    urlencoded.append('client_secret', 'gxcg7nrqkuq2gcarv7mpjxmhxu13dvlpp5y7xjaxw2ux');
    urlencoded.append('scope', 'squidex-api');

    try {
      const response = await fetch('https://cloud.squidex.io/identity-server/connect/token', {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
      });

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
