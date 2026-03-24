import { Terminal } from '@/components/extends/terminal';

export default function AppDevelopment() {
  return (
    <Terminal
      commands={[
        'npx shadcn@latest init',
        'npm install motion',
        'npx shadcn@latest add button card',
        'Term Deez Nuts',
      ]}
      outputs={{
        0: [
          '✔ Preflight checks passed.',
          '✔ Created components.json',
          '✔ Initialized project.',
        ],
        1: ['added 1 package in 2s'],
        2: ['✔ Done. Installed button, card.'],
      }}
      typingSpeed={45}
      delayBetweenCommands={1000}
    />
  );
}
