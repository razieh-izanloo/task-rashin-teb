import type { Info } from "../types/info";
import { Footer } from "./footer";

export const OrdersTable = (props: { info: Info }) => {
  const { info } = props;
  const ths = [
    { titleFa: "تاریخ", titleEn: "Date", width: "20%" },
    { titleFa: "ساعت", titleEn: "Time", width: "15%" },
    { titleFa: "دستورات", width: "%", titleEn: "Orders" },
    {
      titleFa: "امضا پزشک / امضا پرستار",
      titleEn: "Signature of Physicians/Signature of Nurses",
      width: "25%",
      classEn: "text-12px d-block mt-4",
    },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center">
        <thead>
          <tr>
            {ths.map((item) => (
              <th key={item.titleFa} style={{ width: item.width }}>
                <span>{item.titleFa}</span>
                <span className={item.classEn ? item.classEn : "d-block mt-4"}>
                  {item.titleEn}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ minHeight: "300px" }} className="fw-bold">
          <tr style={{ height: "300px" }}>
            <td>
              <span className="border-bottom border-2 border-black pb-2">
                {info.date}
              </span>
              <span className="d-block mt-3 text-12px">
                {info.time || "00:00 - 00:00"}
              </span>
            </td>
            <td>{info.time}</td>
            <td></td>
            <td>
              <span>امضاء</span>
              {info.signatureIsNurse ? "پرستار" : "دکتر"}:
              <div className="d-flex justify-content-center">
                <img
                  src={info.imageSignature}
                  alt="signature"
                  width={130}
                  height={130}
                  className="d-block"
                />
              </div>
            </td>
          </tr>
          <Footer
            familyName={info.familyName}
            name={info.name}
            unitNo={info.unitNo}
          />
        </tbody>
      </table>
    </div>
  );
};
