import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { COLORS } from './theme';
import { IntroScene, HomeScene, CodeScene, GitHubScene, RenderScene, OutroScene } from './scenes';

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {/* Background Cinematic Audio */}
      <Audio src={staticFile('audio.wav')} />
      
      {/* Total: 185 Seconds (5550 frames) */}
      
      <Sequence from={0} durationInFrames={450}>
        <IntroScene />
      </Sequence>
      
      <Sequence from={450} durationInFrames={600}>
        <HomeScene />
      </Sequence>
      
      <Sequence from={1050} durationInFrames={750}>
        <CodeScene />
      </Sequence>

      <Sequence from={1800} durationInFrames={1050}>
        <GitHubScene />
      </Sequence>

      <Sequence from={2850} durationInFrames={1350}>
        <RenderScene />
      </Sequence>

      <Sequence from={4200} durationInFrames={1350}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};