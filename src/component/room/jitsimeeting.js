import { JitsiMeeting } from '@jitsi/react-sdk'
import './jitsimeeting.css'
import React from 'react'
function JitsiM() {
    const displayName = 'Default User'; 
    const 

        configOverwrite = {
            defaultLanguage: 'fr',
            disableDeepLinking: false,
            disableInviteFunctions: false,
          
            disableShowLogo: false,
            disableRemoteMute: true,
            disableRemoteControl: false,
            disableRemoteUnmute: false,
            filmStripOnly: false,
            disableLocalVideoFlip: false,
            remoteVideoMenu: {
                disableKick: false,
            },
            toolbarButtons: [
                'microphone',
                'camera',
                'closedcaptions',
                'desktop',
                'fullscreen',
                'hangup',
                'profile',
                'chat',
                
                'videobackgroundblur',
                
                'mute-everyone',
                'e2ee',
            ],
        };
  return (
      <JitsiMeeting
          roomName={'Tamaioz3222h'}
          displayName={displayName}
          configOverwrite={configOverwrite}
          getIFrameRef={node => {
              node.style.width = '100%';
              node.style.height = '600px';
          }}
      />
  )
}

export default JitsiM


