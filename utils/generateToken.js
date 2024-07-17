import jwt from "jsonwebtoken";

const generateToken = (id) => {
	return jwt.sign( {id}, process.env.JWT_KEY, { expiresIn:"9d" } );
};


export default generateToken;

/*  New Token Valid till 24Sept24
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzU0ZjM1ZjQxYmU4ZjM4ZTkxNTBhMyIsImlhdCI6MTcxOTM4ODIwNCwiZXhwIjoxNzIwMTY1ODA0fQ.X420j1xZ672kw5lWiYvOkgme9M--1YyPNCd2AV-jnIU
*/