import '@/styles/globals.css';
import Links from '../components/ui/Links';

export default function App({ Component, pageProps }) {
  return (
    <div className="py-20 max-w-xl mx-auto">
      <h1 className="mb-10 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5l lg:text-6l dark:text-slate-100">
        認証・認可
      </h1>
      <Links className="mb-10" />
      <Component {...pageProps} />
    </div>
  );
}
