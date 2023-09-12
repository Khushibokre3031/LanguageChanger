import './menu.css';
const Menu = (props) =>{
    return(
        <div className = 'nav'>
            <a href="/">Home</a>
            <a href="/aboutus">About Us</a>
            <div className='drop-down'>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'fr'}>French</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
                <option value={'Sp'}>Spanish</option>
            </select>
            </div>
        </div>
        
    )
}
export default Menu;