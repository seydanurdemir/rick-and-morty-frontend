import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <p className="text">Rick and Morty</p>
            <div className="icon">
                <img
                    alt=""
                    className="vector"
                    src="https://static.overlay-tech.com/assets/a871ad99-75e9-4cc9-ac37-a6ef2fb293df.svg"
                />
            </div>
        </div>
    );
};

export default Header;