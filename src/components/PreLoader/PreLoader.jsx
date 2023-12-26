import { LoaderWrapper } from "./PreLoader.styled";
import { Oval } from 'react-loader-spinner';
export const PreLoader = () => {
    return (
      <LoaderWrapper>
        <Oval
          height={80}
          width={80}
          color="#2196f3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#2196f3"
          strokeWidth={4}
          strokeWidthSecondary={2}
        />
      </LoaderWrapper>
    );
};
