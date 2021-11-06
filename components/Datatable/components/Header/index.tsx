import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";
const { RangePicker } = DatePicker;

export default function Header({
  onChange,
}: {
  onChange: (initialDate: string, finalDate: string) => void;
}) {
  function handleDateChange(values: any) {
    if (values) {
      onChange(values[0].toISOString(), values[0].toISOString());
    }
  }

  return (
    <div
      style={{
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>Intervalo de datas:</label>
      <RangePicker
        locale={locale}
        style={{ width: 360, height: 40 }}
        onChange={handleDateChange}
      />
    </div>
  );
}
