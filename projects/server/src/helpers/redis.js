import redis from "redis";

const optionRedis = {
  host: "localhost",
  port: 6379,
};

let client = redis.createClient(optionRedis);
(async () => {
  client = redis.createClient(6379);
  client.on("error", (error) => console.error(`Error : ${error}`));
  await client.connect();
})();

const getRedis = async (key) => {
  const data = await client.get(key);
  return JSON.parse(data);
};

const setExRedis = async (key, payload) => {
  const data = JSON.stringify(payload);
  return client.setEx(key, 3600, data);
};

const redisClient = { getRedis, setExRedis };

export default redisClient;
