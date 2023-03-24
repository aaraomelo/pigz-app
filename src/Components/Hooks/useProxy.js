import useStore from './useStore';
import { filterSchema } from '../../utils';

export default function useProxy(Element, p) {
  return (function ElementProxy(pointer) {
    const { properties } = useStore(pointer);
    const obj = filterSchema(properties,
      (key) => properties[key].type === 'object'
    );
    return new Proxy(
      Object.assign(
        (props) => <Element pointer={pointer} {...props} />,
        {
          ...Object
            .keys(obj)
            .reduce((obj, key) => Object.assign(obj, {
              [key]: ElementProxy(`${pointer}.properties.${key}`),
            }), {}),
        }
      ), {
      get: (target, p) => target[p.toLowerCase()],
    });
  })(p);
}
