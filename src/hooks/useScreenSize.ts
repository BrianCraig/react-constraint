import { useRef, useEffect, useCallback, useState } from "react";

const useEventListener = (eventName: string, handler: any, element = window) => {

  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: any) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]); 
}

export const useScreenSize = () => {
  const [refresh, setRefresh] = useState(Math.random());

  const handler = useCallback(() => {
    setRefresh(Math.random());
  }, [setRefresh]);
  useEventListener("resize", handler);

  return [window.innerWidth, window.innerHeight];
};
