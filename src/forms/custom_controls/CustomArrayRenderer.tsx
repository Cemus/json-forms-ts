import {
  TextField,
  Box,
  Autocomplete,
  IconButton,
  FormControl,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { useState } from "react";
import { initialCountries } from "../country";

interface CountryPercentage {
  country: string;
  percentage: number;
}

interface CustomArrayRendererProps {
  data: CountryPercentage[];
  path: string;
  handleChange: (path: string, updatedData: CountryPercentage[]) => void;
}

export const CustomArrayRenderer = ({
  data,
  path,
  handleChange,
}: CustomArrayRendererProps) => {
  const [error, setError] = useState<string>("");

  const handleFieldChange = (
    index: number,
    field: "country" | "percentage",
    value: string | number
  ): void => {
    const updatedData = [...data];
    updatedData[index] = {
      ...updatedData[index],
      [field]: value,
    };

    handleChange(path, updatedData);
    percentageVerification(updatedData);
  };

  const handleCountryChange = (value: string, index: number) => {
    handleFieldChange(index, "country", value);
  };

  const percentageVerification = (updatedData: CountryPercentage[]): void => {
    const percentageSum = updatedData.reduce(
      (sum, item) => sum + item.percentage,
      0
    );
    if (percentageSum === 100) {
      setError("");
    } else {
      setError(
        `La somme de tous les pourcentages n'est pas égale à 100 (${percentageSum})`
      );
    }
  };

  const handlePercentageChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 100) {
      setError("");
    } else {
      setError("Le pourcentage doit être compris entre 0 et 100");
    }
    handleFieldChange(index, "percentage", value);
  };

  const handleAdd = () => {
    const updatedData = [...data, { country: "", percentage: 0 }];
    percentageVerification(updatedData);
    handleChange(path, updatedData);
  };

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    percentageVerification(updatedData);
    handleChange(path, updatedData);
  };

  return (
    <Box>
      <h2>Pays</h2>
      {data.map((item: CountryPercentage, index: number) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap={2}
          marginBlock={2}
          justifyContent="space-between"
        >
          <Box display="flex" gap={1} alignItems="center">
            <FormControl fullWidth sx={{ width: 250 }}>
              <Autocomplete
                disablePortal
                value={item.country || ""}
                options={initialCountries}
                renderInput={(params) => <TextField {...params} label="Pays" />}
                onChange={(_, newValue) =>
                  handleCountryChange(newValue || "", index)
                }
              />
            </FormControl>
            <TextField
              label="Pourcentage"
              variant="outlined"
              type="number"
              value={item.percentage || ""}
              onChange={(e) => handlePercentageChange(e, index)}
              placeholder="Pourcentage"
              sx={{ width: 100 }}
            />
            %
          </Box>

          <Box display="flex" gap={1} alignItems="center">
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
            <IconButton onClick={() => handleDelete(index)}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
      ))}
      {error && <p style={{ color: "red", marginLeft: "1rem" }}>{error}</p>}
    </Box>
  );
};
