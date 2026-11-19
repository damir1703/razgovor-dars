import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type L = { uz: string; ru: string };
export type Lang = 'uz' | 'ru';
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>(null as never);
export const useSettings = () => useContext(Ctx);
const read = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* приватный режим */ } };

export function SettingsProvider({ children }: { children: ReactNode }) {
  const url = new URLSearchParams(location.search).get('lang');
  const [lang, setLang] = useState<Lang>(() => (url === 'ru' || url === 'uz' ? url : read('dars-lang') === 'ru' ? 'ru' : 'uz'));
  useEffect(() => { document.documentElement.lang = lang; write('dars-lang', lang); }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export function useTx() { const { lang } = useSettings(); return (l: L) => l[lang]; }
export const sp = (n: number) => Math.round(n).toLocaleString('ru-RU').replace(/[\s,]/g, ' ');

/* Пошаговое появление: шаг слайда задаёт App, элементы показываются при step >= n */
export const StepCtx = createContext(99);
export const useStep = () => useContext(StepCtx);
