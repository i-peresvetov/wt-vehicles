import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { languageArr } from "../../assets/dataArr";
import { selectLang } from "../../redux/app/selectors";
import { setLanguage } from "../../redux/app/slice";

import styles from "./LangSwitch.module.scss";

// выбор по клику
// подсветка выбранного
// закрытие при клике вне контейнера

const LangSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={
        styles["lang-switch"] + " " + (open ? styles["lang-switch--open"] : "")
      }
      onClick={() => setOpen(!open)}
    >
      <div>[---] {lang.toUpperCase()} +</div>
      {open && (
        <div className={styles["lang-switch__dropdown"]}>
          <ul>
            {languageArr.map((language) => (
              <li
                key={language.value}
                className={styles["lang-switch__dropdown-item"]}
                onClick={() => dispatch(setLanguage(language.value))}
              >
                [---] {language.value.toUpperCase()} - {language.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangSwitch;
