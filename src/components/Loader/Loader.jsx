import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = () => {
   const override = {
     display: 'block',
     margin: '50px auto',
   }; 
  return (
    <>
      <ClipLoader
        color={'orangered'}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};
