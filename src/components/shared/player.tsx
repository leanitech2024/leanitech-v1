'use client';

import { createPlayer, videoFeatures } from '@videojs/react';
import { Video, VideoSkin } from '@videojs/react/video';
import '@videojs/react/video/skin.css';

const Player = createPlayer({ features: videoFeatures });

interface MyPlayerProps {
  id: string;
  src: string;
  width: number;
  height: number;
  isInView?: boolean;
}

export const MyPlayer = ({ src, width, height }: MyPlayerProps) => {
  return (
    <Player.Provider>
      <VideoSkin className={'rounded-none!'}>
        <Video
          src={src}
          playsInline
          width={width}
          height={height}
          disablePictureInPicture={true}
        />
      </VideoSkin>
    </Player.Provider>
  );
};
