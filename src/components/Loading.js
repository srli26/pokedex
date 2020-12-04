import loading from '../images/loading.gif';
import loadingSmall from '../images/loading-sm.gif';
import PropTypes from 'prop-types';

const Loading = (props) => {

  const { page } = props;

  return (
    <div className="text-center my-5">
      {page === 'list' ? (
        <img src={loading} alt="loading icon" width="100px"></img>
      ) : (
        <img src={loadingSmall} alt="loading icon" width="50px"></img>
        )}
    </div>
  );
}

Loading.defaultProps = {
  page: undefined,
};

Loading.propTypes = {
  page: PropTypes.string,
};

export default Loading;