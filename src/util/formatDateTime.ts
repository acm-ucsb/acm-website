import { format, parse } from "date-fns";

const formatDateTime = (
  datetime: string | undefined,
  targetFormat: string,
  fallbackString: string,
) => {
  if (!datetime) return fallbackString;

  try {
    const date = parse(datetime, "yyyy-MM-dd HH:mm:ss", new Date());
    return format(date, targetFormat);
  } catch (error) {
    return fallbackString;
  }
};

export default formatDateTime;
