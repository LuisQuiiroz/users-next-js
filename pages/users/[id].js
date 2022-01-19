import React from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container';

const User = ({ user }) => {

    const router = useRouter();
    // const obj = router.query;
    const { id } = router.query; // Se obtiene el id de la ruta


    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img 
                                src={user.avatar} 
                                alt={user.first_name}
                                style={{borderRadius: '50%'}}
                                />
                        </div>
                        <div className="card-body text-center">
                            <h5>
                                {user.id}. {user.first_name} {user.last_name}
                            </h5>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

User.getInitialProps = async (ctx) => {
    const req = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const reqJSON = await req.json();
    return {user: reqJSON.data }
}

export default User
