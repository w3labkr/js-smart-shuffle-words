import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export default function MyComponent() {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [initialized, location]);
}
