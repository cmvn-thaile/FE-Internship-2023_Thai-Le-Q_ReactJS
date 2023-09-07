import { useSelector } from 'react-redux';

interface ErrorProps {
  error: string;
}


const Error = ({ error }: ErrorProps) => {
  return (
    <>
      <div className="d-flex flex-cols  justify-center align-center gap-10">
        <figure>
          <img
            src="https://media1.giphy.com/media/d7EWlj76ZlMiY/giphy.gif?cid=4ed1f778bb4ab43e8c75f439fdd094de2fc33e444c87a03c&ep=v1_gifs_random&rid=giphy.gif&ct=g"
            alt="error"
          />
        </figure>
        <h3 className="cart-empty-title">{error}</h3>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Refresh Browser
        </button>
      </div>
    </>
  );
};

export default Error;
