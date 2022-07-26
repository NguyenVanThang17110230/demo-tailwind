const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['ncmaz.chisnghiax.com','/public']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)
