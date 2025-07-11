/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',          // allow every path under that host
      },
          { protocol: "https", hostname: "media.istockphoto.com" },

    ],  
    domains: [ "img.freepik.com",
      "media.istockphoto.com",
      "www.shutterstock.com",
      "encrypted-tbn0.gstatic.com",
      "claroenergy.in",
      "images.unsplash.com",
      "img.freepik.com",
      "thumbs.dreamstime.com",
      "encrypted-tbn0.gstatic.com",
      "seia.org",
      "static.vecteezy.com",
      "bsmedia.business-standard.com",
      "bsmedia.business-standard.com",

    ],
  },
};
