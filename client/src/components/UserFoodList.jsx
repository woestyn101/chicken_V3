import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function UsersFood() {
  const { loading, data  } = useQuery(QUERY_ME);
  console.log(data);
  let user;
  const userData = data?.me   || {};

  // if (data) {
  //   user = data.user;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(userData);

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Main Page</Link>
        
        {user ? (
          <>
            <h2>
           Recipes for {user.username} {user.email}
            </h2>
           
          </>
        ) : null}
      </div>
    </>
  );
}

export default UsersFood;
