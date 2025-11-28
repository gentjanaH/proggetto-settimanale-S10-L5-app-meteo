import { Form, InputGroup } from 'react-bootstrap';


const SearchBarMeteo = function ({ value, onSearch }) {
    return (

        <InputGroup className=" w-75 w-md-25  mt-sm-2 mt-md-0 me-2">
            <InputGroup.Text id="inputGroup-sizing-default">
                <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="City, State"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch(e.target.value)
                    }
                }}
            />
        </InputGroup>


    );
}

export default SearchBarMeteo
    ;