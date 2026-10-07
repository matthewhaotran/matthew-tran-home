export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
      {children}
    </li>
  );
}
