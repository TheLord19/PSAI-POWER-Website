import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    // Adding the alias for `@` to point to `src` folder
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    
    return config;
  },
};

export default nextConfig;
