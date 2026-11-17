import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`http://localhost:5000/users/${userId}`)
    const user = await res.json()
    return (
        <div>
            <h2>User details :{userId}</h2>
            <p>Name: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
        </div>
    );
};

export default UserDetailsPage;