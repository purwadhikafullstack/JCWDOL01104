module.exports = {
  apps: [
    {
      name: "JCWDOL-011-04", // Format JCWD-{batchcode}-{groupnumber}
      script: "./projects/server/src/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 3104,
      },
      time: true,
    },
  ],
};
