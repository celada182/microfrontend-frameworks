import React , {useRef, useEffect} from 'react';
import {mount} from 'marketing/Marketing';
import {useHistory} from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: ({pathname: nextPathname}) => {
        if (history.location.pathname !== nextPathname){
          history.push(nextPathname)
        }
      }
    });

    if (onParentNavigate) history.listen(onParentNavigate);

  }, []);  // Only run use effect when first render

  return <div ref={ref}/>
}

