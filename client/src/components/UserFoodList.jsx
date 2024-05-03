import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

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

export default OrderHistory;
