import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear usuario
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{ 
            nombre: '', 
            email: '',
            edad: '',
            descripcion: '',
            contrasenia: '',
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            edad: Yup.number()
              .required('Required'),
            descripcion: Yup.string()
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            contrasenia: Yup.string()
              .min(8, "La contraseña debe tener minimo 8 caracteres")
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            


            
            alert(JSON.stringify(values, null, 2)); 
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="alert-dialog-title">
                Crear un nuevo usuario
              </DialogTitle>
              <DialogContent>
                  
                  <TextField 
                    sx={{
                      mt: 1
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="E-mail"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Contraseña"
                    name="contrasenia"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contrasenia}
                    error={Boolean(errors.contrasenia)}
                    helperText={errors.contrasenia}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Edad"
                    name="edad"
                    type="number"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.edad}
                    error={Boolean(errors.edad)}
                    helperText={errors.edad}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Descripción"
                    name="descripcion"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.descripcion}
                    error={Boolean(errors.descripcion)}
                    helperText={errors.descripcion}
                  />
              
              </DialogContent>
              <DialogActions>
                <Button type="submit" >
                  Crear 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}