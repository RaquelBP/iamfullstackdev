import {Link} from 'react-router-dom'
const Home = ({data}) => {
  return (
    <>
    <h2>Lista de datos</h2>
    <ul>
      {data.map((item, i) => (
        <li key={i}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
