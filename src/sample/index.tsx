import EllipsisText from "../components/EllipsisText";

const Sample = () => {
  const text = "On a misty evening, she strolled, seeking calm and clarity.";
  return (
    <div>
      <EllipsisText text={text} maxLength={10} />
    </div>
  );
};

export default Sample;
