import { useDispatch, useSelector } from "react-redux";

export function useStore() {
  const [state] = [
    useSelector((state) => state),
    useDispatch(),
  ];
  return new Proxy(state, {
    get: (target, p) => p
      .split(".")
      .reduce((acc, acv) => acc[acv], target)
  })
}
