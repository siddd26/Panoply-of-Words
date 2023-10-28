import { useEffect, useState } from "react";
const axios = require("axios").default;
// import "./Translator.css";

function Translator() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

    axios
      .post("https://libretranslate.de/translate", params, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };

  useEffect(() => {
    axios
      .get("https://libretranslate.de/languages", {
        headers: { accept: "application/json" }
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"

  return (
    <div className="translator">
      <h1>Translator</h1>
      <div>
        From ({from}) :
        <select readOnly={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}) :
        <select readOnly={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          cols="50"
          rows="8"
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div className="icons">
        <i id="from" className="fas fa-volume-up"></i>
        <i id="from" className="fas fa-copy"></i>
      </div>
      <div>
        <textarea cols="50" rows="8" value={output}></textarea>
      </div>
      <div className="icons">
        <i id="from" className="fas fa-volume-up"></i>
        <i id="from" className="fas fa-copy"></i>
      </div>
      <div>
        <button onClick={(e) => translate()}>Translate</button>
      </div>
    </div>
  );
}

export default Translator;