import Image from "next/image";
import styles from "./style.module.scss";
import imagebg from "@/public/image/venom-the-last-dance.png";
import imdb from "@/public/image/aaxz4ub0k.webp";
import { Button } from "@nextui-org/button";
const CardMoves = () => {
  return (
    <>
      <div
        className={` ${styles.card_moveis} flex flex-col justify-center items-center gap-2 rounded-xl   border  relative transition-all`}
      >
        <Image
          width={250}
          height={250}
          src={imagebg}
          className="rounded-xl z-10 "
          alt=""
        />
        <div className="absolute top-[342px] z-20 ">
          <Button className="rounded-sm rounded-s-large bg-slate-600 text-white">
            قسمت 5
          </Button>
          <Button className="rounded-sm rounded-e-large" color="secondary">
            قسمت 5
          </Button>
        </div>
        <div
          className={` ${styles.card_moveis_text} absolute top-[300px]  text-white z-40  transition-all `}
        >
          Venom: The Last Dance
        </div>
      </div>
    </>
  );
};

export default CardMoves;
