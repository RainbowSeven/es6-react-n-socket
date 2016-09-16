import React from 'react';
import Join from './parts/Join';
import Display from './parts/Display';
import Ask from './parts/Ask';

const Audience = ({status, member, audience, emit, currentQuestion}) => {
    return (
        <div>
            <Display if={status === 'connected'}>
                <Display if={member.name}>
                    <Display if={!currentQuestion}>
                        <h2>Welcome {member.name}</h2>
                        <p>{audience.length} audience members connected</p>
                        <p>Questions will appear here.</p>
                    </Display>

                    <Display if={currentQuestion}>
                        <Ask question={currentQuestion} emit={emit} />
                    </Display>
                </Display>

                <Display if={!member.name}>
                  <h1>Join the session</h1>
                  <Join emit={emit}/>
                </Display>
            </Display>
        </div>
    );
};

export default Audience;
