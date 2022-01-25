import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 d-flex justify-content-around'>
                        <div className='menu'>
                            <p className="text">Rick</p>
                            <img
                                alt=""
                                className="icon"
                                src="https://static.overlay-tech.com/assets/a871ad99-75e9-4cc9-ac37-a6ef2fb293df.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;