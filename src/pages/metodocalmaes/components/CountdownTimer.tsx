import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date();
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      const timeDiff = lastDayOfMonth.getTime() - now.getTime();
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysLeft(Math.max(0, daysRemaining));
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 3600); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-bold text-warning">
      {daysLeft} {daysLeft === 1 ? 'día' : 'días'} restantes
    </span>
  );
};