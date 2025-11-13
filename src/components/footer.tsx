import type { FooterProps } from "../types/footer";

export const Footer = (props: FooterProps) => {
  const { familyName, name, unitNo } = props;
  return (
    <tr>
      <td colSpan={4} className="footer">
        <div className="d-flex justify-content-around">
          <span>برگ دستورات پزشک</span>
          <div className="d-flex">
            <span>(</span>
            <span>بیمار:</span>
            <span className="px-1">{name}</span>
            <span>{familyName}</span>
            <span className="px-1">-</span>
            <span>کد پرونده:</span>
            <span>{unitNo}</span>
            <span>)</span>
          </div>
          <span>
            طرح استاندارد سازی و بهینه نمودن سیستم مدارک پزشکی کشور ۱۰۰/14
          </span>
        </div>
      </td>
    </tr>
  );
};
