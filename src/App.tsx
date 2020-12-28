import { Line } from "react-chartjs-2";
import "./App.css";
import useAxios from "axios-hooks";

const baseDataset = {
  label: "My First dataset",
  backgroundColor: "rgba(255,99,132,0.2)",
  borderColor: "rgba(255,99,132,1)",
  borderWidth: 1,
  hoverBackgroundColor: "rgba(255,99,132,0.4)",
  hoverBorderColor: "rgba(255,99,132,1)",
};

function App() {
  //fetch data
  let [{ data, loading, error }] = useAxios("edge_api_result_FL_p.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const graph = {
    labels: data.data.items.map((item) => item.localtime),
    datasets: [
      {
        ...baseDataset,
        data: data.data.items.map((item) => item.FL_p),
      },
    ],
  };

  return (
    <div>
      <Line
        className="bar"
        data={graph}
        width={100}
        height={500}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default App;
