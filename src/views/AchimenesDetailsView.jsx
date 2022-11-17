import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import getAchimeneById from "../services/ApiServices";
import { addCollection } from "../services/ApiServices";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function AchimenesDetailsView({ achimenes }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { achimeneId } = useParams();
  // const [achimene, setAchimene] = useState();
  console.log(achimeneId);
  console.log(achimenes);
  // useEffect(() => {
  //   getAchimeneById(achimeneId).then(setAchimene);
  // }, [achimeneId]);

  const achimene = achimenes.find((achimen) => achimen._id === achimeneId);
  console.log(achimene);
  const onBack = () => {
    window.history.back();
  };

  const onAddToCollection = () => {
    console.log(achimene.active);
    addCollection(achimene);
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={achimene.imgUrl} alt={achimene.title} width={316} />
          <h2 className={s.name}>{achimene.title}</h2>
        </div>
        <div className={s.cardDescr}>
          <p className={s.descr}>{achimene.descr}</p>
          <button className={s.button} onClick={onBack}>
            Повернутись до колекції
          </button>
          {isLoggedIn && (
            <button className={s.button} onClick={onAddToCollection}>
              Додати до приватної колекції
            </button>
          )}
        </div>
      </div>
    </>
  );
}
