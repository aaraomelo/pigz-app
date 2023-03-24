import Flow from '../Flow';
import useProxy from './useProxy';

export default function useFlow() {
  return useProxy(Flow, 'flow');
}
