import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import Headeer from "../../components/Headeer";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Form() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("This Field is Required."),
    lastName: Yup.string().required("This Field is Required."),
    email: Yup.string().email("Invalid Email."),
    contact: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone Number is not Valid.")
      .required("This field is Required."),
    address1: Yup.string().required("This Field is Required."),
    address2: Yup.string().required("This Field is Required."),
  });
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [openSnack, setOpenSnack] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Veriler:", values);
    setOpenSnack(true);
    resetForm();
  };
  const handleClose = () => {
    setOpenSnack(false);
  };

  //display="grid": Box bileşeninin içeriğini bir grid (ızgara) şeklinde düzenler. Grid düzeni, öğeleri satır ve sütunlarda yerleştirmenize
  //olanak tanır.
  /*
const value = "someValue";
const booleanValue = !!value; // true (eğer value boş değilse)
*/
  return (
    <Box marginLeft={2} marginRight={2}>
      <Headeer title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={SignupSchema}
      >
        {({
          values, // Formdaki her alanın mevcut değerini içeren bir nesnedir.
          errors, // Doğrulama (validation) işlemleri sonucunda oluşan hata mesajlarını içeren bir nesnedir.
          touched, // Kullanıcının bir form alanına dokunup dokunmadığını izleyen bir nesnedir.
          handleBlur, //Bir form alanından çıkıldığında (blur) çağrılan bir olay dinleyicisidir. Özellikle form alanlarına dokunma durumunu (touched) güncellemek için kullanılır.
          handleChange, //Bir form alanının değeri değiştiğinde çağrılan bir olay dinleyicisidir. Form alanlarının değerlerini güncellemek için kullanılır.
          handleSubmit, // Form gönderildiğinde çağrılan bir fonksiyondur. Genellikle formun doğrulama (validation) işlemleri başarılı olduğunda form verilerini sunucuya göndermek için kullanılır.
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px" // Bu, grid içindeki sırasız öğeler arasındaki boşluk miktarını belirtir
              gridTemplateColumns="repeat(4, minmax(0, 1fr))" //Toplamda 4 sütundan oluşsun en az 0 en fazla olan yer kadar yer kaplasın her bilr eleman anlamına geliyor.
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                label="First Name"
                variant="filled"
                type="text"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.firstName && errors.firstName)} //Error durumunda kırmızı gözükür
                helperText={touched.firstName && errors.firstName} //HelperText durumunda altta hata mesajını verir.
                sx={{ gridColumn: "span 2" }} //2 sürun genişliğinde olsun dedik
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="filled"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.firstName && !!errors.firstName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="email"
                variant="filled"
                name="email"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email"
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="number"
                variant="filled"
                name="contact"
                label="Contact Number"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.contact && errors.contact)}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="text"
                name="address1"
                label="Address 1"
                variant="filled"
                value={values.address1}
                error={Boolean(touched.address1 && errors.address1)}
                helperText={touched.address1 && errors.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                type="text"
                name="address2"
                label="Address 2"
                variant="filled"
                value={values.address2}
                error={Boolean(touched.address2 && errors.address2)}
                helperText={touched.address2 && errors.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box marginTop={2} display="flex" justifyContent="end">
              <Button
                type="submit"
                sx={{ marginRight: 0 ,  }}
                variant="contained"
                color="secondary"
                
              >
                CREATE NEW USER
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registration is Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}
