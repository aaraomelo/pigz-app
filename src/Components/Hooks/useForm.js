import Form from '../Form';
import { useStore } from './useStore';

export default function useForm() {
  return (function ProxyForm(pointer = 'form') {
    const { properties } = useStore()[pointer]
    const obj = Object
      .keys(properties)
      .filter((key) => properties[key].type === 'object')
      .reduce((obj, key) => Object.assign(obj, {
        [key]: properties[key]
      }), {});
    return new Proxy(
      Object.assign(
        () => <Form.Object pointer={pointer} />,
        {
          ...Object
            .keys(obj)
            .reduce((obj, key) => Object.assign(obj, {
              [key]: ProxyForm(`${pointer}.properties.${key}`)
            }), {})
        }
      ), {
      get: (target, p) => target[p.toLowerCase()],
    })
  })();
}


