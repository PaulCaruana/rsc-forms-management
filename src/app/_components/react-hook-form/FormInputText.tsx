import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type MuiTextFieldProps = Omit<TextFieldProps, "name"> & { name: string };

export const FormInputText = ({ name, label, ...props }: MuiTextFieldProps) => {
  const { control } = useFormContext(); // retrieve all hook methods
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          margin={"normal"}
          label={label}
          variant={"standard"}
          {...props}
        />
      )}
    />
  );
};
