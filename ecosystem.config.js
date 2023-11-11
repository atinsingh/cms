module.exports = {
  apps: [
    {
      name: 'cms',
      cwd: '/root/cms',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
