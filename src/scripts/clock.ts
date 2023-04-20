const Calendar = (htmlElement: HTMLElement) => {
  const currentDate = new Date();
  htmlElement.innerText = currentDate.toLocaleString([], {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const Clock = (htmlElement: HTMLElement) => {
  const clock = () => {
    const date = new Date();
    htmlElement.innerText = date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  clock();
  setInterval(clock, 1000);
};

export { Clock, Calendar };
