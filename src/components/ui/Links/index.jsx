import Link from 'next/link';
import styles from './Links.module.css';
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
        <ul className={styles.gnav__list}>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.label} className={styles.gnav__item}>
                <Link
                  href={item.href}
                  className={styles.gnav__item}
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
