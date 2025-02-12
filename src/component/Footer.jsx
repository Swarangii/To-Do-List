const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <div className="footerWrapper">
      {percentage === 100
        ? "Shopping Done!! "
        : `Total Items : ${numItems} ----
      Completed Item : ${numPacked} -- ${percentage.toFixed(2)} %`}
    </div>
  );
};
export default Footer;
