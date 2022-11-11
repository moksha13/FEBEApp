import { useQuery, gql } from '@apollo/client';


const GET_DATA = gql`
  query GetAllPosts{
    getAllPosts{
      id
      description
      name
    }
  }
`;


function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getAllPosts.map(({ id, name, description }) => (
    <div key={id}>
      <h3>{name}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
    
  );
}



