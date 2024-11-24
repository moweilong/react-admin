import useCounterStore from "@/store/counter";

const Home = () => {

  const {counter,increase}=useCounterStore();

  const handleClick =()=>{
    increase(1)
  }

  return (
    <div>
      <div>Home Page</div>
      <button onClick={handleClick}>counter: {counter}</button>
    </div>
  );
};

export default Home;