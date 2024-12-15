import { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import country from "./forms/country";
import { CustomArrayControl } from "./forms/custom_controls/CustomArrayControl";

interface CountryPercentage {
  country: string;
  percentage: number;
}

interface CountryData {
  name?: string;
  countries: CountryPercentage[];
}

interface HandleDataChange {
  data: CountryData;
}

const App = () => {
  const schema = country.schema;
  const uischema = country.uischema;
  const initialData: CountryData = country.data;

  const [data, setData] = useState<CountryData>(initialData);

  const handleDataChange = ({ data }: HandleDataChange) => {
    setData(data);
  };

  const renderers = [
    ...materialRenderers,
    {
      tester: CustomArrayControl.tester,
      renderer: CustomArrayControl.renderer,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={handleDataChange}
      />
      <div>
        <h2>JSON :</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
