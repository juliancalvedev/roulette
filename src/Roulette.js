import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import exoticdollslogo from "./img/exoticdollslogo.png";
import pointerImg from "./img/pointer.png";
const Roulette = ({ data, onGift }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const checkPrice = () => {
    console.log(rouletteData[prizeNumber].completeOption);
    if (rouletteData[prizeNumber].completeOption == "ticket") {
      onGift();
    }
  };
  const handleSpinClick = () => {
    if (!mustSpin) {
      checkPrice();
      setMustSpin(true);
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
    }
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text,
        ...item.props,
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  useEffect(() => {
    // Función para manejar la pulsación de teclas
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        document.getElementById("roulette-button-spin").click();
      }
      // Aquí puedes ejecutar cualquier lógica que desees
    };

    // Agregar el event listener al montar el componente
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // [] asegura que el efecto solo se ejecute al montar y desmontar

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.5]}
            pointerProps={{
              src: pointerImg
            }}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["white"]}
          outerBorderWidth={[3]}
          innerBorderColor={["white"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[10]}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button
          id="roulette-button-spin"
          className="button roulette-button"
          onClick={handleSpinClick}
        >
          <img src={exoticdollslogo} width="120%" />
        </button>
      </div>
      <br />
      {/* <button
        className="prize-message"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        {!mustSpin ? rouletteData[prizeNumber].completeOption : "Кручу..."}
      </button> */}
    </>
  );
};

export default Roulette;
