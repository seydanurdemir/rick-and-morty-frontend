import './Loading.css';

const Loading = (props) => {
    return (
        props.show &&
        <div className='loading'>
            <img alt="Loading..." width="384px" height="216px" src="https://raw.githubusercontent.com/seydanurdemir/rick-and-morty-frontend/master/src/images/loading.gif" />
        </div>
    );
};

export default Loading;