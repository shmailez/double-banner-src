import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import BannerUp from './components/Banner-up';
import BannerDown from './components/Banner-down';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
  const handleResize = (event) => {
    setWidth(event.target.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
  }, []);

  const ref1 = useRef(false);

  const isInViewport1 = useIsInViewport(ref1);

  return (
    <div className="App">
      <BannerUp refParam={ref1} viewportWidth={width}/>
      <BannerDown inView={isInViewport1}  viewportWidth={width}/>
    </div>
  );

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
 
}

export default App;
