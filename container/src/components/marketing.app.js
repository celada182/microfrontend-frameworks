import React , {useRef, useEffect} from 'react';
import {mount} from 'marketing/Marketing';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, {
      onNavigate: () => { console.log('Container navigation in Marketing')}
    })
  });

  return <div ref={ref}/>
}

