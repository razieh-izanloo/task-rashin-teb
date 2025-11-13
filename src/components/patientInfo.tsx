import type { Info } from "../types/info";

export const PatientInfo = (props: { info: Info }) => {
  const { info } = props;
  return (
    <table className="table mb-0 border-b-0">
      <thead>
        <tr>
          <th>
            <div className="d-flex justify-content-between">
              <span>شماره پرونده:</span>
              <span>Unit No:</span>
            </div>
            <span className="d-block text-center">{info.unitNo}</span>
          </th>

          <th
            colSpan={2}
            style={{ width: "400px" }}
            className="border-start-0  border-top-0"
          >
            <span className="d-block text-center fs-4">برگ دستورات پزشک</span>
            <span className="d-block text-center fs-6">
              PHYSICIAN'S ORDER SHEET
            </span>
          </th>

          <th scope="col" className="d-flex justify-content-end border-0">
            <img src={info.image} alt="logo" width="100" height="100" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex justify-content-between">
              <span>نام خانوادگی:</span>
              <span> :Family Name</span>
            </div>
            <span className="d-block text-center">{info.familyName}</span>
          </td>
          <td>
            <div className="d-flex justify-content-between">
              <span>نام:</span>
              <span> :Name</span>
            </div>
            <span className="d-block text-center">{info.name}</span>
          </td>
          <td rowSpan={2} className="d-flex border-0">
            <div className="d-flex flex-column w-100">
              <div
                style={{ border: "none" }}
                className="d-flex justify-content-between"
              >
                <div>
                  <span>بخش:</span>
                  <span className="px-1">{info.ward}</span>
                </div>
                <span className="d-block">:Ward</span>
              </div>
              <div
                style={{ border: "none" }}
                className="d-flex justify-content-between my-3"
              >
                <div>
                  <span>اتاق:</span>
                  <span className="px-1">{info.room}</span>
                </div>
                <span className="d-block">:Room</span>
              </div>
              <div
                style={{ border: "none" }}
                className="d-flex justify-content-between"
              >
                <div>
                  <span>تخت:</span>
                  <span className="px-1">{info.bed}</span>
                </div>
                <span className="d-block">:Bed</span>
              </div>{" "}
            </div>
          </td>
          <td style={{ width: "33%" }}>
            <div className="d-flex justify-content-between">
              <span> پزشک معالج:</span>
              <span> :Physicians Attending</span>
            </div>
            <span className="d-block text-center">{info.doctor}</span>
          </td>
        </tr>
        <tr className="border-b-0">
          <td className="border-b-0">
            <div className="d-flex justify-content-between">
              <span>نام پدر:</span>
              <span> :Father Name</span>
            </div>
            <span className="d-block text-center">{info.fatherName}</span>
          </td>
          <td className="border-b-0">
            <div className="d-flex justify-content-between">
              <span> تاریخ تولد:</span>
              <span> :Date of Birth</span>
            </div>
            <span className="d-block text-center">{info.dateOfBirth}</span>
          </td>
          <td className="border-b-0">ردیف 2 - ستون 4 بزرگتر</td>
          <td className="border-b-0">
            <div className="d-flex justify-content-between">
              <span> تاریخ پذیرش:</span>
              <span> :Date of Admission</span>
            </div>
            <span className="d-block text-center">{info.date}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
