
type Props = {
  label: string;
  value: string;
  containerClass?: string;
  labelClass?: string;
  valueClass?: string;
}

function KeyValue({label, value, containerClass, labelClass, valueClass}: Props) {
  return (
    <div className={`flex items-center space-x-2 space-x-reverse ${containerClass || ''}`}>
      <span className={labelClass || 'font-medium'}>{label}: </span>
      <span className={valueClass || 'font-semibold'}>{value}</span>
    </div>
  );
}

export default KeyValue;