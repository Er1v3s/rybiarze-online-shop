export const getPosition = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    const success = (position: GeolocationPosition) => {
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;
      resolve([latitude, longitude]);
    };

    const error = (err: GeolocationPositionError) => {
      reject(err.message);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 10000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
};
