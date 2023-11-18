import { Container, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Register() {
  const myStyle = {
    textAlign: "center",
    width: "800px",
    height: "570px",
    
  };

  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setReassword] = useState("");
  const [filled, setFilled] = useState("");

  function setValue() {
    if (!FirstName || !password || !LastName) {
      setFilled("Please fill all the fields");
    } else {
      setFilled("");
    }
  }

  return (
    <Box
      id="contain"
      style={{
        ...myStyle,
        backgroundImage: `url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F008%2F646%2F755%2Fsmall%2Freal-estate-logo-design-vector.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <h2>Register</h2>
        <br />

        <TextField
          required
          size="medium"
          label="Firstname"
          value={FirstName}
          variant="outlined"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          required
          size="medium"
          label="Lastname"
          value={LastName}
          variant="outlined"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <br />
        <br />

        <TextField
          required
          size="medium"
          label="Email"
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />

        <TextField
          required
          size="medium"
          label="Password"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <TextField
          required
          size="medium"
          label="Re-EnterPassword"
          value={repassword}
          type="password"
          onChange={(e) => {
            setReassword(e.target.value);
          }}
        />
        <br />
        <br />

        {filled && <p style={{ color: "red" }}>{filled}</p>}

        <Button variant="contained" type="submit" onClick={setValue}>
          Submit
        </Button>
      </Container>
    </Box>
  );
}

export default Register;
