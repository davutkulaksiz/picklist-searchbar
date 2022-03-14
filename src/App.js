import { useState } from "react";
import { PickList } from "primereact/picklist";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import "./App.css";
import "./PickListDemo.css";

function App() {
  const questions = [
    "Acente İl Kodu",
    "Acente Kodu",
    "Acente Tipi",
    "Cinsiyet",
    "Düzenli Spor Yapıyor mu?",
    "Eski Sigorta Şirketi",
    "Gebelik var mı?",
    "Geçmiş Ameliyat Sayısı",
    "Alkol kullanıyor mu?",
    "Boy",
    "Kilo",
    "Teşhis konmamış bir şikayet var mı?",
    "Teşhisi konulmuş bir hastalığı var mı?",
    "Tütün ürünleri kullanıyor mu?",
    "Vücut Kitle Endeksi",
  ];

  const selectedQuestions = [];

  const [text, setText] = useState("");
  const [source, setSource] = useState(questions);
  const [target, setTarget] = useState(selectedQuestions);

  const onChange = (e) => {
    setSource(e.source);
    setTarget(e.target);
  };

  const onFilter = (e) => {
    setText(e.target.value);

    if (text !== "") {
      const filteredQuestions = questions.filter((question) => {
        return question.toLowerCase().includes(text.toLowerCase());
      });
      setSource(filteredQuestions);
    } else {
      setSource(questions);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <span className="p-input-icon-left" style={{ marginRight: "85px" }}>
          <i className="pi pi-search" />
          <InputText
            value={text}
            onChange={onFilter}
            placeholder="Soru Listesinde Ara"
          />
        </span>

        <br />

        <PickList
          source={source}
          target={target}
          onChange={onChange}
          showSourceControls={false}
          showTargetControls={true}
          sourceHeader="Soru Listesi"
          targetHeader="Seçili Soru Listesi"
          sourceStyle={{ height: "342px" }}
          targetStyle={{ height: "342px" }}
        />
      </header>
    </div>
  );
}

export default App;
