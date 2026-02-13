const neo4j = require('neo4j-driver');

const drivers = new Map();

const getDriverKey = ({ uri, user }) => `${uri}::${user}`;

const getDriver = ({ uri, user, password }) => {
  const key = getDriverKey({ uri, user });

  if (drivers.has(key)) {
    return drivers.get(key);
  }

  const driver = neo4j.driver(
    uri,
    neo4j.auth.basic(user, password)
  );

  drivers.set(key, driver);

  return driver;
};

module.exports = {
  getDriver
};
