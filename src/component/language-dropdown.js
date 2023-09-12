const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'Ge'}>German</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
                <option value={'Sp'}>Spanish</option>
            </select>
        </div>
    )
}
export default Languageoption;