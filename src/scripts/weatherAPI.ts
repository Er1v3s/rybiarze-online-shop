import { getPosition } from "./geolocationAPI";

const doSomething = async () => {
  try {
    const userPosition = await getPosition();
    console.log(userPosition);
    return userPosition;
  } catch (err) {
    const userPosition = [53.14292, 22.98815];
    console.log(userPosition);
    return userPosition;
  }
};

doSomething();
