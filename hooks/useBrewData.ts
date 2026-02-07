import { useState, useEffect, useCallback } from 'react';

export interface BrewData {
  isBrewing: boolean;
  time: number;
  yield: number;
  temperature: number;
  flowRate: number;
}

export function useBrewData() {
  const [data, setData] = useState<BrewData>({
    isBrewing: false,
    time: 0,
    yield: 0,
    temperature: 92.5,
    flowRate: 0,
  });

  const startBrewing = useCallback(() => {
    setData(prev => ({ ...prev, isBrewing: true, time: 0, yield: 0 }));
  }, []);

  const stopBrewing = useCallback(() => {
    setData(prev => ({ ...prev, isBrewing: false }));
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (data.isBrewing) {
      interval = setInterval(() => {
        setData(prev => {
          if (prev.time >= 30) {
            return { ...prev, isBrewing: false, flowRate: 0 };
          }
          const newFlowRate = 1.2 + Math.random() * 0.4;
          return {
            ...prev,
            time: prev.time + 1,
            yield: prev.yield + newFlowRate,
            flowRate: newFlowRate,
            temperature: 92.5 + (Math.random() - 0.5) * 0.2
          };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [data.isBrewing]);

  return { data, startBrewing, stopBrewing };
}
