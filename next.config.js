/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  generateBuildId: async () => {
    return Date.now().toString()
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
