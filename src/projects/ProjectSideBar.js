import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const ProjectSidebar = () => {
    return (
        <Menu>
            <Link to="/projects/calculator">Calculator App</Link>
            <Link to="/projects/drum-machine-app">Drum Machine App</Link>
            <Link to="/src/App.js">Home</Link>
        </Menu>
    );
};

export default ProjectSidebar;