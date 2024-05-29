import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { languageArr } from "../../assets/dataArr";
import { selectLang } from "../../redux/app/selectors";
import { setLanguage } from "../../redux/app/slice";

import styles from "./LangSwitch.module.scss";

// подсветка текущего языка
// стрелочка вниз/вверх

const LangSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const switchRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        switchRef.current &&
        // !switchRef.current.contains(event.target as Node)
        !event.composedPath().includes(switchRef.current)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [switchRef]);

  return (
    <div
      className={
        styles["lang-switch"] + " " + (open ? styles["lang-switch--open"] : "")
      }
      onClick={() => setOpen(!open)}
      ref={switchRef}
    >
      <div className={styles["lang-switch__active"]}>
        <div
          className={styles["lang-switch__flag"]}
          style={{
            backgroundImage: `url(${require(`./../../assets/flag/${lang}.svg`)})`,
          }}
        ></div>
        <div>{lang.toUpperCase()}</div>
      </div>
      {open && (
        <div className={styles["lang-switch__dropdown"]}>
          <ul>
            {languageArr.map((language) => (
              <li
                key={language.value}
                className={styles["lang-switch__dropdown-item"]}
                onClick={() => dispatch(setLanguage(language.value))}
              >
                <div
                  className={styles["lang-switch__flag"]}
                  style={{
                    backgroundImage: `url(${require(`./../../assets/flag/${language.value}.svg`)})`,
                  }}
                ></div>
                <div>
                  {language.value.toUpperCase()} - {language.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangSwitch;
