import { useDispatch, useSelector } from "react-redux";

export default function useStore(pointer) {
  const [state] = [
    useSelector((state) => !pointer ? state : pointer
      .split(".")
      .reduce((acc, acv) => acc[acv], state)
    ),
    useDispatch(),
  ];
  return new Proxy(state, {
    get: (target, p) => p
      .split(".")
      .reduce((acc, acv) => acc[acv], target)
  })
}
