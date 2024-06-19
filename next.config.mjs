/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const pwaConfig = {
    dest: 'public',
  };

const nextConfig = {
    images: {
        domains: ['aoouowcejyrmkywakdjl.supabase.co']
    }
};

export default withPWA(pwaConfig)(nextConfig);
