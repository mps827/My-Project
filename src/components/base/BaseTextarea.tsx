interface MyComponent {
  id?: string;
  rows?: number | 4;
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BaseTextarea = (props: MyComponent) => {
  return (
    <textarea
      id="message"
      rows={props.rows}
      className={
        " flex resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-0 focus:ring-blue-500 focus:border-blue-500 dark:bg-Approx-Nero dark:border-Dark-Grey dark:placeholder-white/50 dark:text-white dark:focus:ring-Dove-Gray dark:focus:border-blue-500"
      }
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.handleChange}
    />
  );
};
export default BaseTextarea;
