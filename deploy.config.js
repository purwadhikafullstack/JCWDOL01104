module.exports = {
  apps: [
    {
      name: "JCWDOL-011-04", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
      time: true,
    },
  ],
};
