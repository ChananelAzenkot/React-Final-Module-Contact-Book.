import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

export default function CreateModalCardForm({
  formData,
  handleInput,
  errors,
  handleSubmit,
}) {
  return (
    <>
      <TextField
        id="title"
        label="title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.title}
        onChange={handleInput}
        error={Boolean(errors.title)}
        helperText={errors.title}
      />
      <TextField
        id="description"
        label="description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleInput}
        error={Boolean(errors.description)}
        helperText={errors.description}
      />
      <TextField
        id="subtitle"
        label="subtitle"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.subtitle}
        onChange={handleInput}
        error={Boolean(errors.subtitle)}
        helperText={errors.subtitle}
      />
      <TextField
        id="phone"
        label="phone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleInput}
        error={Boolean(errors.phone)}
        helperText={errors.phone}
      />
      <TextField
        id="email"
        label="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleInput}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        id="web"
        label="web"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.web}
        onChange={handleInput}
        error={Boolean(errors.web)}
        helperText={errors.web}
      />
      <TextField
        id="imgUrl"
        label="imgUrl"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.imgUrl}
        onChange={handleInput}
        error={Boolean(errors.imgUrl)}
        helperText={errors.imgUrl}
      />
      <TextField
        id="imgAlt"
        label="imgAlt"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.imgAlt}
        onChange={handleInput}
        error={Boolean(errors.imgAlt)}
        helperText={errors.imgAlt}
      />
      <TextField
        id="state"
        label="state"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.state}
        onChange={handleInput}
        error={Boolean(errors.state)}
        helperText={errors.state}
      />
      <TextField
        id="country"
        label="country"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.country}
        onChange={handleInput}
        error={Boolean(errors.country)}
        helperText={errors.country}
      />
      <TextField
        id="city"
        label="city"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.city}
        onChange={handleInput}
        error={Boolean(errors.city)}
        helperText={errors.city}
      />
      <TextField
        id="street"
        label="street"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.street}
        onChange={handleInput}
        error={Boolean(errors.street)}
        helperText={errors.street}
      />
      <TextField
        id="houseNumber"
        label="houseNumber"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={formData.houseNumber}
        onChange={handleInput}
        error={Boolean(errors.houseNumber)}
        helperText={errors.houseNumber}
      />
      <TextField
        id="zip"
        label="zip"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={formData.zip}
        onChange={handleInput}
        error={Boolean(errors.zip)}
        helperText={errors.zip}
      />
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <IconButton
          id="btnCreateAndPress"
          style={{ width: "auto" }}
          onClick={handleSubmit}>
          <SendIcon />
        </IconButton>
      </Typography>
    </>
  );
}
