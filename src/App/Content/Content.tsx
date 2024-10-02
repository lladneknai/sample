import Container from "@mui/material/Container";
import { useAppDispatch, useAppSelector } from "../hooks";
import { amountAdded, incremented } from "../../features/counter/counterSlice";

import VanityPlate from "./VanityPlate/VanityPlate";
import { useFetchBreedsQuery } from "../../features/dogs/dogsApiSlice";

const Content = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const addOne = () => {
    dispatch(incremented());
  };

  const addN = (n: number) => {
    dispatch(amountAdded(n));
  };

  const { data = [], isFetching } = useFetchBreedsQuery();

  return (
    <Container maxWidth="xl" sx={{ paddingLeft: 0 }}>
      <button onClick={() => addOne()}>Add 1: {count}</button>
      <button onClick={() => addN(3)}>Add 3: {count}</button>
      <hr />
      <p>Dogs Fetched: {data.length}</p>
      <p>{isFetching ? "loading..." : "fetched."}</p>
      {/* <button onClick={() => }></button> */}
      <ul>
        {data.length > 0 && data.map((d) => <li key={d.id}>{d.name}</li>)}
      </ul>
      <VanityPlate />
    </Container>
  );
};

export default Content;
