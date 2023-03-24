import Form from '../Form';
import useProxy from './useProxy';

export default function useForm() {
  return useProxy(Form.Object, 'form');
}

