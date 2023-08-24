module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/root/cms',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
