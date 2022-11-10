export const GetTextBold = ({
  text,
  query,
}: {
  text: string;
  query: string;
}) => {
  return text.includes(query) ? (
    <>
      {text.split(query)[0]}
      <span style={{ fontWeight: 'bold' }}>{query}</span>
      {text.split(query)[1]}
    </>
  ) : (
    <>{text}</>
  );
};
