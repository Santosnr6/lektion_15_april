import useCountStore from "./store/count-store";

function Display() {7
    const count = useCountStore(state => state.count);

  return (
    <p>Count: { count }</p>
  )
}

export default Display
