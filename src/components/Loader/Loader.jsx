import { Oval } from 'react-loader-spinner';
const Loader = props => {
  return (
    <Oval
      height={40}
      width={40}
      color="#000"
      wrapperStyle={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#000"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
export default Loader;
