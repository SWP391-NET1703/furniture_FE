import { useEffect, useState } from "react";

const Report = (props) => {
  const [listReport, setListReport] = useState([]);
  console.log(props);
  useEffect(() => {
    fetch(`https://home-vintage-backend.onrender.com/interiors/${props._id}`)
      .then((res) => res.json())
      .then((data) => {
        const { interior } = data;
        const { list_report } = interior;
        console.log(list_report);
        setListReport(list_report);
      });
  }, []);
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold text-primeColor">Report</h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {listReport.map((item) => (
          <div key={item._id} className="w-full h-full">
            <div>{item.rate_interior}</div>
            <div>{item.customer_name}</div>
            <div>{item.description}</div>
            <img
              src={item.img}
              alt={"ahihi"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Report;
