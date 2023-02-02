type FormatedDateProps = {
  date: string;
};
export const FormatedDate = (props: FormatedDateProps): JSX.Element => {
  const dateObj = new Date(props.date);
  const formattedDate = dateObj.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

  return (
    <>
      <p>Due: </p>
      <p className="font-bold text-gray-500">{formattedDate}</p>
    </>
  );
};
