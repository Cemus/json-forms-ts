export const initialCountries = ["France", "Belgique", "Allemagne", "Inconnu"];

const country = {
  schema: {
    type: "object",
    properties: {
      name: { type: "string" },
      countries: {
        type: "array",
        items: {
          type: "object",
          properties: {
            country: {
              type: "string",
              enum: initialCountries,
            },
            percentage: {
              type: "number",
              title: "Pourcentage",
            },
          },
          required: ["country", "percentage"],
        },
      },
    },
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        label: "Nom",
        scope: "#/properties/name",
      },
      {
        type: "HorizontalLayout",
        label: "Pays",
        elements: [
          {
            type: "Control",
            label: "Pays",
            scope: "#/properties/countries",
          },
        ],
      },
    ],
  },
  data: {
    countries: [
      { country: "France", percentage: 50 },
      { country: "Belgique", percentage: 20 },
      { country: "Allemagne", percentage: 10 },
      { country: "Inconnu", percentage: 20 },
    ],
  },
};

export default country;
