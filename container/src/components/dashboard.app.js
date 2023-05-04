import {mount} from 'dashboard/dashboard.app';


export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  }, []);  // Only run use effect when first render

  return <div ref={ref}/>
}
