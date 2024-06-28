/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    //apiurl: 'http://localhost:8081/api/',
    apiurl: 'http://192.168.250.10:8081/api/',
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'raw.githubusercontent.com'
      }
    ]
  }
};

export default nextConfig;
