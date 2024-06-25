import Button from "@/components/atoms/Button";
import IcHamburgerMenu from "@/components/atoms/Icons/IcHamburgerMenu.component";
import Text from "@/components/atoms/Text";
import { NAVS } from "@/constants/navs.constant";
import { clsx } from "clsx";
import Image from "next/image";
import s from "./Navbar.module.scss";
import useNavbarManager from "./useNavbarManager.hook";

const Navbar = () => {
  const navbarManager = useNavbarManager();

  return (
    <header
      className={clsx(
        s._Wrapper,
        navbarManager.getIsScrolled() && s._IsScrolled,
      )}
    >
      <nav className={s._Nav}>
        <div
          className={clsx(s._Left, "cursor-pointer")}
          onClick={() => navbarManager.getScrollIntoViewHandler("hero", 0)}
        >
          <div className={s._LogoContainer}>
            <Image
              src={"/images/logo.png"}
              width={300}
              height={300}
              alt="Logo"
            />
          </div>
          <Text fontWeight="700" element="p" className={clsx("body-xl")}>
            MyERP
          </Text>
        </div>
        <div className={s._Right}>
          <div className={s._Links}>
            {NAVS.map((nav, i) => (
              <Text
                onMouseDown={(e) => e.stopPropagation()}
                fontWeight="700"
                className={clsx("body-xl cursor-pointer")}
                element="p"
                onClick={() => navbarManager.getScrollIntoViewHandler(nav.href)}
                key={`${nav.label} - ${i}`}
              >
                {nav.label}
              </Text>
            ))}
          </div>
          <Button element="link" href="/dashboard" className={s._LoginButton}>
            <Text fontWeight="600" className="body-sm" element="p">
              LOGIN
            </Text>
          </Button>
          <IcHamburgerMenu
            onClick={navbarManager.getToggleHamburgerMenuHandler}
            className={clsx(s._HamburgerMenuButton, "cursor-pointer")}
            width={48}
          />
        </div>
      </nav>
      <div
        className={clsx(
          s._Menu,
          navbarManager.getIsHamburgerMenuOpen() && s._MenuOpened,
        )}
      >
        <div className={s._Links}>
          {NAVS.map((nav, i) => (
            <Text
              onMouseDown={(e) => e.stopPropagation()}
              fontWeight="700"
              className={clsx("body-xl cursor-pointer")}
              element="p"
              onClick={() => navbarManager.getScrollIntoViewHandler(nav.href)}
              key={`${nav.label} - ${i}`}
            >
              {nav.label}
            </Text>
          ))}
        </div>
        <Button element="link" href="/dashboard">
          <Text fontWeight="600" className="body-sm" element="p">
            LOGIN
          </Text>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
