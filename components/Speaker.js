import React from 'react';
import Display from './parts/Display';
import JoinSpeaker from './parts/JoinSpeaker';
import Attendance from './parts/Attendance';
import Questions from './parts/Questions';

const Speaker = ({member, status, audience, emit, questions}) => {
    return (
        <div>
            <Display if={status === 'connected'}>
                <Display if={member.name && member.type === 'speaker'}>
                    <Questions questions={questions} emit={emit} />
                    <Attendance audience={audience} />
                </Display>

                <Display if={!member.name}>
                    <h2>Start the presentation</h2>
                    <JoinSpeaker emit={emit}/>
                </Display>
            </Display>
        </div>
    );
};

export default Speaker;
