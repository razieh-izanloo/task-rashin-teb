import { Link } from "react-router-dom";
import { useGetInfo } from "../hooks/useGetInfo";
import { PatientInfo } from "../components/patientInfo";
import { OrdersTable } from "../components/ordersTable";

function Home() {
  const { data, isLoading, isError } = useGetInfo();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container">
      {data && (
        <>
          <div className="text-center mb-2">
            <strong className="d-block">دانشگاه علوم پزشکی ایران</strong>
            <strong className="d-block">بیمارستان شهید هاشمی نژاد</strong>
          </div>
          <PatientInfo info={data} />
          <OrdersTable info={data} />
        </>
      )}
      <Link to="/test">test route</Link>
    </div>
  );
}

export default Home;
