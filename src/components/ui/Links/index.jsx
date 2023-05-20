import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'トップ' },
  { href: '/mypage', label: 'マイページ' },
  { href: '/login', label: 'ログイン' },
  { href: '/register', label: '新規登録' },
];

const HeaderMenu = (props) => {
  return (
    <div className={props.className}>
      <nav>
        <ul className="mb-10 flex m-auto gap-8 justify-center">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xl hover:text-sky-700 tracking-widest font-sans dark:text-slate-5"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
