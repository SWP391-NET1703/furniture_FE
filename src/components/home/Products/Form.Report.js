const FormReport = (props) => {
  return (
    <div className="w-full h-full p-4">
      <h1 className="text-2xl font-bold text-primeColor">Form Report</h1>
      <form className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full">
          <label htmlFor="rate_interior">Rate Interior</label>
          <input
            type="text"
            id="rate_interior"
            name="rate_interior"
            className="w-full h-10 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="w-full h-full">
          <label htmlFor="customer_name">Customer Name</label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            className="w-full h-10 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="w-full h-full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full h-40 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="w-full h-full">
          <label htmlFor="img">Image</label>
          <input
            type="file"
            id="img"
            name="img"
            className="w-full h-10 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="w-full h-full">
          <button
            type="submit"
            className="w-full h-10 bg-primeColor text-white font-bold rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormReport;
