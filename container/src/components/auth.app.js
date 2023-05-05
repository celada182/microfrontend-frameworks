import React , {useRef, useEffect} from 'react';
import {mount} from 'auth/Auth';
import {useHistory} from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({pathname: nextPathname}) => {
        if (history.location.pathname !== nextPathname){
          history.push(nextPathname)
        }
      },
      onSignIn
    });

    if (onParentNavigate) history.listen(onParentNavigate);

  }, []);  // Only run use effect when first render

  return <div ref={ref}/>
}

