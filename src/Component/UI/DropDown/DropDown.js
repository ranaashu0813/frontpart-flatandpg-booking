import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark-outline" id="dropdown-basic">
        Know More 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/about">About</Dropdown.Item>
        <Dropdown.Item href="/ourteam">Team</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;