import Link from "next/link"
import classes from 'components/Header/Header.module.css'

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"},
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <span className={classes.anchor}>{item.label}</span>
          </Link>
        );
      })}
    </header>
  )
}
