import { useStore } from './useStore';
import { filterSchema } from '../../utils';
import Form from '../Form';

export default function useForm() {
  return (function ProxyForm(pointer = 'form') {
    const { properties } = useStore(pointer);
    const obj = filterSchema(properties,
      (key) => properties[key].type === 'object'
    );
    return new Proxy(
      Object.assign(
        () => <Form.Object pointer={pointer} />,
        {
          ...Object
            .keys(obj)
            .reduce((obj, key) => Object.assign(obj, {
              [key]: ProxyForm(`${pointer}.properties.${key}`),
            }), {}),
        }
      ), {
      get: (target, p) => target[p.toLowerCase()],
    });
  })();
}


