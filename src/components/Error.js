import './Error.css';

const Error = (props) => {
    return (
        props.show &&
        <div className='error'>
            <img alt="Error!" width="520px" height="314px" src="https://raw.githubusercontent.com/seydanurdemir/rick-and-morty-frontend/master/src/images/error.png" />
        </div>
    );
};

export default Error;