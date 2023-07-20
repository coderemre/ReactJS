import { useEffect, useState } from "react";

export const useCountdown = (startDate: any, finalDate: any) => {
  const countDownDate = finalDate;
  const [countDown, setCountDown] = useState(countDownDate - Date.now());
  const [progressCount, setProgressCount] = useState(
    ((Date.now() - startDate) * 100) / (finalDate - startDate)
  );

  useEffect(() => {
    if (Date.now() > countDownDate) {
      setCountDown(0);
      setProgressCount(0);
    } else {
      const interval = setInterval(() => {
        if (Date.now() <= countDownDate) {
          setCountDown(countDownDate - Date.now());
          setProgressCount(
            ((Date.now() - startDate) * 100) / (finalDate - startDate)
          );
        }
      }, 1000);

      return () => clearInterval(interval);
    }
    return () => false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDownDate]);

  if (startDate == 0 && finalDate == 0) {
    return [-1, -1, -1, -1, 20];
  }

  if (Date.now() > countDownDate) {
    return [-1, -1, -1, -1, -1];
  }

  return getReturnValues(countDown, progressCount);
};

const getReturnValues = (countDown: any, progressCount: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds, progressCount];
};
