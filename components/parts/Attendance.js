import React from 'react';

function addMemberRow(member, i) {
    return (
        <tr key={i}>
            <td>{member.name}</td>
            <td>{member.id}</td>
        </tr>
    );
}

function Attendance({audience}) {
    return (
        <div>
            <h2>Attendance - {audience.length} members</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Audience Member</th>
                        <th>Socket ID</th>
                    </tr>
                </thead>
                <tbody>
                    {audience.map(addMemberRow)}
                </tbody>
            </table>
        </div>
    );
}

export default Attendance;