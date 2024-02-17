export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);
  const options = { weekday: "long" as const };
  return date.toLocaleDateString("en-US", options);
}
